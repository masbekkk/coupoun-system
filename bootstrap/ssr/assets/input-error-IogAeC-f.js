import { n as cn } from "./utils-dvte0Nyw.js";
import { jsx } from "react/jsx-runtime";
//#region resources/js/components/input-error.tsx
function InputError({ message, className = "", ...props }) {
	return message ? /* @__PURE__ */ jsx("p", {
		...props,
		className: cn("text-sm text-red-600 dark:text-red-400", className),
		children: message
	}) : null;
}
//#endregion
export { InputError as t };
