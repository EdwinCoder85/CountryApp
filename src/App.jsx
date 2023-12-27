import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Page404 from "./components/Page404";
import SingleCountry from "./components/SingleCountry";
import Header from "./components/shared/Header";
function App() {

  const storageTheme = localStorage.getItem('theme');
  const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const newTheme = storageTheme || systemColorScheme;

  const [theme, setTheme] = useState(newTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem('theme', 'dark')
    } else if (theme === "light") {
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
    <Header handleChangeTheme={handleChangeTheme} theme={theme}/>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
