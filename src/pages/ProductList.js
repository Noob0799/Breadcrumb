import { useEffect, useState } from "react";
import Product from "../components/Product";

function ProductList({ updateBreadcrumb }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    updateBreadcrumb([{"name": "Home", "path": "/"}, {"name": "All Products", "path": "/products"}]);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);
  return (
    <>
      <h2 className="products-title">All Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
