import React, { createContext, useState } from "react";
interface contextInterface {
	theme: boolean;
	show: boolean;
	setTheme: React.Dispatch<React.SetStateAction<boolean>>;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<contextInterface>({
	theme: true,
	show: false,
	setTheme: () => {},
	setShow: () => {},
});

type Prop = {
	children: React.ReactNode;
};

function ContextProvider({ children }: Prop) {
	const [theme, setTheme] = useState<boolean>(
		JSON.parse(localStorage.getItem("theme") || "true")
	);
	const [show, setShow] = useState<boolean>(false);

	return (
		<ThemeContext.Provider value={{ theme, show, setShow, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ContextProvider;
