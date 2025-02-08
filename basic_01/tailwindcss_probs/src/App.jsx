import "./index.css";
import Repeat from "./Front";
function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="flex flex-wrap justify-center gap-x-6">
          <Repeat
            city="bangolar"
            imgurl={
              "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            }
          />
          <Repeat
            city="london"
            imgurl={
              "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            }
          />
          <Repeat
            city="paris"
            imgurl={
              "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
