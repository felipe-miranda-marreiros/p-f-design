import { Box, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { GlobalOverlay } from "./global-overlay.view";
import { InlineLoader } from "./inline-loader.view";
import { MfeTransition } from "./mfe-transition.view";
import { PageSkeleton } from "./page-skeleton.view";
import { SectionLoader } from "./section-loader.view";
import { SkeletonCards } from "./skeleton-cards.view";

// ---- Meta ----

const meta = {
	title: "Components/Loading",
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ---- Showcase wrapper ----

function ShowcaseCard({
	title,
	tag,
	tagColor,
	description,
	background = "beige",
	children,
}: {
	title: string;
	tag: string;
	tagColor: string;
	description: string;
	background?: "dark" | "beige" | "white";
	children: React.ReactNode;
}) {
	const bgMap = {
		dark: "grey.900",
		beige: "beige.100",
		white: "common.white",
	};

	return (
		<Box
			sx={{
				bgcolor: "common.white",
				borderRadius: 4,
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					px: 6,
					pt: 5,
					pb: 3,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="subtitle1">{title}</Typography>
				<Typography
					variant="body2"
					sx={{
						fontWeight: 600,
						textTransform: "uppercase",
						letterSpacing: 0.8,
						px: 2.5,
						py: 1,
						borderRadius: 25,
						bgcolor: `${tagColor}15`,
						color: tagColor,
						fontSize: 11,
					}}
				>
					{tag}
				</Typography>
			</Box>
			<Typography
				variant="body2"
				sx={{ px: 6, pb: 5, color: "grey.500", lineHeight: 1.5 }}
			>
				{description}
			</Typography>
			<Box
				sx={{
					flex: 1,
					minHeight: 320,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderTop: 1,
					borderColor: "grey.100",
					bgcolor: bgMap[background],
					position: "relative",
				}}
			>
				{children}
			</Box>
		</Box>
	);
}

// ---- Stories ----

export const GlobalOverlayStory: Story = {
	name: "Global Overlay",
	render: () => (
		<Box sx={{ width: "100%", height: 400 }}>
			<GlobalOverlay />
		</Box>
	),
};

export const MfeTransitionStory: Story = {
	name: "MFE Transition",
	render: () => (
		<Box
			sx={{
				bgcolor: "beige.100",
				p: 8,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<MfeTransition />
		</Box>
	),
};

export const SkeletonCardsStory: Story = {
	name: "Skeleton Cards",
	render: () => (
		<Box sx={{ bgcolor: "beige.100", p: 6 }}>
			<SkeletonCards count={4} columns={2} />
		</Box>
	),
};

export const SectionLoaderStory: Story = {
	name: "Section Loader",
	render: () => (
		<Box
			sx={{
				bgcolor: "beige.100",
				p: 8,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<SectionLoader />
		</Box>
	),
};

export const InlineLoaderBars: Story = {
	name: "Inline Loader — Bars",
	render: () => (
		<Box
			sx={{
				bgcolor: "beige.100",
				p: 8,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<InlineLoader variant="bars" label="Atualizando saldo" />
		</Box>
	),
};

export const InlineLoaderDots: Story = {
	name: "Inline Loader — Dots",
	render: () => (
		<Box
			sx={{
				bgcolor: "beige.100",
				p: 8,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<InlineLoader variant="dots" label="Processando" />
		</Box>
	),
};

export const PageSkeletonStory: Story = {
	name: "Page Skeleton",
	render: () => (
		<Box sx={{ width: "100%", height: 480 }}>
			<PageSkeleton />
		</Box>
	),
};

export const AllVariants: Story = {
	name: "All Variants",
	render: () => (
		<Box sx={{ bgcolor: "grey.900", minHeight: "100vh" }}>
			<Box sx={{ px: 12, pt: 12, pb: 8 }}>
				<Typography variant="h1" sx={{ color: "beige.100", mb: 2 }}>
					Loading Components
				</Typography>
				<Typography
					variant="body1"
					sx={{ color: "beige.500", maxWidth: 560, lineHeight: 1.6 }}
				>
					Sistema de loading para o app Finance — componentes global, seção,
					skeleton e inline para uso em micro-front-ends.
				</Typography>
			</Box>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
					gap: 6,
					px: 12,
					pb: 16,
				}}
			>
				<ShowcaseCard
					title="Global Overlay"
					tag="Global"
					tagColor="#277D78"
					description="Cobre toda a tela durante carregamento de rotas ou inicialização do micro-front-end. Usa backdrop blur sobre o conteúdo existente."
					background="dark"
				>
					<GlobalOverlay />
				</ShowcaseCard>

				<ShowcaseCard
					title="Micro-Frontend Transition"
					tag="Global"
					tagColor="#277D78"
					description="Transição entre micro-front-ends. Blocos representam os módulos sendo montados. Ideal para lazy loading de rotas."
					background="beige"
				>
					<MfeTransition />
				</ShowcaseCard>

				<ShowcaseCard
					title="Skeleton Cards (Pots)"
					tag="Seção"
					tagColor="#826CB0"
					description="Placeholders que espelham o layout real dos cards. Shimmer staggered cria ritmo visual e reduz percepção de espera."
					background="beige"
				>
					<Box sx={{ width: "100%", p: 6 }}>
						<SkeletonCards count={4} columns={2} />
					</Box>
				</ShowcaseCard>

				<ShowcaseCard
					title="Section Loader"
					tag="Seção"
					tagColor="#826CB0"
					description="Para regiões específicas da página enquanto dados são carregados. Wave bars criam movimento orgânico e suave."
					background="beige"
				>
					<SectionLoader />
				</ShowcaseCard>

				<ShowcaseCard
					title="Inline Loaders"
					tag="Inline"
					tagColor="#93674F"
					description="Micro-animações para botões, campos ou seções pequenas. Dois estilos: barras financeiras e breathing dots."
					background="beige"
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 10,
							py: 8,
						}}
					>
						<InlineLoader variant="bars" label="Atualizando saldo" />
						<InlineLoader variant="dots" label="Processando" />
					</Box>
				</ShowcaseCard>

				<ShowcaseCard
					title="Full Page Skeleton"
					tag="Global"
					tagColor="#277D78"
					description="Skeleton completo da página Pots com sidebar. Mostra a estrutura antes dos dados carregarem — reduz CLS e melhora percepção de performance."
					background="white"
				>
					<PageSkeleton />
				</ShowcaseCard>
			</Box>
		</Box>
	),
};
