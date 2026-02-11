import { z } from "zod";

export const envSchema = z.object({
	PUBLIC_API_URL: z.string().default("http://localhost:3000"),
});

const env = envSchema.parse(import.meta.env);

export const IS_BROWSER_MOCK_ENABLED =
	import.meta.env.PUBLIC_REACT_USE_BROWSER_MOCK === "true";

export const PUBLIC_API_URL = env.PUBLIC_API_URL;
