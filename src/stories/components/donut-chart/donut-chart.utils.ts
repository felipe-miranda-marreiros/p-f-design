export interface DonutChartSegment {
	value: number;
	color: string;
	label?: string;
}

export interface ArcDescriptor {
	id: string;
	d: string;
	color: string;
	label?: string;
}

const toRadians = (deg: number) => (deg - 90) * (Math.PI / 180);

const polarToCartesian = (cx: number, cy: number, r: number, deg: number) => ({
	x: cx + r * Math.cos(toRadians(deg)),
	y: cy + r * Math.sin(toRadians(deg)),
});

export const buildArcs = (
	segments: DonutChartSegment[],
	size: number,
	strokeWidth: number,
	gapDegrees: number,
): ArcDescriptor[] => {
	const cx = size / 2;
	const cy = size / 2;
	const r = cx - strokeWidth / 2 - 2;
	const total = segments.reduce((acc, s) => acc + s.value, 0);

	if (total === 0) return [];

	let cursor = 0;

	return segments.flatMap((seg, segIndex) => {
		const proportion = seg.value / total;
		const span = proportion * 360;
		const effectiveStart = cursor + gapDegrees / 2;
		const effectiveSpan = Math.max(span - gapDegrees, 1);
		cursor += span;

		// A single full-circle segment can't be drawn with one arc command
		// (start and end points would be identical), so split into two halves.
		if (proportion >= 1) {
			const midAngle = effectiveStart + effectiveSpan / 2;
			const p1 = polarToCartesian(cx, cy, r, effectiveStart);
			const pm = polarToCartesian(cx, cy, r, midAngle);
			const p2 = polarToCartesian(
				cx,
				cy,
				r,
				effectiveStart + effectiveSpan - 0.01,
			);
			return [
				{
					id: `${segIndex}-a`,
					d: `M ${p1.x} ${p1.y} A ${r} ${r} 0 0 1 ${pm.x} ${pm.y}`,
					color: seg.color,
					label: seg.label,
				},
				{
					id: `${segIndex}-b`,
					d: `M ${pm.x} ${pm.y} A ${r} ${r} 0 0 1 ${p2.x} ${p2.y}`,
					color: seg.color,
					label: seg.label,
				},
			];
		}

		const start = polarToCartesian(cx, cy, r, effectiveStart);
		const end = polarToCartesian(cx, cy, r, effectiveStart + effectiveSpan);
		const largeArc = effectiveSpan > 180 ? 1 : 0;

		return [
			{
				id: String(segIndex),
				d: `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`,
				color: seg.color,
				label: seg.label,
			},
		];
	});
};
