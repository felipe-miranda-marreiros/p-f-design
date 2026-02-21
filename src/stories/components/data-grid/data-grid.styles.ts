import {
	Box,
	Table,
	TableContainer,
	TableSortLabel,
	tableCellClasses,
	tableRowClasses,
	tableSortLabelClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// ---- Table (Desktop) ----

export const StyledTableContainer = styled(TableContainer)({
	overflowX: "auto",
});

export const StyledTable = styled(Table)(({ theme }) => ({
	[`& .${tableCellClasses.head}`]: {
		...theme.typography.body2,
		color: theme.palette.grey[500],
		fontWeight: 400,
		borderBottom: `1px solid ${theme.palette.grey[100]}`,
		padding: theme.spacing(3, 0),
		whiteSpace: "nowrap",
	},
	[`& .${tableCellClasses.body}`]: {
		...theme.typography.body1,
		color: theme.palette.grey[900],
		borderBottom: `1px solid ${theme.palette.grey[100]}`,
		padding: theme.spacing(4, 0),
	},
	[`& .${tableRowClasses.root}:last-child .${tableCellClasses.body}`]: {
		borderBottom: "none",
	},
}));

export const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
	[`&.${tableSortLabelClasses.root}`]: {
		color: theme.palette.grey[500],
	},
	[`&.${tableSortLabelClasses.active}`]: {
		color: theme.palette.grey[500],
	},
}));

// ---- List (Mobile) ----

export const StyledListContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
});

export const StyledListItem = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: theme.spacing(3, 0),
	borderBottom: `1px solid ${theme.palette.grey[100]}`,
	"&:last-child": {
		borderBottom: "none",
	},
}));

// ---- Skeleton ----

export const StyledSkeletonRow = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(4),
	padding: theme.spacing(4, 0),
	borderBottom: `1px solid ${theme.palette.grey[100]}`,
	"&:last-child": {
		borderBottom: "none",
	},
}));

// ---- Refetching ----

export const StyledRefetchingBox = styled(Box)({
	opacity: 0.4,
	pointerEvents: "none",
});
