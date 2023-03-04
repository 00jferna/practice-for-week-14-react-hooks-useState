import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
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

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count <= 0 ? 0 : count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default UseState;
