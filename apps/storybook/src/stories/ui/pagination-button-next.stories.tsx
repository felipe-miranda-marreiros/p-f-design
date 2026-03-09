import { PaginationButton } from "@felipe-miranda-marreiros/ui";
import type { Meta, StoryObj } from "storybook-react-rsbuild";

const meta = {
	title: "Pagination/Pagination Button - Next",
	component: PaginationButton,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: {
		direction: "next",
	},
} satisfies Meta<typeof PaginationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
	args: { disabled: true },
};
