import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./theme.jsx";

const themeContext = React.createContext(defaultContext);
const chooseTheme = () => React.useContext(themeContext);
const defaultContext = {
  dark: false,
  toggle: () => {}
};
const goDarkMode = () => {
  const [currentTheme, setTheme] = React.useState({
    dark: false,
    themeMounted: false
  });

  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setTheme({ ...currentTheme, dark: isDark, themeMounted: true });
  }, []);
  return [currentTheme, setTheme];
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setTheme] = goDarkMode();
  if (!currentTheme.themeMounted) {
    return <div />;
  }
  const theme = currentTheme.dark ? theme("light") : theme("dark");
  const toggleTheme = () => {
    const dark = !currentTheme.dark;
    setTheme({ ...currentTheme, dark });
  };
  return (
    <EmotionThemeProvider theme={theme}>
      <themeContext.Provider value={{ dark: currentTheme.dark, toggleTheme }}>
        {children}
      </themeContext.Provider>
    </EmotionThemeProvider>
  );
};
export { ThemeProvider, theme };
