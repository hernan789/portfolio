// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface ThemeContextType {
//   isDarkBackground: boolean;
//   setIsDarkBackground: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [isDarkBackground, setIsDarkBackground] = useState<boolean>(false);

//   return (
//     <ThemeContext.Provider value={{ isDarkBackground, setIsDarkBackground }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
