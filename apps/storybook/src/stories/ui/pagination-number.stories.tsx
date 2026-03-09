import { PaginationNumber } from "@felipe-miranda-marreiros/ui";
import { Stack } from "@mui/material";
import type { Meta, StoryObj } from "storybook-react-rsbuild";

const meta = {
	title: "Pagination/Pagination Number",
	component: PaginationNumber,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	args: {
		page: 1,
		active: false,
	},
} satisfies Meta<typeof PaginationNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
	args: { active: true },
};

export const AllStates: Story = {
	render: () => (
		<Stack direction="row" spacing={2}>
			<PaginationNumber page={1} />
			<PaginationNumber page={1} active />
		</Stack>
	),
};
