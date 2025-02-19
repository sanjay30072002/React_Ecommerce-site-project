import {Link} from "react-router-dom";

export default function Productcard({ product }) {
  if (!product || !product.images || product.images.length === 0) {
    return null; // Return nothing if product data is not available yet
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src={product.images[0].image} // Only runs if images exist
          alt={product.name || "Product Image"}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={"/product/"+product._id} href="#">{product.name || "Product Name"}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div className="rating-inner" style={{width : `${product.ratings/5 * 100}%`}}></div>
            </div>
          </div>
          <p className="card-text">${product.price || "N/A"}</p>
          <Link to={"/product/"+product._id} href="#" id="view_btn" className="btn btn-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
