import React from "react";
import Dark from "../images/dark.png";
import Light from "../images/light.png";

import themeStore from "../zustand/themeStore";

const Theme = () => {
  const { dark, toggleDarkMode } = themeStore();
  return (
    <div style={{ cursor: "pointer", padding: "15px" }}>
      {dark ? (
        <img
          src={Dark}
          alt="Dark"
          style={{ width: "50px" }}
          onClick={() => toggleDarkMode(false)}
        />
      ) : (
        <img
          src={Light}
          alt="Light"
          style={{ width: "50px" }}
          onClick={() => toggleDarkMode(true)}
        />
      )}
    </div>
  );
};

export default Theme;
