import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region resources/js/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function toUrl(url) {
	return typeof url === "string" ? url : url.url;
}
async function apiFetch(endpoint, options = {}) {
	const token = typeof document !== "undefined" ? document.cookie.split("; ").find((row) => row.startsWith("XSRF-TOKEN="))?.split("=")[1] : null;
	const response = await fetch(endpoint, {
		...options,
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
			...token && { "X-XSRF-TOKEN": decodeURIComponent(token) },
			...options.headers
		},
		credentials: "same-origin"
	});
	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));
		throw new Error(errorData.message || "API request failed");
	}
	return response.json();
}
//#endregion
export { cn as n, toUrl as r, apiFetch as t };
