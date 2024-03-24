import { useState } from "react";
import calcimg from "./assets/calc.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img src={calcimg} alt="" />
        <p>React Counter</p>
      </header>

      <div className="style">
        <div className="doNotMove">
          {count !== 0 ? (
            <div
              className="button-"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <p>-</p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="countpurple">
          <p>{count}</p>
        </div>
        {count !== 10 ? (
          <div
            className="buttonplus"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <p>+</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="reset"
        onClick={() => {
          setCount(count * 0);
        }}
      >
        <p>Reset</p>
      </div>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
          <span>Geo</span>
        </p>
      </footer>
    </>
  );
}

export default App;
