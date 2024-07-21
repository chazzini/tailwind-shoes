import { useState } from "react";
import { Nav } from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-10 xl:px-24">
      <Nav />
    </div>
  );
}

export default App;
