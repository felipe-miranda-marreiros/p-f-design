import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal as MuiModal, Typography } from "@mui/material";
import type { ReactNode } from "react";

import { ModalContainer, StyledCloseButton } from "./modal.styles";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
	return (
		<MuiModal open={open} onClose={onClose}>
			<ModalContainer>{children}</ModalContainer>
		</MuiModal>
	);
}

interface ModalHeaderProps {
	children: ReactNode;
	onClose?: () => void;
	description?: string;
}

export function ModalHeader({
	children,
	onClose,
	description,
}: ModalHeaderProps) {
	return (
		<Box sx={{ mb: 5 }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					gap: 4,
				}}
			>
				<Typography variant="h2">{children}</Typography>
				{onClose && (
					<StyledCloseButton onClick={onClose} size="small" aria-label="close">
						<CloseIcon fontSize="small" />
					</StyledCloseButton>
				)}
			</Box>
			{description && (
				<Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
					{description}
				</Typography>
			)}
		</Box>
	);
}

interface ModalBodyProps {
	children: ReactNode;
}

export function ModalBody({ children }: ModalBodyProps) {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
			{children}
		</Box>
	);
}

interface ModalFooterProps {
	children: ReactNode;
}

export function ModalFooter({ children }: ModalFooterProps) {
	return <Box sx={{ mt: 5 }}>{children}</Box>;
}
