import { useState } from "react"
;import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const updateBreadcrumb = (aBreadcrumbs) => {
    setBreadcrumbs(aBreadcrumbs);
  }
  return (
    <div className="app">
      <BrowserRouter>
        <h1>E-Commerce Website For Products</h1>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Routes>
          <Route path="/" element={<Home updateBreadcrumb={updateBreadcrumb} />} />
          <Route path="/products" element={<ProductList updateBreadcrumb={updateBreadcrumb} />} />
          <Route path="/products/:id" element={<ProductDetails updateBreadcrumb={updateBreadcrumb} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
