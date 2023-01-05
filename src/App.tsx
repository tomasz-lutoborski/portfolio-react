import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./utils/useDarkMode";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import { lightTheme, darkTheme } from "./components/styled/Themes";
import { Fullscreen } from "./components/styled/Layout";
import { MenuBar } from "./components/Menu/MenuBar";
import Desktop from "./components/Desktop";
import { useState } from "react";
import PopupMenu from "./components/PopupMenu/PopupMenu";
import { createContext } from "react";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const [showMenu, setShowMenu] = useState(false);

  const ThemeContext = createContext(theme);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Fullscreen>
        <GlobalStyles />
        <Desktop />
        {showMenu && <PopupMenu />}
        <MenuBar
          theme={theme}
          toggleTheme={themeToggler}
          toggleMenu={toggleShowMenu}
        />
      </Fullscreen>
    </ThemeProvider>
  );
};

export default App;
