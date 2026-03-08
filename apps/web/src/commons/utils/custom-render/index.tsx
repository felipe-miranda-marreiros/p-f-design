import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type RenderOptions, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { PropsWithChildren, ReactElement } from "react";

const queryClientProvider =
	() =>
	({ children }: PropsWithChildren) => {
		const queryClient = new QueryClient({
			defaultOptions: {
				queries: {
					retry: false,
				},
			},
		});

		return (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		);
	};

function customRender(
	ui: ReactElement,
	options?: RenderOptions,
): ReturnType<typeof render> & { user: ReturnType<typeof userEvent.setup> } {
	return {
		user: userEvent.setup(),
		...render(ui, options),
	};
}

export { customRender as render, queryClientProvider };
