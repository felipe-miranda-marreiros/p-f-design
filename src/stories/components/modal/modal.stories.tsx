import { MenuItem } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../button/button.component";
import { TextField } from "../text-field/text-field.component";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./modal.component";

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
};
