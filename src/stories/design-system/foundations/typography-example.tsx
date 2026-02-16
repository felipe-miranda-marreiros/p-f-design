import {
	Box,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
	type TypographyProps,
} from "@mui/material";
import { theme } from "@/app/styles/theme";

interface TypographyExampleProps {
	variant: TypographyProps["variant"];
	sampleText?: string;
	showSpecs?: boolean;
}

export const TypographyExample = ({
	variant,
	sampleText = "The quick brown fox jumps over the lazy dog",
	showSpecs = true,
}: TypographyExampleProps) => {
	// Map variant to preset name
	const presetMap: Record<string, string> = {
		h1: "Text Preset 1 - Bold 32px",
		h2: "Text Preset 2 - Bold 20px",
		h3: "Text Preset 3 - Bold 16px",
		subtitle1: "Text Preset 4 - Bold 14px",
		body1: "Text Preset 4 - Regular 14px",
		subtitle2: "Text Preset 5 - Bold 12px",
		body2: "Text Preset 5 - Regular 12px",
	};

	const variantKey = variant as keyof typeof theme.typography;
	const variantStyles =
		variantKey && typeof theme.typography[variantKey] === "object"
			? theme.typography[variantKey]
			: undefined;

	const getUsageCode = () => {
		return `<Typography variant="${variant}">\n  ${sampleText}\n</Typography>`;
	};

	return (
		<Paper elevation={1} sx={{ p: 3, mb: 2 }}>
			<Stack spacing={2}>
				{/* Header */}
				<Box>
					<Typography variant="subtitle1" sx={{ color: "primary.main" }}>
						{variant?.toUpperCase()}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						{variant && presetMap[variant]}
					</Typography>
				</Box>

				{/* Sample Text */}
				<Box sx={{ py: 2 }}>
					<Typography variant={variant}>{sampleText}</Typography>
				</Box>

				{/* Specifications Table */}
				{showSpecs && variantStyles && typeof variantStyles === "object" && (
					<Table size="small">
						<TableBody>
							<TableRow>
								<TableCell sx={{ fontWeight: 600, width: "30%" }}>
									Font Family
								</TableCell>
								<TableCell
									sx={{ fontFamily: "monospace", fontSize: "0.875rem" }}
								>
									{theme.typography.fontFamily}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell sx={{ fontWeight: 600 }}>Font Size</TableCell>
								<TableCell
									sx={{ fontFamily: "monospace", fontSize: "0.875rem" }}
								>
									{variantStyles.fontSize}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell sx={{ fontWeight: 600 }}>Font Weight</TableCell>
								<TableCell
									sx={{ fontFamily: "monospace", fontSize: "0.875rem" }}
								>
									{variantStyles.fontWeight}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell sx={{ fontWeight: 600 }}>Line Height</TableCell>
								<TableCell
									sx={{ fontFamily: "monospace", fontSize: "0.875rem" }}
								>
									{variantStyles.lineHeight} (
									{Number(variantStyles.lineHeight) * 100}%)
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell sx={{ fontWeight: 600 }}>Letter Spacing</TableCell>
								<TableCell
									sx={{ fontFamily: "monospace", fontSize: "0.875rem" }}
								>
									{variantStyles.letterSpacing}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				)}

				{/* Usage Code */}
				<Box>
					<Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
						Usage:
					</Typography>
					<Paper
						variant="outlined"
						sx={{
							p: 2,
							bgcolor: "grey.100",
							fontFamily: "monospace",
							fontSize: "0.875rem",
							overflowX: "auto",
						}}
					>
						<pre style={{ margin: 0 }}>{getUsageCode()}</pre>
					</Paper>
				</Box>
			</Stack>
		</Paper>
	);
};
