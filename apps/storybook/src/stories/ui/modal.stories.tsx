import {
	Button,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	TextField,
} from "@felipe-miranda-marreiros/ui";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import type { Meta, StoryObj } from "storybook-react-rsbuild";

const meta = {
	title: "Components/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
	args: {
		open: false,
		onClose: () => {},
		children: <ModalHeader>Add New Budget</ModalHeader>,
	},
	render: ({ open }) => {
		const [isOpen, setIsOpen] = useState(open);
		return (
			<>
				<Button variant="primary" onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<ModalHeader onClose={() => setIsOpen(false)}>
						Add New Budget
					</ModalHeader>
				</Modal>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		// Open the modal
		const openButton = canvas.getByRole("button", { name: /open modal/i });
		await userEvent.click(openButton);

		// Verify modal content is visible (via portal in document.body)
		const heading = await body.findByText("Add New Budget");
		await expect(heading).toBeInTheDocument();

		// Close via the X button
		const closeButton = body.getByRole("button", { name: /close/i });
		await userEvent.click(closeButton);

		// Verify modal is dismissed
		await expect(body.queryByText("Add New Budget")).not.toBeInTheDocument();
	},
};

export const AddNewBudget: Story = {
	args: {
		open: false,
		onClose: () => {},
		children: null,
	},
	render: ({ open }) => {
		const [isOpen, setIsOpen] = useState(open);
		return (
			<>
				<Button variant="primary" onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<ModalHeader
						onClose={() => setIsOpen(false)}
						description="Choose a category to set a spending budget. These categories can help you monitor spending."
					>
						Add New Budget
					</ModalHeader>
					<ModalBody>
						<TextField
							label="Budget Category"
							select
							defaultValue="entertainment"
						>
							<MenuItem value="entertainment">Entertainment</MenuItem>
							<MenuItem value="food">Food & Dining</MenuItem>
							<MenuItem value="transport">Transportation</MenuItem>
						</TextField>
						<TextField
							label="Maximum Spend"
							prefix="$"
							placeholder="e.g. 2000"
						/>
						<TextField
							label="Theme"
							select
							colorTag="#277D78"
							defaultValue="green"
						>
							<MenuItem value="green">Green</MenuItem>
							<MenuItem value="yellow">Yellow</MenuItem>
							<MenuItem value="cyan">Cyan</MenuItem>
						</TextField>
					</ModalBody>
					<ModalFooter>
						<Button variant="primary" fullWidth>
							Add Budget
						</Button>
					</ModalFooter>
				</Modal>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		// Open the modal
		const openButton = canvas.getByRole("button", { name: /open modal/i });
		await userEvent.click(openButton);

		// Verify modal content is visible
		const heading = await body.findByText("Add New Budget");
		await expect(heading).toBeInTheDocument();

		// Verify the description is present
		await expect(
			body.getByText(/choose a category to set a spending budget/i),
		).toBeInTheDocument();

		// Type in the Maximum Spend field
		const spendInput = body.getByPlaceholderText("e.g. 2000");
		await userEvent.type(spendInput, "1500");
		await expect(spendInput).toHaveValue("1500");

		// Close via the X button
		const closeButton = body.getByRole("button", { name: /close/i });
		await userEvent.click(closeButton);

		// Verify modal is dismissed
		await expect(body.queryByText("Add New Budget")).not.toBeInTheDocument();
	},
};
