import { Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.component";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		children: "Placeholder",
		disabled: false,
		loading: false,
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "tertiary", "destroy"],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
};

export const Tertiary: Story = {
	args: {
		variant: "tertiary",
	},
};

export const Destroy: Story = {
	args: {
		variant: "destroy",
	},
};

export const AllVariants: Story = {
	render: () => (
		<Stack spacing={2}>
			<Stack direction="row" spacing={2}>
				<Button variant="primary">Placeholder</Button>
				<Button variant="secondary">Placeholder</Button>
				<Button variant="tertiary">Placeholder</Button>
				<Button variant="destroy">Placeholder</Button>
			</Stack>
		</Stack>
	),
};
