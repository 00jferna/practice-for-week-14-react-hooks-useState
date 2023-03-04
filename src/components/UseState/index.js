import { useState } from "react";

const UseState = () => {
  console.log(useState("light"));
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Toggle1
      </button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle1
      </button>
    </div>
  );
};

export default UseState;
