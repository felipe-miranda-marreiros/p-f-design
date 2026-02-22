import {
	HomeRounded,
	PieChartRounded,
	ReceiptLongRounded,
	SavingsRounded,
	SwapVertRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tab, TabPanel, Tabs, tabA11yProps } from "./tab.component";

const meta = {
	title: "Components/Tab",
	component: Tab,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		label: "Placeholder",
		disabled: false,
	},
	argTypes: {
		label: { control: "text" },
		disabled: { control: "boolean" },
		iconPosition: {
			control: { type: "select" },
			options: ["start", "end", "top", "bottom"],
		},
	},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllStates: Story = {
	render: () => (
		<Stack spacing={4} sx={{ p: 4, minWidth: 320 }}>
			<Typography variant="body2" color="text.secondary">
				Default (unselected)
			</Typography>
			<Tabs value={false} aria-label="Unselected tab example">
				<Tab
					label="Placeholder"
					icon={<SwapVertRounded />}
					iconPosition="start"
				/>
			</Tabs>

			<Typography variant="body2" color="text.secondary">
				Hover (mouse over the tab to see)
			</Typography>
			<Tabs value={false} aria-label="Hover tab example">
				<Tab
					label="Placeholder"
					icon={<SwapVertRounded />}
					iconPosition="start"
				/>
			</Tabs>

			<Typography variant="body2" color="text.secondary">
				Selected
			</Typography>
			<Tabs value={0} aria-label="Selected tab example">
				<Tab
					label="Placeholder"
					icon={<SwapVertRounded />}
					iconPosition="start"
					{...tabA11yProps(0)}
				/>
			</Tabs>
		</Stack>
	),
};

export const Interactive: Story = {
	render: () => {
		const [value, setValue] = useState(0);

		return (
			<Box sx={{ width: 400 }}>
				<Tabs
					value={value}
					onChange={(_, newValue) => setValue(newValue as number)}
					aria-label="Interactive tabs example"
				>
					<Tab
						label="Overview"
						icon={<HomeRounded />}
						iconPosition="start"
						{...tabA11yProps(0)}
					/>
					<Tab
						label="Transactions"
						icon={<SwapVertRounded />}
						iconPosition="start"
						{...tabA11yProps(1)}
					/>
					<Tab
						label="Budgets"
						icon={<PieChartRounded />}
						iconPosition="start"
						{...tabA11yProps(2)}
					/>
					<Tab
						label="Pots"
						icon={<SavingsRounded />}
						iconPosition="start"
						{...tabA11yProps(3)}
					/>
					<Tab
						label="Recurring bills"
						icon={<ReceiptLongRounded />}
						iconPosition="start"
						{...tabA11yProps(4)}
					/>
				</Tabs>
				<TabPanel value={value} index={0}>
					<Typography sx={{ pt: 4 }}>Overview content</Typography>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Typography sx={{ pt: 4 }}>Transactions content</Typography>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Typography sx={{ pt: 4 }}>Budgets content</Typography>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Typography sx={{ pt: 4 }}>Pots content</Typography>
				</TabPanel>
				<TabPanel value={value} index={4}>
					<Typography sx={{ pt: 4 }}>Recurring bills content</Typography>
				</TabPanel>
			</Box>
		);
	},
};

export const WithIcons: Story = {
	render: () => {
		const [value, setValue] = useState(0);

		return (
			<Tabs
				value={value}
				onChange={(_, newValue) => setValue(newValue as number)}
				aria-label="Icon tabs example"
			>
				<Tab
					label="Home"
					icon={<HomeRounded />}
					iconPosition="start"
					{...tabA11yProps(0)}
				/>
				<Tab
					label="Budgets"
					icon={<PieChartRounded />}
					iconPosition="start"
					{...tabA11yProps(1)}
				/>
				<Tab
					label="Savings"
					icon={<SavingsRounded />}
					iconPosition="start"
					{...tabA11yProps(2)}
				/>
			</Tabs>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<Tabs value={0} aria-label="Disabled tab example">
			<Tab label="Active" {...tabA11yProps(0)} />
			<Tab label="Disabled" disabled {...tabA11yProps(1)} />
			<Tab label="Another" {...tabA11yProps(2)} />
		</Tabs>
	),
};
