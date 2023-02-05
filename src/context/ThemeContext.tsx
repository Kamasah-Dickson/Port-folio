import React, { createContext, useState } from "react";

interface contextInterface {
	theme: boolean;
	setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<contextInterface>({
	theme: true,
	setTheme: () => {},
});

type Prop = {
	children: React.ReactNode;
};

function ContextProvider({ children }: Prop) {
	const [theme, setTheme] = useState<boolean>(
		JSON.parse(localStorage.getItem("theme") || "true")
	);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ContextProvider;
