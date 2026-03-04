import { screen } from "@testing-library/react";
import { queryClientProvider, render } from "@/commons/utils/custom-render";
import Welcome from "./";

function renderComponent() {
	return render(<Welcome />, { wrapper: queryClientProvider() });
}

describe("<Welcome/>", () => {
	it("should render welcome message", () => {
		renderComponent();
		expect(screen.getByText("Welcome to the App!")).toBeInTheDocument();
	});
});
