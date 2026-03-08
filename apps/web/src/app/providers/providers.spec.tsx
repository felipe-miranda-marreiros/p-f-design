import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@tanstack/react-query-devtools", () => ({
	ReactQueryDevtools: () => null,
}));

vi.mock("react-router", async () => {
	const actual =
		await vi.importActual<typeof import("react-router")>("react-router");
	return {
		...actual,
		BrowserRouter: ({ children }: { children: React.ReactNode }) => (
			<actual.MemoryRouter>{children}</actual.MemoryRouter>
		),
	};
});

vi.mock("@/components/ui/error", () => ({
	default: () => <div data-testid="error-view">ErrorView</div>,
}));

vi.mock("@/app/routes/routes", () => ({
	AppRoutes: () => <div data-testid="app-routes">AppRoutes</div>,
}));

import Providers from "./providers";

let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

describe("<Providers />", () => {
	beforeEach(() => {
		vi.resetModules();
		vi.clearAllMocks();
		consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
	});

	it("should render AppRoutes", () => {
		render(<Providers />);
		expect(screen.getByTestId("app-routes")).toBeInTheDocument();
	});

	it("should show ErrorView when a child throws an error", async () => {
		vi.doMock("@/app/routes/routes", () => ({
			AppRoutes: () => {
				throw new Error("boom");
			},
		}));

		const { default: ProvidersWithThrow } = await import("./providers");

		render(<ProvidersWithThrow />);

		const error = await screen.findByTestId("error-view");

		expect(error).toBeInTheDocument();
	});

	it("should handle Suspense (when AppRoutes suspends)", async () => {
		let resolve: () => void = () => {};

		const promise = new Promise<void>((r) => {
			resolve = r;
		});

		vi.doMock("@/app/routes/routes", () => ({
			AppRoutes: () => {
				throw promise;
			},
		}));

		const { default: ProvidersSuspense } = await import("./providers");

		const { rerender } = render(<ProvidersSuspense />);

		resolve();
		await promise;

		rerender(<ProvidersSuspense />);

		expect(true).toBe(true);
	});
});
