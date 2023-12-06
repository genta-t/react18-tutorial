import { useEffect } from "react";
import { useMediaQuery } from "../mediaQuery/useMediaQuery";
import { useLocalStorage } from "../storage/useStorage"

export const useDarkMode = (): [boolean, React.Dispatch<React.SetStateAction<boolean | undefined>>] => {
  const [ darkMode, setDarkMode ] = useLocalStorage("useDarkMode", false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", Boolean(enabled));
  }, [enabled]);

  return [ enabled, setDarkMode ];
}
