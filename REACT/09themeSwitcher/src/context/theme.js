//other way(best) of using context Api in just 1 file (just in more short and compact way) can relate easily with old
import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme : () => {},
    lightTheme : () => {},
}); 

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}

//*Explain : dekho simply -> themeProvider jis bhi children/component ko wrap krega or sath ma jo bhi value pass kraga us value ka acces uska pas hoga jo useTheme method ko call krega
//themeProvider mei value mei themeMode, darkTheme, LightTheme pass kia hua hai  