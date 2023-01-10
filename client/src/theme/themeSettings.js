import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

export const themeSettings = mode => {
  console.log("teste " + mode)
  return (
    mode === "dark"? darkTheme : lightTheme
  );
};