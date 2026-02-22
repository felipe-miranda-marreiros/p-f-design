import { Box, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { colors } from "@/app/styles/colors";

interface ColorSwatchProps {
	name: string;
	value: string;
	description?: string;
	group?: string;
}

export const ColorSwatch = ({
	name,
	value,
	description,
	group,
}: ColorSwatchProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	// Calculate luminance for contrast check
	const getLuminance = (hex: string) => {
		const rgb = Number.parseInt(hex.slice(1), 16);
		const r = (rgb >> 16) & 0xff;
		const g = (rgb >> 8) & 0xff;
		const b = (rgb >> 0) & 0xff;
		return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	};

	const textColor = getLuminance(value) > 0.5 ? colors.grey[900] : colors.white;

	return (
		<Paper
			elevation={1}
			sx={{
				overflow: "hidden",
				transition: "transform 0.2s",
				"&:hover": {
					transform: "translateY(-4px)",
					boxShadow: 3,
				},
			}}
		>
			<Box
				sx={{
					height: 120,
					bgcolor: value,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					position: "relative",
				}}
				onClick={handleCopy}
			>
				<Typography
					variant="subtitle1"
					sx={{
						color: textColor,
						opacity: copied ? 1 : 0,
						transition: "opacity 0.2s",
					}}
				>
					{copied ? "Copied!" : ""}
				</Typography>
			</Box>
			<Stack spacing={0.5} sx={{ p: 2 }}>
				<Typography variant="subtitle1">{name}</Typography>
				<Typography
					variant="body2"
					sx={{
						color: "text.secondary",
						fontFamily: "monospace",
						cursor: "pointer",
					}}
					onClick={handleCopy}
				>
					{value}
				</Typography>
				{description && (
					<Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
						{description}
					</Typography>
				)}
				{group && (
					<Typography
						variant="body2"
						sx={{ color: "primary.main", fontWeight: 600, mt: 0.5 }}
					>
						{group}
					</Typography>
				)}
			</Stack>
		</Paper>
	);
};
