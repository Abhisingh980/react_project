import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>
        <center> counter page </center>
      </h1>
      <div style={{ textAlign: "center" }}>
        <h3>Counter Value: {counter}</h3>

        {counter < 20 && (
          <button onClick={() => setCounter(counter + 1)}>Increase</button>
        )}
        {counter >= 20 && (
          <p style={{ color: "red" }}>Counter value is greater than 20</p>
        )}

        {counter > 0 && (
          <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        )}
        {counter <= 0 && (
          <p style={{ color: "red" }}>Counter value is less than 0</p>
        )}
      </div>
    </>
  );
}

export default App;
