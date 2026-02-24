import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "@/app/styles/colors";
import { ProgressBar } from "./progress-bar.component";

const meta = {
	title: "Components/ProgressBar",
	component: ProgressBar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<Box sx={{ width: 320 }}>
				<Story />
			</Box>
		),
	],
	args: {
		value: 50,
		variant: "rounded",
		showLabel: false,
	},
	argTypes: {
		value: {
			control: { type: "range", min: 0, max: 100 },
		},
		variant: {
			control: { type: "select" },
			options: ["flat", "rounded"],
		},
		color: { control: { type: "color" } },
		trackColor: { control: { type: "color" } },
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Flat: Story = {
	args: {
		variant: "flat",
	},
};

export const WithLabel: Story = {
	args: {
		showLabel: true,
	},
};

export const MultiSegment: Story = {
	args: {
		variant: "flat",
		segments: [
			{ value: 5, color: colors.grey[900] },
			{ value: 30, color: colors.secondaryColors.green },
		],
	},
};

const PROGRESS_VALUES = [0, 25, 50, 75, 100];

export const AllValues: Story = {
	render: () => (
		<Stack spacing={3} sx={{ width: 320 }}>
			{PROGRESS_VALUES.map((value) => (
				<Stack key={value} spacing={1}>
					<Typography variant="body2" color="text.secondary">
						{value}%
					</Typography>
					<ProgressBar value={value} />
				</Stack>
			))}
		</Stack>
	),
};
