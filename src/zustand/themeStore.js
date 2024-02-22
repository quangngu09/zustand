import create from "zustand";

const themeState = {
  dark: false,
  bgColor: "#fff",
  txtColor: "#111",
};

let themeStore = (set, get) => {
  return {
    themeState,
    toggleDarkMode: (darkMode) => {
      set((state) => {
        return {
          ...state,
          dark: darkMode,
          bgColor: darkMode ? "#111" : "#fff",
          txtColor: darkMode ? "#fff" : "#111",
        };
      });
    },
  };
};

export default create(themeStore);
