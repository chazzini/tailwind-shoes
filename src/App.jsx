import { useState } from "react";
import { Nav } from "./components/Nav";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-10 xl:px-24">
      <Nav />
      <ProductDetail />
    </div>
  );
}

export default App;
