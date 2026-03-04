import { Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import Dot from "./dot.component";

const meta = {
	title: "Components/Dot",
	component: Dot,
	parameters: {
		layout: "centered",
	},
	args: {
		color: "#277D78",
	},
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const COLORS = [
	{ name: "Green", value: "#277D78" },
	{ name: "Yellow", value: "#F5C97A" },
	{ name: "Cyan", value: "#7ECFD4" },
	{ name: "Navy", value: "#3B4A6B" },
	{ name: "Red", value: "#C0392B" },
	{ name: "Purple", value: "#7D3C98" },
	{ name: "Turquoise", value: "#1A7D6B" },
	{ name: "Brown", value: "#8B4513" },
	{ name: "Magenta", value: "#8B2252" },
	{ name: "Blue", value: "#2E86C1" },
	{ name: "Navy Grey", value: "#6B7E9C" },
	{ name: "Army Green", value: "#6B7A2E" },
	{ name: "Pink", value: "#7D3C6B" },
	{ name: "Gold", value: "#B8A225" },
	{ name: "Orange", value: "#C07A39" },
];

export const AllColors: Story = {
	render: () => (
		<Stack spacing={1.5}>
			{COLORS.map(({ name, value }) => (
				<Stack key={name} direction="row" spacing={1.5} alignItems="center">
					<Dot color={value} />
					<Typography variant="body2">{name}</Typography>
				</Stack>
			))}
		</Stack>
	),
};
