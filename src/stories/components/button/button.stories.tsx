import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/stories/components/button/button.component";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: "Button",
	},
};

export const Secondary: Story = {
	args: {
		label: "Button",
	},
};

export const Large: Story = {
	args: {
		label: "Button",
	},
};

export const Small: Story = {
	args: {
		label: "Button",
	},
};

export const Test: Story = {
	args: {
		label: "Button",
	},
};
