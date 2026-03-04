// ---- Global Overlay ----

export interface GlobalOverlayProps {
	/** Loading message displayed below the spinner */
	label?: string;
	/** Accessible label for the loader region */
	"aria-label"?: string;
}

// ---- MFE Transition ----

export interface MfeTransitionProps {
	/** Loading message displayed below the blocks */
	label?: string;
	/** Accessible label for the loader region */
	"aria-label"?: string;
}

// ---- Skeleton Cards ----

export interface SkeletonCardsProps {
	/** Number of skeleton cards to render */
	count?: number;
	/** Grid columns */
	columns?: 1 | 2;
	/** Accessible label for the loader region */
	"aria-label"?: string;
}

// ---- Section Loader ----

export interface SectionLoaderProps {
	/** Loading message displayed below the wave bars */
	label?: string;
	/** Accessible label for the loader region */
	"aria-label"?: string;
}

// ---- Inline Loader ----

export type InlineLoaderVariant = "bars" | "dots";

export interface InlineLoaderProps {
	/** Visual style: "bars" (coin stacks) or "dots" (breathing dots) */
	variant?: InlineLoaderVariant;
	/** Loading message displayed below the animation */
	label?: string;
	/** Accessible label for the loader region */
	"aria-label"?: string;
}

// ---- Page Skeleton ----

export interface PageSkeletonProps {
	/** Number of nav items in the sidebar skeleton */
	sidebarItemCount?: number;
	/** Number of card skeletons in the content area */
	cardCount?: number;
	/** Accessible label for the loader region */
	"aria-label"?: string;
}
