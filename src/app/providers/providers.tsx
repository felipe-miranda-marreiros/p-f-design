import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "@/app/routes/routes";
import { theme } from "@/app/styles/theme";
import ErrorView from "@/components/ui/error";
import Loading from "@/components/ui/loading";

const queryClient = new QueryClient();

export default function Providers() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ErrorBoundary fallback={<ErrorView />}>
				<Suspense fallback={<Loading />}>
					<BrowserRouter>
						<QueryClientProvider client={queryClient}>
							<AppRoutes />
							<ReactQueryDevtools initialIsOpen={false} />
						</QueryClientProvider>
					</BrowserRouter>
				</Suspense>
			</ErrorBoundary>
		</ThemeProvider>
	);
}
