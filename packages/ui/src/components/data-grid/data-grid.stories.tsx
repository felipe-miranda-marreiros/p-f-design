import { SearchRounded } from "@mui/icons-material";
import {
	Avatar,
	Box,
	IconButton,
	MenuItem,
	Select,
	type SelectChangeEvent,
	Typography,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Pagination } from "../pagination";
import { Paper } from "../paper";
import { TextField } from "../text-field";
import { DataGrid } from "./data-grid.component";

// ---- Transaction types & mock data (story-only) ----

interface Transaction {
	id: string;
	name: string;
	avatarUrl: string;
	category: string;
	date: string;
	amount: number;
}

const MOCK_TRANSACTIONS: Transaction[] = [
	{
		id: "1",
		name: "Emma Richardson",
		avatarUrl: "",
		category: "General",
		date: "19 Aug 2024",
		amount: 75.5,
	},
	{
		id: "2",
		name: "Savory Bites Bistro",
		avatarUrl: "",
		category: "Dining Out",
		date: "19 Aug 2024",
		amount: -55.5,
	},
	{
		id: "3",
		name: "Daniel Carter",
		avatarUrl: "",
		category: "General",
		date: "18 Aug 2024",
		amount: -42.3,
	},
	{
		id: "4",
		name: "Sun Park",
		avatarUrl: "",
		category: "General",
		date: "17 Aug 2024",
		amount: 120.0,
	},
	{
		id: "5",
		name: "Urban Services Hub",
		avatarUrl: "",
		category: "General",
		date: "17 Aug 2024",
		amount: -65.0,
	},
	{
		id: "6",
		name: "Liam Hughes",
		avatarUrl: "",
		category: "Groceries",
		date: "15 Aug 2024",
		amount: 65.75,
	},
	{
		id: "7",
		name: "Lily Ramirez",
		avatarUrl: "",
		category: "General",
		date: "14 Aug 2024",
		amount: 50.0,
	},
	{
		id: "8",
		name: "Ethan Clark",
		avatarUrl: "",
		category: "Dining Out",
		date: "13 Aug 2024",
		amount: -32.5,
	},
	{
		id: "9",
		name: "James Thompson",
		avatarUrl: "",
		category: "Entertainment",
		date: "11 Aug 2024",
		amount: -5.0,
	},
	{
		id: "10",
		name: "Pixel Playground",
		avatarUrl: "",
		category: "Entertainment",
		date: "11 Aug 2024",
		amount: -10.0,
	},
	{
		id: "11",
		name: "Bravo Zen Spa",
		avatarUrl: "",
		category: "Personal Care",
		date: "29 Aug 2024",
		amount: -25.0,
	},
	{
		id: "12",
		name: "Alpha Analytics",
		avatarUrl: "",
		category: "General",
		date: "27 Aug 2024",
		amount: 450.0,
	},
	{
		id: "13",
		name: "Echo Game Store",
		avatarUrl: "",
		category: "Lifestyle",
		date: "22 Aug 2024",
		amount: -21.5,
	},
	{
		id: "14",
		name: "Food Merchant",
		avatarUrl: "",
		category: "General",
		date: "20 Aug 2024",
		amount: -21.5,
	},
	{
		id: "15",
		name: "Delta Taxi",
		avatarUrl: "",
		category: "Transportation",
		date: "19 Aug 2024",
		amount: -15.0,
	},
	{
		id: "16",
		name: "Online Shop",
		avatarUrl: "",
		category: "General",
		date: "15 Aug 2024",
		amount: -15.0,
	},
	{
		id: "17",
		name: "Charlie Electric Co",
		avatarUrl: "",
		category: "Bills",
		date: "1 Aug 2024",
		amount: -100.0,
	},
	{
		id: "18",
		name: "Harper Reed",
		avatarUrl: "",
		category: "General",
		date: "5 Aug 2024",
		amount: 1900.0,
	},
	{
		id: "19",
		name: "Mason Wells",
		avatarUrl: "",
		category: "Groceries",
		date: "3 Aug 2024",
		amount: -88.25,
	},
	{
		id: "20",
		name: "Sophia Davis",
		avatarUrl: "",
		category: "Entertainment",
		date: "2 Aug 2024",
		amount: -12.0,
	},
];

// ---- Column definitions ----

const columnHelper = createColumnHelper<Transaction>();

const columns = [
	columnHelper.accessor("name", {
		header: "Recipient / Sender",
		cell: (info) => (
			<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
				<Avatar
					src={info.row.original.avatarUrl}
					sx={{ width: 32, height: 32 }}
				>
					{info.getValue().charAt(0)}
				</Avatar>
				<Typography variant="subtitle1">{info.getValue()}</Typography>
			</Box>
		),
		enableSorting: false,
	}),
	columnHelper.accessor("category", {
		header: "Category",
		cell: (info) => (
			<Typography variant="body1" sx={{ color: "grey.500" }}>
				{info.getValue()}
			</Typography>
		),
		enableSorting: false,
	}),
	columnHelper.accessor("date", {
		header: "Transaction Date",
		cell: (info) => (
			<Typography variant="body1" sx={{ color: "grey.500" }}>
				{info.getValue()}
			</Typography>
		),
	}),
	columnHelper.accessor("amount", {
		header: "Amount",
		cell: (info) => {
			const value = info.getValue();
			const isPositive = value > 0;
			return (
				<Typography
					variant="subtitle1"
					sx={(theme) => ({
						color: isPositive
							? theme.palette.secondaryColors.green
							: theme.palette.grey[900],
						textAlign: "right",
					})}
				>
					{isPositive ? "+" : ""}${Math.abs(value).toFixed(2)}
				</Typography>
			);
		},
	}),
];

// ---- Sort options ----

interface SortOption {
	label: string;
	columnId: string;
	desc: boolean;
}

const SORT_OPTIONS: SortOption[] = [
	{ label: "Latest", columnId: "date", desc: true },
	{ label: "Oldest", columnId: "date", desc: false },
	{ label: "A to Z", columnId: "name", desc: false },
	{ label: "Z to A", columnId: "name", desc: true },
	{ label: "Highest", columnId: "amount", desc: true },
	{ label: "Lowest", columnId: "amount", desc: false },
];

// ---- Category options ----

const CATEGORIES = [
	"All Transactions",
	"General",
	"Dining Out",
	"Groceries",
	"Entertainment",
	"Transportation",
	"Personal Care",
	"Lifestyle",
	"Bills",
];

// ---- Mobile row renderer ----

function TransactionMobileRow({ row }: { row: Transaction }) {
	const isPositive = row.amount > 0;

	return (
		<Box sx={{ display: "flex", alignItems: "center", width: "100%", gap: 3 }}>
			<Avatar src={row.avatarUrl} sx={{ width: 40, height: 40 }}>
				{row.name.charAt(0)}
			</Avatar>
			<Box sx={{ flex: 1, minWidth: 0 }}>
				<Typography variant="subtitle1" noWrap>
					{row.name}
				</Typography>
				<Typography variant="body2" sx={{ color: "grey.500" }}>
					{row.category}
				</Typography>
			</Box>
			<Box sx={{ textAlign: "right", flexShrink: 0 }}>
				<Typography
					variant="subtitle1"
					sx={(theme) => ({
						color: isPositive
							? theme.palette.secondaryColors.green
							: theme.palette.grey[900],
					})}
				>
					{isPositive ? "+" : "-"}${Math.abs(row.amount).toFixed(2)}
				</Typography>
				<Typography variant="body2" sx={{ color: "grey.500" }}>
					{row.date}
				</Typography>
			</Box>
		</Box>
	);
}

// ---- Composed Transaction List Story ----

const PAGE_SIZE = 10;

function TransactionListComposed() {
	const [globalFilter, setGlobalFilter] = useState("");
	const [sorting, setSorting] = useState<SortingState>([
		{ id: "date", desc: true },
	]);
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: PAGE_SIZE,
	});
	const [sortIndex, setSortIndex] = useState(0);
	const [category, setCategory] = useState("All Transactions");

	const filteredData =
		category === "All Transactions"
			? MOCK_TRANSACTIONS
			: MOCK_TRANSACTIONS.filter((t) => t.category === category);

	const table = useReactTable({
		data: filteredData,
		columns,
		state: { globalFilter, sorting, pagination },
		onGlobalFilterChange: setGlobalFilter,
		onSortingChange: setSorting,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const handleSortChange = (event: SelectChangeEvent<number>) => {
		const index = Number(event.target.value);
		setSortIndex(index);
		const option = SORT_OPTIONS[index];
		setSorting([{ id: option.columnId, desc: option.desc }]);
	};

	const handleCategoryChange = (event: SelectChangeEvent<string>) => {
		setCategory(event.target.value);
		setPagination((prev) => ({ ...prev, pageIndex: 0 }));
	};

	const totalPages = table.getPageCount();

	return (
		<Paper>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 6,
					mb: 6,
					flexWrap: "wrap",
				}}
			>
				<TextField
					placeholder="Search transaction"
					endIcon={<SearchRounded />}
					value={globalFilter}
					onChange={(e) => setGlobalFilter(e.target.value)}
					size="small"
					sx={{ flex: 1, minWidth: 200 }}
				/>

				<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
					<Typography variant="body1" sx={{ color: "grey.500" }}>
						Sort by
					</Typography>
					<Select
						value={sortIndex}
						onChange={handleSortChange}
						size="small"
						sx={{ minWidth: 120 }}
						inputProps={{ "aria-label": "Sort by" }}
					>
						{SORT_OPTIONS.map((option, index) => (
							<MenuItem key={option.label} value={index}>
								{option.label}
							</MenuItem>
						))}
					</Select>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
					<Typography variant="body1" sx={{ color: "grey.500" }}>
						Category
					</Typography>
					<Select
						value={category}
						onChange={handleCategoryChange}
						size="small"
						sx={{ minWidth: 160 }}
						inputProps={{ "aria-label": "Category" }}
					>
						{CATEGORIES.map((cat) => (
							<MenuItem key={cat} value={cat}>
								{cat}
							</MenuItem>
						))}
					</Select>
				</Box>
			</Box>

			<DataGrid
				table={table}
				renderMobileRow={TransactionMobileRow}
				aria-label="Transactions"
			/>

			{totalPages > 1 && (
				<Box sx={{ mt: 6 }}>
					<Pagination
						currentPage={pagination.pageIndex + 1}
						totalPages={totalPages}
						onPageChange={(page) => table.setPageIndex(page - 1)}
					/>
				</Box>
			)}
		</Paper>
	);
}

// ---- Storybook meta ----

const meta = {
	title: "Components/DataGrid",
	component: DataGrid,
	parameters: {
		layout: "padded",
	},
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<Meta<typeof DataGrid>>;

// ---- Stories ----

export const TransactionList: Story = {
	render: () => <TransactionListComposed />,
};

function SimpleTableExample() {
	const table = useReactTable({
		data: MOCK_TRANSACTIONS.slice(0, 5),
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Paper>
			<DataGrid table={table} aria-label="Simple transactions" />
		</Paper>
	);
}

export const SimpleTable: Story = {
	render: () => <SimpleTableExample />,
};

function LoadingExample() {
	const table = useReactTable({
		data: [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Paper>
			<DataGrid table={table} status="loading" aria-label="Loading data" />
		</Paper>
	);
}

export const Loading: Story = {
	render: () => <LoadingExample />,
};

function RefetchingExample() {
	const table = useReactTable({
		data: MOCK_TRANSACTIONS.slice(0, 5),
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Paper>
			<DataGrid
				table={table}
				status="refetching"
				aria-label="Refreshing data"
			/>
		</Paper>
	);
}

export const Refetching: Story = {
	parameters: { a11y: { disable: true } },
	render: () => <RefetchingExample />,
};

function ErrorSlot({ message }: { message?: string }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				py: 10,
				gap: 2,
			}}
		>
			<Typography variant="h3" sx={{ color: "grey.900" }}>
				Something went wrong
			</Typography>
			<Typography variant="body1" sx={{ color: "grey.500" }}>
				{message ?? "Failed to load transactions. Please try again."}
			</Typography>
		</Box>
	);
}

function ErrorExample() {
	const table = useReactTable({
		data: [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Paper>
			<DataGrid
				table={table}
				status="error"
				slots={{ error: ErrorSlot }}
				slotProps={{ error: { message: "Network error occurred." } }}
				aria-label="Error state"
			/>
		</Paper>
	);
}

export const ErrorState: Story = {
	render: () => <ErrorExample />,
};

function EmptySlot() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				py: 10,
				gap: 2,
			}}
		>
			<Typography variant="h3" sx={{ color: "grey.900" }}>
				No transactions found
			</Typography>
			<Typography variant="body1" sx={{ color: "grey.500" }}>
				Try adjusting your search or filters.
			</Typography>
		</Box>
	);
}

function EmptyExample() {
	const table = useReactTable({
		data: [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Paper>
			<DataGrid
				table={table}
				status="empty"
				slots={{ empty: EmptySlot }}
				aria-label="Empty state"
			/>
		</Paper>
	);
}

export const Empty: Story = {
	render: () => <EmptyExample />,
};

function MobileExample() {
	const table = useReactTable({
		data: MOCK_TRANSACTIONS.slice(0, 10),
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<Paper>
			<Box sx={{ mb: 4 }}>
				<Typography variant="h1" sx={{ mb: 4 }}>
					Transactions
				</Typography>
				<Box sx={{ display: "flex", gap: 2 }}>
					<TextField
						placeholder="Search transaction"
						endIcon={<SearchRounded />}
						size="small"
						sx={{ flex: 1 }}
					/>
					<IconButton aria-label="Sort">
						<SearchRounded />
					</IconButton>
				</Box>
			</Box>

			<DataGrid
				table={table}
				renderMobileRow={TransactionMobileRow}
				aria-label="Transactions"
			/>
		</Paper>
	);
}

export const Mobile: Story = {
	parameters: {
		viewport: { defaultViewport: "mobile1" },
	},
	render: () => <MobileExample />,
};
