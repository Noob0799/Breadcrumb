import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

function Home({ updateBreadcrumb }) {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    updateBreadcrumb([]);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTrendingProducts(res.products.slice(0, 4)));
  }, []);

  return (
    <>
      <h2 className="products-title">Trending Products</h2>
      <div className="products-container">
        {trendingProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
      <div className="view-all-products-btn-container">
        <button className="view-all-products-btn">
          <Link to="/products">View All Products</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
