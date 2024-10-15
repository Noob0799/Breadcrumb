import { Link } from "react-router-dom";

function Product({ id, title, price, thumbnail }) {
  return (
    <Link to={`/products/${id}`}>
      <div className="product-card">
        <div className="product-img">
          <img src={thumbnail} alt={title} />
        </div>
        <p>{title}</p>
        <p>$ {price}</p>
      </div>
    </Link>
  );
}

export default Product;
