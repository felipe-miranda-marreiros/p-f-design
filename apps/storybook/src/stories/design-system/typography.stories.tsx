import { Box, Divider, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { TypographyExample } from "./typography-example";

const meta = {
	title: "Design System/Typography",
	parameters: {
		layout: "padded",
	},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
	render: () => (
		<Box sx={{ maxWidth: 1200, mx: "auto", py: 4 }}>
			<Typography variant="h1" gutterBottom>
				Heading Styles
			</Typography>
			<Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
				Three heading levels for content hierarchy
			</Typography>

			<Stack spacing={3}>
				<TypographyExample variant="h1" sampleText="Heading Level 1" />
				<TypographyExample variant="h2" sampleText="Heading Level 2" />
				<TypographyExample variant="h3" sampleText="Heading Level 3" />
			</Stack>
		</Box>
	),
};

export const BodyText: Story = {
	render: () => (
		<Box sx={{ maxWidth: 1200, mx: "auto", py: 4 }}>
			<Typography variant="h1" gutterBottom>
				Body Text Styles
			</Typography>
			<Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
				Two body text sizes for content and small text
			</Typography>

			<Stack spacing={3}>
				<TypographyExample
					variant="body1"
					sampleText="This is the primary body text used for most content. It provides excellent readability at 14px with 150% line height."
				/>
				<TypographyExample
					variant="body2"
					sampleText="This is smaller body text at 12px, used for secondary content, captions, and supporting information."
				/>
			</Stack>
		</Box>
	),
};

export const Subtitles: Story = {
	render: () => (
		<Box sx={{ maxWidth: 1200, mx: "auto", py: 4 }}>
			<Typography variant="h1" gutterBottom>
				Subtitle Styles
			</Typography>
			<Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
				Bold variants for emphasis and labels
			</Typography>

			<Stack spacing={3}>
				<TypographyExample
					variant="subtitle1"
					sampleText="Subtitle 1 - Used for emphasized content and section labels"
				/>
				<TypographyExample
					variant="subtitle2"
					sampleText="Subtitle 2 - Used for small labels, tags, and metadata"
				/>
			</Stack>
		</Box>
	),
};

export const ContentHierarchy: Story = {
	render: () => (
		<Box sx={{ maxWidth: 800, mx: "auto", py: 4 }}>
			<Typography variant="h1" gutterBottom>
				The Art of Typography
			</Typography>
			<Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
				An example showing how different variants work together in a content
				hierarchy
			</Typography>

			<Stack spacing={3}>
				<Box>
					<Typography variant="h2" gutterBottom>
						Understanding Visual Hierarchy
					</Typography>
					<Typography variant="body1" paragraph>
						Typography is more than just choosing fonts; it's about creating a
						visual hierarchy that guides readers through your content. Good
						typography makes content scannable and improves comprehension.
					</Typography>
					<Typography variant="body1" paragraph>
						Our typography system uses carefully balanced sizes and weights to
						create clear distinction between different content types while
						maintaining harmony across the design.
					</Typography>
				</Box>

				<Divider />

				<Box>
					<Typography variant="h3" gutterBottom>
						Font Selection
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Why Public Sans?
					</Typography>
					<Typography variant="body1" paragraph>
						Public Sans is a geometric sans-serif typeface designed for
						legibility and clarity. It works exceptionally well for both
						headings and body text.
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Font weights: 300, 400, 500, 700 available
					</Typography>
				</Box>

				<Divider />

				<Box>
					<Typography variant="h3" gutterBottom>
						Best Practices
					</Typography>
					<Typography variant="body1" paragraph>
						When implementing typography in your components:
					</Typography>
					<Box component="ul" sx={{ pl: 3 }}>
						<Typography variant="body1" component="li">
							Use h1 for page titles only
						</Typography>
						<Typography variant="body1" component="li">
							Maintain consistent hierarchy with h2 and h3
						</Typography>
						<Typography variant="body1" component="li">
							Use body1 for primary content
						</Typography>
						<Typography variant="body1" component="li">
							Reserve subtitle variants for emphasis
						</Typography>
					</Box>
				</Box>
			</Stack>
		</Box>
	),
};
