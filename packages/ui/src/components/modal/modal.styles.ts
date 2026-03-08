import { Box, IconButton } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

export const ModalContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	backgroundColor: theme.palette.common.white,
	borderRadius: 12,
	padding: theme.spacing(8),
	width: 560,
	maxWidth: "calc(100% - 40px)",
	outline: "none",
	[theme.breakpoints.down("sm")]: {
		paddingBlock: theme.spacing(6),
		paddingInline: theme.spacing(5),
	},
}));

export const StyledCloseButton = styled(IconButton)(
	({ theme }: { theme: Theme }) => ({
		borderRadius: "50%",
		border: `1px solid ${theme.palette.grey[300]}`,
		padding: theme.spacing(1.5),
		flexShrink: 0,
	}),
);
