import { Link } from "react-router-dom";

function Breadcrumb({ breadcrumbs }) {
  return (
    <div className="breadcrumb-container">
      {breadcrumbs.map((breadcrumb, index) => {
        return index === breadcrumbs.length - 1 ? (
          <span className="breadcrumb-path" key={index}>
            {breadcrumb.name}
          </span>
        ) : (
          <span key={index}>
            <span className="breadcrumb-path">
              <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
            </span>
            /
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
