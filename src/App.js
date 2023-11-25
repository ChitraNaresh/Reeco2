import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import OrderedItems from "./components/OrderedItems";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route
            path="/ordered-products"
            element={<OrderedItems></OrderedItems>}
          />
      </Routes>
    </BrowserRouter> 
  );
} 

export default App;
