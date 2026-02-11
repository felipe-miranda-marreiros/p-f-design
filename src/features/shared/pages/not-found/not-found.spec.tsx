import { screen } from "@testing-library/react";
import { render } from "@/commons/utils/custom-render";
import NotFound from "./";

function TestComponent() {
	return render(<NotFound />);
}

describe("<NotFound/>", () => {
	it("should render not found message", () => {
		TestComponent();
		expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument();
	});
});
