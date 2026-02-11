import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { server } from "./src/__mocks__/server";

vi.mock("@/app/i18n", async () => {
	const actual = await vi.importActual("@/app/i18n");
	return {
		...actual,
		t: (key: string) => key,
		useTranslation: () => ({
			t: (key: string) => key,
		}),
	};
});

vi.mock("msw", async () => {
	const actual = await vi.importActual("msw");
	return {
		...actual,
		delay: () => Promise.resolve(),
	};
});

beforeAll(() => {
	server.listen({
		onUnhandledRequest: "warn",
	});
});

afterEach(() => {
	server.resetHandlers();
	cleanup();
});

afterAll(() => {
	server.close();
});
