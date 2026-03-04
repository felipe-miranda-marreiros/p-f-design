import { Box, Divider, Grid, Typography } from "@mui/material";
import { colors, theme } from "@p-f-design/styles";
import type { Meta, StoryObj } from "@storybook/react";
import { ColorSwatch } from "../foundations/color-swatch";

const meta = {
	title: "Design System/Colors",
	parameters: {
		layout: "fullwidth",
	},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
	render: () => (
		<Box sx={{ p: 4, bgcolor: "background.default", minHeight: "100vh" }}>
			<Typography variant="h1" gutterBottom>
				Color Palette
			</Typography>
			<Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
				Complete color system with 22 colors organized by category
			</Typography>

			{/* Beige Section */}
			<Box sx={{ mb: 6 }}>
				<Typography variant="h2" gutterBottom>
					Beige
				</Typography>
				<Grid container spacing={3}>
					<Grid size={{ xs: 12, sm: 6, md: 3 }}>
						<ColorSwatch
							name="Beige 500"
							value={colors.beige[500]}
							group="Beige"
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 6, md: 3 }}>
						<ColorSwatch
							name="Beige 100"
							value={colors.beige[100]}
							group="Beige"
							description="Background default"
						/>
					</Grid>
				</Grid>
			</Box>

			<Divider sx={{ my: 4 }} />

			{/* Grey Section */}
			<Box sx={{ mb: 6 }}>
				<Typography variant="h2" gutterBottom>
					Grey
				</Typography>
				<Grid container spacing={3}>
					{Object.entries(colors.grey).map(([shade, value]) => (
						<Grid size={{ xs: 12, sm: 6, md: 3 }} key={shade}>
							<ColorSwatch
								name={`Grey ${shade}`}
								value={value}
								group="Grey"
								description={
									shade === "900"
										? "Text primary"
										: shade === "500"
											? "Text secondary"
											: undefined
								}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Divider sx={{ my: 4 }} />

			{/* Secondary Colors Section */}
			<Box sx={{ mb: 6 }}>
				<Typography variant="h2" gutterBottom>
					Secondary Colors
				</Typography>
				<Grid container spacing={3}>
					{Object.entries(colors.secondaryColors).map(([name, value]) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={name}>
							<ColorSwatch
								name={name.charAt(0).toUpperCase() + name.slice(1)}
								value={value}
								group="Secondary"
								description={
									name === "green"
										? "Primary main"
										: name === "navy"
											? "Secondary main"
											: name === "red"
												? "Error main"
												: undefined
								}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Divider sx={{ my: 4 }} />

			{/* Others Section */}
			<Box sx={{ mb: 6 }}>
				<Typography variant="h2" gutterBottom>
					Other Colors
				</Typography>
				<Grid container spacing={3}>
					{Object.entries(colors.others).map(([name, value]) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={name}>
							<ColorSwatch
								name={name
									.charAt(0)
									.toUpperCase()
									.concat(name.slice(1).replace(/([A-Z])/g, " $1"))}
								value={value}
								group="Others"
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Divider sx={{ my: 4 }} />

			{/* White */}
			<Box sx={{ mb: 6 }}>
				<Typography variant="h2" gutterBottom>
					Base Colors
				</Typography>
				<Grid container spacing={3}>
					<Grid size={{ xs: 12, sm: 6, md: 3 }}>
						<ColorSwatch
							name="White"
							value={colors.white}
							description="Paper background"
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	),
};

export const Beige: Story = {
	render: () => (
		<Box sx={{ p: 4 }}>
			<Typography variant="h2" gutterBottom>
				Beige Palette
			</Typography>
			<Grid container spacing={3}>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Beige 500"
						value={colors.beige[500]}
						group="Beige"
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Beige 100"
						value={colors.beige[100]}
						group="Beige"
					/>
				</Grid>
			</Grid>
		</Box>
	),
};

export const Grey: Story = {
	render: () => (
		<Box sx={{ p: 4 }}>
			<Typography variant="h2" gutterBottom>
				Grey Scale
			</Typography>
			<Grid container spacing={3}>
				{Object.entries(colors.grey).map(([shade, value]) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={shade}>
						<ColorSwatch name={`Grey ${shade}`} value={value} group="Grey" />
					</Grid>
				))}
			</Grid>
		</Box>
	),
};

export const SecondaryColors: Story = {
	render: () => (
		<Box sx={{ p: 4 }}>
			<Typography variant="h2" gutterBottom>
				Secondary Colors
			</Typography>
			<Grid container spacing={3}>
				{Object.entries(colors.secondaryColors).map(([name, value]) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={name}>
						<ColorSwatch
							name={name.charAt(0).toUpperCase() + name.slice(1)}
							value={value}
							group="Secondary"
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	),
};

export const SemanticColors: Story = {
	render: () => (
		<Box sx={{ p: 4 }}>
			<Typography variant="h2" gutterBottom>
				Semantic Color Mappings
			</Typography>
			<Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
				These are the MUI theme semantic color mappings used throughout the
				application.
			</Typography>
			<Grid container spacing={3}>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Primary"
						value={theme.palette.primary.main}
						description="Main action color (Green)"
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Secondary"
						value={theme.palette.secondary.main}
						description="Secondary actions (Navy)"
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Error"
						value={theme.palette.error.main}
						description="Error states (Red)"
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Background Default"
						value={theme.palette.background.default}
						description="Page background (Beige 100)"
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Background Paper"
						value={theme.palette.background.paper}
						description="Card/Paper background (White)"
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Text Primary"
						value={theme.palette.text.primary}
						description="Primary text color (Grey 900)"
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6, md: 4 }}>
					<ColorSwatch
						name="Text Secondary"
						value={theme.palette.text.secondary}
						description="Secondary text color (Grey 500)"
					/>
				</Grid>
			</Grid>
		</Box>
	),
};
