import { screen } from "@testing-library/react";
import { queryClientProvider, render } from "@/commons/utils/custom-render";
import Profile from "./";

function renderComponent() {
	return render(<Profile />, { wrapper: queryClientProvider() });
}

describe("<Profile/>", () => {
	it("should render profile page", () => {
		renderComponent();
		expect(screen.getByText("Profile")).toBeInTheDocument();
		expect(
			screen.getByText("Welcome to your profile page"),
		).toBeInTheDocument();
	});
});
