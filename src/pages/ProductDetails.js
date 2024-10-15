import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ updateBreadcrumb }) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams("id");
  useEffect(() => {
    updateBreadcrumb([{"name": "Home", "path": "/"}, {"name": "All Products", "path": "/products"}]);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        setIsLoading(false);
        updateBreadcrumb([{"name": "Home", "path": "/"}, {"name": "All Products", "path": "/products"}, {"name": `${res.title}`, "path": `/products/${res.id}`}]);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-details-container">
          <div className="product-img">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="product-details">
            <p>{product.title}</p>
            <p>$ {product.price}</p>
            <p className="product-desc">{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
