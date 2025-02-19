import { Fragment, useEffect, useState } from "react";
import Productcard from "../components/Productcard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products?${searchParams}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [searchParams]);

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <Productcard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
