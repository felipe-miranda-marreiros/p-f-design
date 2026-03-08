import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { DonutChart } from "./donut-chart.component";

const meta = {
	title: "Components/DonutChart",
	component: DonutChart,
	parameters: { layout: "centered" },
	args: {
		segments: [
			{ value: 338, color: "#277D78", label: "Entertainment" },
			{ value: 150, color: "#82C9D7", label: "Bills" },
			{ value: 200, color: "#F2CDAC", label: "Dining" },
			{ value: 287, color: "#626070", label: "Personal" },
		],
		centerText: { main: "$338", sub: "of $975 limit" },
	},
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleSegment: Story = {
	name: "Single Segment (100%)",
	args: {
		segments: [{ value: 1, color: "#277D78", label: "Total" }],
		centerText: { main: "$975", sub: "of $975 limit" },
	},
};

export const TwoSegments: Story = {
	name: "Two Segments",
	args: {
		segments: [
			{ value: 60, color: "#82C9D7", label: "Used" },
			{ value: 40, color: "#F2F2F2", label: "Remaining" },
		],
		centerText: { main: "60%", sub: "used" },
	},
};

export const CustomSize: Story = {
	name: "Custom Sizes",
	render: (args) => (
		<Stack direction="row" spacing={6} alignItems="center">
			<Box>
				<Typography variant="caption" display="block" textAlign="center" mb={1}>
					160px
				</Typography>
				<DonutChart {...args} size={160} strokeWidth={20} />
			</Box>
			<Box>
				<Typography variant="caption" display="block" textAlign="center" mb={1}>
					240px (default)
				</Typography>
				<DonutChart {...args} />
			</Box>
			<Box>
				<Typography variant="caption" display="block" textAlign="center" mb={1}>
					320px
				</Typography>
				<DonutChart {...args} size={320} strokeWidth={36} />
			</Box>
		</Stack>
	),
};

export const AllColors: Story = {
	name: "All Theme Colors",
	args: {
		segments: [
			{ value: 1, color: "#277D78", label: "Green" },
			{ value: 1, color: "#82C9D7", label: "Cyan" },
			{ value: 1, color: "#F2CDAC", label: "Yellow" },
			{ value: 1, color: "#626070", label: "Navy" },
			{ value: 1, color: "#826CB0", label: "Purple" },
			{ value: 1, color: "#93674F", label: "Brown" },
			{ value: 1, color: "#CAB361", label: "Gold" },
		],
		centerText: { main: "7", sub: "categories" },
	},
};
