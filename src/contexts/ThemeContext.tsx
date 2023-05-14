import { PropsWithChildren, createContext, useReducer } from "react";
import { AnyObject } from "../utils/types.d";

const initialState = { darkMode: false };

const themeReducer = (state: AnyObject, action: AnyObject) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export const ThemeContext = createContext({});

export function ThemeProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer<any>(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
