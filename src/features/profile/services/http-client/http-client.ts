import axios from "axios";
import { PUBLIC_API_URL } from "@/commons/environment";

export const httpClient = axios.create({
	baseURL: PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
