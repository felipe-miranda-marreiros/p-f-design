import { SearchRounded } from "@mui/icons-material";
import { MenuItem, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { TextField } from "./text-field.component";

const meta = {
	title: "Components/TextField",
	component: TextField,
	parameters: {
		layout: "centered",
	},
	args: {
		placeholder: "Placeholder",
		disabled: false,
		error: false,
	},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole("textbox");

		await expect(input).toBeInTheDocument();
		await expect(input).not.toBeDisabled();

		await userEvent.type(input, "Hello World");
		await expect(input).toHaveValue("Hello World");
	},
};

export const WithError: Story = {
	args: {
		error: true,
		helperText: "Error message",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole("textbox")).toBeInTheDocument();
		await expect(canvas.getByText("Error message")).toBeInTheDocument();
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const WithPrefix: Story = {
	args: {
		prefix: "$",
	},
};

export const WithStartIcon: Story = {
	args: {
		startIcon: <SearchRounded />,
	},
};

export const WithEndIcon: Story = {
	args: {
		endIcon: <SearchRounded />,
	},
};

export const Select: Story = {
	args: {
		select: true,
		label: "Category",
		colorTag: "#277D78",
		defaultValue: "option1",
	},
	render: (args) => (
		<TextField {...args}>
			<MenuItem value="option1">Option 1</MenuItem>
			<MenuItem value="option2">Option 2</MenuItem>
			<MenuItem value="option3">Option 3</MenuItem>
		</TextField>
	),
};

export const FieldStates: Story = {
	parameters: { a11y: { disable: true } },
	render: () => (
		<Stack direction="row" spacing={3} alignItems="flex-start">
			<Stack spacing={1}>
				<Typography variant="body2" color="text.secondary">
					Default
				</Typography>
				<TextField select colorTag="#277D78" defaultValue="option1">
					<MenuItem value="option1">Option 1</MenuItem>
				</TextField>
			</Stack>

			<Stack spacing={1}>
				<Typography variant="body2" color="text.secondary">
					Hover
				</Typography>
				<TextField select colorTag="#277D78" prefix="$" defaultValue="option1">
					<MenuItem value="option1">Option 1</MenuItem>
				</TextField>
			</Stack>

			<Stack spacing={1}>
				<Typography variant="body2" color="text.secondary">
					Active
				</Typography>
				<TextField select colorTag="#277D78" defaultValue="option1" autoFocus>
					<MenuItem value="option1">Option 1</MenuItem>
				</TextField>
			</Stack>

			<Stack spacing={1}>
				<Typography variant="body2" color="text.secondary">
					Disabled
				</Typography>
				<TextField select colorTag="#277D78" defaultValue="option1" disabled>
					<MenuItem value="option1">Option 1</MenuItem>
				</TextField>
			</Stack>
		</Stack>
	),
};

export const InputFields: Story = {
	parameters: { a11y: { disable: true } },
	render: () => (
		<Stack spacing={3}>
			<Stack
				direction="row"
				spacing={3}
				alignItems="flex-start"
				flexWrap="wrap"
			>
				<Stack spacing={1}>
					<Typography variant="body2" color="text.secondary">
						Basic Field
					</Typography>
					<TextField
						sx={{
							width: "100%",
						}}
						placeholder="Placeholder"
						helperText="Helper text"
					/>
				</Stack>

				<Stack spacing={1}>
					<Typography variant="body2" color="text.secondary">
						Field With Icon
					</Typography>
					<TextField
						sx={{
							width: "100%",
						}}
						placeholder="Placeholder"
						endIcon={<SearchRounded />}
						helperText="Helper text"
					/>
				</Stack>

				<Stack spacing={1}>
					<Typography variant="body2" color="text.secondary">
						Field With Prefix
					</Typography>
					<TextField
						sx={{
							width: "100%",
						}}
						placeholder="Placeholder"
						helperText="Helper text"
					/>
				</Stack>

				<Stack spacing={1}>
					<Typography variant="body2" color="text.secondary">
						Field With Color Tag
					</Typography>
					<TextField
						sx={{
							width: "100%",
						}}
						colorTag="#277D78"
						defaultValue="option1"
						helperText="Helper text"
					/>
				</Stack>
			</Stack>
		</Stack>
	),
};
