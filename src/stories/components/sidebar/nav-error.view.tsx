import { ErrorOutlineRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import type { NavErrorProps } from "./sidebar.types";

export function NavError({ message, minimized = false }: NavErrorProps) {
	if (minimized) {
		return (
			<Box
				role="alert"
				sx={{ display: "flex", justifyContent: "center", py: 2 }}
			>
				<ErrorOutlineRounded
					fontSize="small"
					aria-label={message}
					sx={{ color: "error.main" }}
				/>
			</Box>
		);
	}

	return (
		<Box
			role="alert"
			sx={{
				p: 3,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 2,
				color: "error.main",
			}}
		>
			<ErrorOutlineRounded fontSize="small" aria-hidden="true" />
			<Typography
				variant="body2"
				color="error"
				textAlign="center"
				sx={{ opacity: 0.9 }}
			>
				{message}
			</Typography>
		</Box>
	);
}
