import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./utils/useDarkMode";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import { lightTheme, darkTheme } from "./components/styled/Themes";
import Toggler from "./components/Toggler";
import "./App.css";
import dummyData from "./assets/data";
import CardList from "./components/CardList";
import { Data } from "./types/data";

const App = () => {
  const [videos, setVideos] = useState<Data[]>([]);
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Toggler theme={theme} toggleTheme={themeToggler} />
          {videos.map((list, index) => {
            return (
              <section key={index}>
                <h2 className="section-title">{list.section}</h2>
                <CardList list={list} />
                <hr />
              </section>
            );
          })}
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
