import { screen } from "@testing-library/react";
import { queryClientProvider, render } from "@/commons/utils/custom-render";
import Settings from "./";

function renderComponent() {
	return render(<Settings />, { wrapper: queryClientProvider() });
}

describe("<Settings/>", () => {
	it("should render settings page", () => {
		renderComponent();
		expect(screen.getByText("Settings")).toBeInTheDocument();
		expect(
			screen.getByText("Manage your profile settings"),
		).toBeInTheDocument();
	});
});
