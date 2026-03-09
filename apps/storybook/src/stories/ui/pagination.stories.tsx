import { Pagination } from "@felipe-miranda-marreiros/ui";
import { useState } from "react";
import { expect, fn, userEvent, within } from "storybook/test";
import type { Meta, StoryObj } from "storybook-react-rsbuild";

const meta = {
	title: "Pagination/Pagination",
	component: Pagination,
	parameters: { layout: "padded" },
	args: {
		currentPage: 2,
		totalPages: 5,
		onPageChange: fn(),
	},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		// Page 2 of 5 — both Prev and Next should be enabled
		const prevButton = canvas.getByRole("button", {
			name: /go to prev page/i,
		});
		const nextButton = canvas.getByRole("button", {
			name: /go to next page/i,
		});

		await expect(prevButton).not.toBeDisabled();
		await expect(nextButton).not.toBeDisabled();

		// Click Next and verify callback
		await userEvent.click(nextButton);
		await expect(args.onPageChange).toHaveBeenCalledWith(3);
	},
};

export const FirstPage: Story = {
	args: { currentPage: 1 },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// On page 1, Prev should be disabled
		const prevButton = canvas.getByRole("button", {
			name: /go to prev page/i,
		});
		const nextButton = canvas.getByRole("button", {
			name: /go to next page/i,
		});

		await expect(prevButton).toBeDisabled();
		await expect(nextButton).not.toBeDisabled();
	},
};

export const LastPage: Story = {
	args: { currentPage: 5 },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// On last page, Next should be disabled
		const prevButton = canvas.getByRole("button", {
			name: /go to prev page/i,
		});
		const nextButton = canvas.getByRole("button", {
			name: /go to next page/i,
		});

		await expect(prevButton).not.toBeDisabled();
		await expect(nextButton).toBeDisabled();
	},
};

export const Controlled: Story = {
	render: (args) => {
		const [page, setPage] = useState(args.currentPage);
		return (
			<Pagination
				currentPage={page}
				totalPages={args.totalPages}
				onPageChange={setPage}
			/>
		);
	},
};

export const WithEllipsis: Story = {
	args: { currentPage: 5, totalPages: 10 },
};

export const WithEllipsisManyPages: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		return (
			<Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
		);
	},
};

export const Mobile: Story = {
	parameters: {
		viewport: { defaultViewport: "mobile1" },
	},
	render: () => {
		const [page, setPage] = useState(5);
		return (
			<Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
		);
	},
};
