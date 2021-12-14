import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import "./Header.css";
import categories from "./../../data/category";

const Header = ({ category, setCategory, word, setWord, darkMode, t }) => {
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#fff" : "#000",
      },
    },
  });

  const handleChange = (lang) => {
    setCategory(lang);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : t("title")} </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label={t("search")}
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label={t("lang")}
            variant="standard"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((lang) => (
              <MenuItem key={lang.label} value={lang.label}>
                {lang.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
