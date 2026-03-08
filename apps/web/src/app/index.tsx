import React from "react";
import ReactDOM from "react-dom/client";
import EntryPoint from "@/app/entry/entrypoint";
import { IS_BROWSER_MOCK_ENABLED } from "@/commons/environment";

async function enableMocking() {
	if (!IS_BROWSER_MOCK_ENABLED) {
		return;
	}

	const { worker } = await import("../__mocks__/browser");

	return worker.start({
		onUnhandledRequest: "warn",
	});
}

const rootEl = document.getElementById("root");

enableMocking().then(() => {
	ReactDOM.createRoot(rootEl as HTMLElement).render(
		<React.StrictMode>
			<EntryPoint />
		</React.StrictMode>,
	);
});
