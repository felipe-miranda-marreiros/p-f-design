import { Button, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { Paper, PaperTitle } from "./paper.component";

const meta = {
	title: "Components/Paper",
	component: Paper,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Paper sx={{ width: 400 }}>
			<Typography variant="body1">
				This is a Paper container with default padding and styling.
			</Typography>
		</Paper>
	),
};

export const WithTitle: Story = {
	render: () => (
		<Paper sx={{ width: 400 }}>
			<PaperTitle>Transactions</PaperTitle>
			<Typography variant="body1">
				Paper content goes here below the title.
			</Typography>
		</Paper>
	),
};

export const WithTitleAndAction: Story = {
	render: () => (
		<Paper sx={{ width: 400 }}>
			<PaperTitle
				rightAction={
					<Button variant="tertiary" size="small">
						View All &rarr;
					</Button>
				}
			>
				Transactions
			</PaperTitle>
			<Typography variant="body1">
				Paper content with a title and right action button.
			</Typography>
		</Paper>
	),
};
