import {
	HomeRounded,
	PieChartRounded,
	ReceiptLongRounded,
	SavingsRounded,
	SwapVertRounded,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import type { Meta, StoryContext, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MemoryRouter } from "react-router";
import { Sidebar, type SidebarNavItem } from ".";

// ---- Mock data ----

const MOCK_ITEMS: SidebarNavItem[] = [
	{ icon: <HomeRounded />, label: "Overview", path: "/dashboard" },
	{
		icon: <SwapVertRounded />,
		label: "Transactions",
		path: "/transactions",
	},
	{ icon: <PieChartRounded />, label: "Budgets", path: "/budgets" },
	{ icon: <SavingsRounded />, label: "Pots", path: "/pots" },
	{
		icon: <ReceiptLongRounded />,
		label: "Recurring bills",
		path: "/bills",
	},
];

// ---- Page content placeholder ----
// Shown to the right of the sidebar in every story so the layout looks real.

function PageContent({ title }: { title: string }) {
	return (
		<Box
			component="main"
			sx={{
				flex: 1,
				p: 6,
				bgcolor: "background.default",
				overflowY: "auto",
			}}
		>
			<Typography variant="h2" sx={{ mb: 2 }}>
				{title}
			</Typography>
			<Typography variant="body1" color="text.secondary">
				Main content area
			</Typography>
		</Box>
	);
}

// ---- Meta ----
// The decorator reads `parameters.initialPath` so individual stories can
// change the active route without nesting a second <MemoryRouter>.
// It also wraps every story in a full-height page layout so the sidebar
// is visible in context.

const meta = {
	title: "Components/Sidebar",
	component: Sidebar,
	parameters: {
		layout: "fullscreen",
		initialPath: "/dashboard",
	},
	decorators: [
		(Story, context: StoryContext) => {
			const initialPath: string =
				context.parameters.initialPath ?? "/dashboard";
			return (
				<MemoryRouter initialEntries={[initialPath]}>
					<Box sx={{ display: "flex", height: "100vh" }}>
						<Story />
						<PageContent title="Dashboard" />
					</Box>
				</MemoryRouter>
			);
		},
	],
	args: {
		items: MOCK_ITEMS,
		status: "idle",
	},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---- Stories ----

export const Default: Story = {};

export const ActiveItem: Story = {
	parameters: {
		initialPath: "/transactions",
	},
};

export const Minimized: Story = {
	args: {
		minimized: true,
	},
};

export const Loading: Story = {
	args: {
		status: "loading",
	},
};

export const Empty: Story = {
	args: {
		items: [],
	},
};

export const ErrorState: Story = {
	args: {
		status: "error",
		errorMessage: "Could not load navigation items.",
	},
};

export const Mobile: Story = {
	parameters: {
		viewport: { defaultViewport: "mobile1" },
	},
};

export const Tablet: Story = {
	parameters: {
		viewport: { defaultViewport: "tablet" },
	},
};

export const ControlledMinimize: Story = {
	render: (args) => {
		const [minimized, setMinimized] = useState(false);
		return (
			<Box sx={{ display: "flex", height: "100vh" }}>
				<Sidebar
					{...args}
					minimized={minimized}
					onMinimizeChange={setMinimized}
				/>
				<Box
					component="main"
					sx={{ flex: 1, p: 6, bgcolor: "background.default" }}
				>
					<Typography variant="h2" sx={{ mb: 2 }}>
						Controlled minimize
					</Typography>
					<Typography variant="body1" color="text.secondary">
						Sidebar is currently{" "}
						<strong>{minimized ? "minimized" : "expanded"}</strong>. Click the
						chevron button inside the sidebar to toggle it.
					</Typography>
				</Box>
			</Box>
		);
	},
};
