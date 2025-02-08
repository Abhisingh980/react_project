import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <h1 className="text-4xl text-center text-blue-500 mt-7">
        background color changer Application using React
      </h1>
      <div
        className="flex justify-center items-center h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col items-center ">
          <div className="flex mt-4 gap-2 text-xl font-bold ">
            <button
              className="px-4 py-2 bg-red-500 rounded-md text-black"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-black rounded-md"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-black rounded-md"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-black rounded-md"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
