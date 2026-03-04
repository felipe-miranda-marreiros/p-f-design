import type { ButtonProps as MuiButtonProps } from "@mui/material";
import { buttonClasses, Button as MuiButton } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		primary: true;
		secondary: true;
		tertiary: true;
		destroy: true;
	}
}

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
	variant?: "primary" | "secondary" | "tertiary" | "destroy";
}

const StyledButton = styled(MuiButton)<ButtonProps>(
	({ theme }: { theme: Theme }) => ({
		...theme.typography.body1,
		textTransform: "none",
		borderRadius: 8,
		padding: theme.spacing(4),
		fontWeight: 600,
		variants: [
			{
				props: { variant: "primary" },
				style: {
					backgroundColor: theme.palette.grey[900],
					color: theme.palette.common.white,
					border: "none",
					"&:hover": {
						backgroundColor: theme.palette.grey[500],
					},
				},
			},
			{
				props: { variant: "secondary" },
				style: {
					backgroundColor: theme.palette.beige[100],
					color: theme.palette.grey[900],
					border: "none",
					"&:hover": {
						backgroundColor: "transparent",
						outline: `1px solid ${theme.palette.grey[900]}`,
					},
				},
			},
			{
				props: { variant: "tertiary" },
				style: {
					...theme.typography.body1,
					backgroundColor: "transparent",
					color: theme.palette.grey[500],
					border: "none",
					"&:hover": {
						backgroundColor: "transparent",
						color: theme.palette.grey[900],
					},
				},
			},
			{
				props: { variant: "destroy" },
				style: {
					backgroundColor: theme.palette.error.main,
					color: theme.palette.common.white,
					border: "none",
					"&:hover": {
						backgroundColor: theme.palette.error.light,
					},
				},
			},
			// --- Disabled states ---
			{
				props: { variant: "primary", disabled: true },
				style: {
					backgroundColor: theme.palette.grey[300],
					color: theme.palette.common.white,
				},
			},
			{
				props: { variant: "secondary", disabled: true },
				style: {
					backgroundColor: theme.palette.grey[100],
					color: theme.palette.grey[300],
					outline: "none",
				},
			},
			{
				props: { variant: "tertiary", disabled: true },
				style: {
					backgroundColor: "transparent",
					color: theme.palette.grey[300],
				},
			},
			{
				props: { variant: "destroy", disabled: true },
				style: {
					backgroundColor: theme.palette.grey[300],
					color: theme.palette.common.white,
				},
			},
			// --- Loading states (after disabled to override background) ---
			{
				props: { variant: "primary", loading: true },
				style: {
					backgroundColor: theme.palette.grey[900],
					[`& .${buttonClasses.loadingIndicator}`]: {
						color: theme.palette.common.white,
					},
				},
			},
			{
				props: { variant: "secondary", loading: true },
				style: {
					backgroundColor: theme.palette.beige[100],
					[`& .${buttonClasses.loadingIndicator}`]: {
						color: theme.palette.grey[900],
					},
				},
			},
			{
				props: { variant: "tertiary", loading: true },
				style: {
					backgroundColor: "transparent",
					[`& .${buttonClasses.loadingIndicator}`]: {
						color: theme.palette.grey[500],
					},
				},
			},
			{
				props: { variant: "destroy", loading: true },
				style: {
					backgroundColor: theme.palette.error.main,
					[`& .${buttonClasses.loadingIndicator}`]: {
						color: theme.palette.common.white,
					},
				},
			},
		],
	}),
);

export const Button = ({
	variant = "primary",
	children,
	...rest
}: ButtonProps) => (
	<StyledButton variant={variant} {...rest}>
		{children}
	</StyledButton>
);
