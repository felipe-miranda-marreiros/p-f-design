import { Box } from "@mui/material";
import { alpha, keyframes, styled } from "@mui/material/styles";

// ============================================================
// Keyframes
// ============================================================

const REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";

export const morphSpin = keyframes`
  0%   { transform: rotate(0deg) scale(1); border-radius: 50%; }
  25%  { border-radius: 40% 60% 60% 40%; }
  50%  { transform: rotate(180deg) scale(0.95); border-radius: 50%; }
  75%  { border-radius: 60% 40% 40% 60%; }
  100% { transform: rotate(360deg) scale(1); border-radius: 50%; }
`;

export const pulseDot = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50%      { transform: translate(-50%, -50%) scale(1.6); opacity: 0.6; }
`;

export const indeterminateBar = keyframes`
  0%   { width: 0%; margin-left: 0%; }
  50%  { width: 50%; margin-left: 25%; }
  100% { width: 0%; margin-left: 100%; }
`;

export const mfeAssemble = keyframes`
  0%   { transform: translateY(0) scale(1); opacity: 0.4; border-radius: 6px; }
  25%  { transform: translateY(-12px) scale(1.1); opacity: 1; border-radius: 8px; }
  50%  { transform: translateY(0) scale(1); opacity: 0.8; border-radius: 6px; }
  75%  { transform: translateY(4px) scale(0.95); opacity: 0.5; border-radius: 4px; }
  100% { transform: translateY(0) scale(1); opacity: 0.4; border-radius: 6px; }
`;

export const mfeProgress = keyframes`
  0%   { width: 0%; }
  50%  { width: 80%; }
  100% { width: 100%; opacity: 0; }
`;

export const shimmer = keyframes`
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const wavePulse = keyframes`
  0%, 100% { transform: scaleY(0.4); opacity: 0.3; }
  50%      { transform: scaleY(1); opacity: 1; }
`;

export const coinGrow = keyframes`
  0%   { transform: scaleY(0.4); opacity: 0.5; }
  100% { transform: scaleY(1); opacity: 1; }
`;

export const breathe = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50%      { transform: scale(1.5); opacity: 1; }
`;

export const typingBounce = keyframes`
  0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
  30%           { opacity: 1; transform: translateY(-3px); }
`;

// ============================================================
// 1. Global Overlay
// ============================================================

export const StyledGlobalOverlay = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	gap: theme.spacing(8),
	backgroundColor: alpha(theme.palette.grey[900], 0.92),
	backdropFilter: "blur(12px)",
	width: "100%",
	height: "100%",
	minHeight: 320,
}));

export const StyledLogoLoader = styled(Box)({
	position: "relative",
	width: 80,
	height: 80,
});

export const StyledMorphRing = styled("span")(({ theme }) => ({
	position: "absolute",
	inset: 0,
	borderRadius: "50%",
	border: "3px solid transparent",
	animation: `${morphSpin} 1.4s cubic-bezier(0.68, -0.15, 0.32, 1.15) infinite`,
	[REDUCED_MOTION]: { animation: "none" },

	"&:nth-of-type(1)": {
		borderTopColor: theme.palette.secondaryColors.green,
	},
	"&:nth-of-type(2)": {
		inset: 8,
		borderTopColor: theme.palette.secondaryColors.cyan,
		animationDelay: "-0.2s",
		animationDuration: "1.8s",
	},
	"&:nth-of-type(3)": {
		inset: 16,
		borderTopColor: theme.palette.beige[500],
		animationDelay: "-0.4s",
		animationDuration: "2.2s",
	},
}));

export const StyledCenterDot = styled("span")(({ theme }) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	width: 8,
	height: 8,
	backgroundColor: theme.palette.secondaryColors.green,
	borderRadius: "50%",
	transform: "translate(-50%, -50%)",
	animation: `${pulseDot} 1.4s ease-in-out infinite`,
	[REDUCED_MOTION]: { animation: "none" },
}));

export const StyledProgressTrack = styled(Box)(({ theme }) => ({
	width: 180,
	height: 3,
	backgroundColor: alpha(theme.palette.common.white, 0.08),
	borderRadius: 4,
	overflow: "hidden",
}));

export const StyledProgressFill = styled("span")(({ theme }) => ({
	display: "block",
	height: "100%",
	width: "40%",
	background: `linear-gradient(90deg, ${theme.palette.secondaryColors.green}, ${theme.palette.secondaryColors.cyan})`,
	borderRadius: 4,
	animation: `${indeterminateBar} 1.8s ease-in-out infinite`,
	[REDUCED_MOTION]: { animation: "none" },
}));

// ============================================================
// 2. MFE Transition
// ============================================================

export const StyledMfeBlock = styled("span")(({ theme }) => ({
	width: 24,
	height: 24,
	borderRadius: 6,
	animation: `${mfeAssemble} 2s ease-in-out infinite`,
	[REDUCED_MOTION]: { animation: "none" },

	"&:nth-of-type(1)": {
		backgroundColor: theme.palette.secondaryColors.green,
		animationDelay: "0s",
	},
	"&:nth-of-type(2)": {
		backgroundColor: theme.palette.secondaryColors.cyan,
		animationDelay: "0.15s",
	},
	"&:nth-of-type(3)": {
		backgroundColor: theme.palette.secondaryColors.yellow,
		animationDelay: "0.3s",
	},
	"&:nth-of-type(4)": {
		backgroundColor: theme.palette.secondaryColors.purple,
		animationDelay: "0.45s",
	},
}));

export const StyledMfeLineTrack = styled(Box)(({ theme }) => ({
	width: 140,
	height: 2,
	backgroundColor: theme.palette.grey[100],
	borderRadius: 2,
	overflow: "hidden",
}));

export const StyledMfeLineFill = styled("span")(({ theme }) => ({
	display: "block",
	height: "100%",
	background: `linear-gradient(90deg, ${theme.palette.secondaryColors.green}, ${theme.palette.secondaryColors.cyan}, ${theme.palette.secondaryColors.purple})`,
	borderRadius: 2,
	animation: `${mfeProgress} 2s ease-in-out infinite`,
	[REDUCED_MOTION]: { animation: "none" },
}));

// ============================================================
// 3. Skeleton Cards (Shimmer)
// ============================================================

export const StyledShimmerBox = styled(Box)(({ theme }) => ({
	borderRadius: 6,
	position: "relative",
	overflow: "hidden",
	backgroundColor: theme.palette.grey[100],
	"&::after": {
		content: '""',
		position: "absolute",
		inset: 0,
		background: `linear-gradient(
      90deg,
      transparent 0%,
      ${alpha(theme.palette.common.white, 0.6)} 40%,
      ${alpha(theme.palette.common.white, 0.6)} 60%,
      transparent 100%
    )`,
		animation: `${shimmer} 1.6s ease-in-out infinite`,
		transform: "translateX(-100%)",
		[REDUCED_MOTION]: { animation: "none" },
	},
}));

export const StyledSkeletonCard = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.common.white,
	borderRadius: 12,
	padding: theme.spacing(5),
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(4),
	boxShadow: `0 1px 3px ${alpha(theme.palette.common.black, 0.04)}`,

	"&:nth-of-type(2) .shimmer-element::after": { animationDelay: "0.15s" },
	"&:nth-of-type(3) .shimmer-element::after": { animationDelay: "0.3s" },
	"&:nth-of-type(4) .shimmer-element::after": { animationDelay: "0.45s" },
}));

// ============================================================
// 4. Section Loader
// ============================================================

export const StyledWaveBar = styled("span")(({ theme }) => ({
	width: 4,
	height: 32,
	borderRadius: 4,
	animation: `${wavePulse} 1s ease-in-out infinite`,
	[REDUCED_MOTION]: { animation: "none" },

	"&:nth-of-type(1)": {
		backgroundColor: theme.palette.secondaryColors.green,
		animationDelay: "0s",
	},
	"&:nth-of-type(2)": {
		backgroundColor: theme.palette.secondaryColors.cyan,
		animationDelay: "0.1s",
	},
	"&:nth-of-type(3)": {
		backgroundColor: theme.palette.secondaryColors.green,
		animationDelay: "0.2s",
	},
	"&:nth-of-type(4)": {
		backgroundColor: theme.palette.secondaryColors.cyan,
		animationDelay: "0.3s",
	},
	"&:nth-of-type(5)": {
		backgroundColor: theme.palette.secondaryColors.green,
		animationDelay: "0.4s",
	},
}));

export const StyledTypingDot = styled("span")(({ theme }) => ({
	width: 4,
	height: 4,
	borderRadius: "50%",
	backgroundColor: theme.palette.grey[500],
	animation: `${typingBounce} 1.2s ease-in-out infinite`,
	[REDUCED_MOTION]: { animation: "none" },

	"&:nth-of-type(2)": { animationDelay: "0.2s" },
	"&:nth-of-type(3)": { animationDelay: "0.4s" },
}));

// ============================================================
// 5. Inline Loader
// ============================================================

export const StyledCoinBar = styled("span")(({ theme }) => ({
	width: 14,
	borderRadius: "4px 4px 0 0",
	animation: `${coinGrow} 1.2s ease-in-out infinite alternate`,
	[REDUCED_MOTION]: { animation: "none" },

	"&:nth-of-type(1)": {
		backgroundColor: theme.palette.secondaryColors.green,
		animationDelay: "0s",
		height: 20,
	},
	"&:nth-of-type(2)": {
		backgroundColor: theme.palette.secondaryColors.cyan,
		animationDelay: "0.1s",
		height: 32,
	},
	"&:nth-of-type(3)": {
		backgroundColor: theme.palette.secondaryColors.yellow,
		animationDelay: "0.2s",
		height: 44,
	},
	"&:nth-of-type(4)": {
		backgroundColor: theme.palette.secondaryColors.purple,
		animationDelay: "0.3s",
		height: 28,
	},
	"&:nth-of-type(5)": {
		backgroundColor: theme.palette.beige[500],
		animationDelay: "0.4s",
		height: 36,
	},
}));

export const StyledBreathDot = styled("span")(({ theme }) => ({
	width: 10,
	height: 10,
	borderRadius: "50%",
	animation: `${breathe} 2s ease-in-out infinite`,
	[REDUCED_MOTION]: { animation: "none" },

	"&:nth-of-type(1)": {
		backgroundColor: theme.palette.secondaryColors.green,
		animationDelay: "0s",
	},
	"&:nth-of-type(2)": {
		backgroundColor: theme.palette.secondaryColors.cyan,
		animationDelay: "0.3s",
	},
	"&:nth-of-type(3)": {
		backgroundColor: theme.palette.secondaryColors.purple,
		animationDelay: "0.6s",
	},
}));

// ============================================================
// 6. Page Skeleton
// ============================================================

export const StyledPageSkeletonSidebar = styled(Box)(({ theme }) => ({
	width: 72,
	backgroundColor: theme.palette.grey[900],
	padding: theme.spacing(5, 3),
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(5),
	alignItems: "center",
	flexShrink: 0,
}));

export const StyledPageSkeletonContent = styled(Box)(({ theme }) => ({
	flex: 1,
	padding: theme.spacing(6),
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(5),
	overflow: "hidden",
	backgroundColor: theme.palette.beige[100],
}));
