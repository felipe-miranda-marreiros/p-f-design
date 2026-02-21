import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "storybook/test";
import { Pagination } from "./pagination.component";

const meta = {
	title: "Pagination/Pagination",
	component: Pagination,
	parameters: { layout: "padded" },
	tags: ["autodocs"],
	args: {
		currentPage: 2,
		totalPages: 5,
		onPageChange: fn(),
	},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstPage: Story = {
	args: { currentPage: 1 },
};

export const LastPage: Story = {
	args: { currentPage: 5 },
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
