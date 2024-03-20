import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import getAllProducts from "../api/getAllProducts";
import Spinner from "../components/Spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async () => {
    setLoading(true);
    const response = await getAllProducts();
    setLoading(false);
    setProducts(response);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return loading===true ? (
    <Spinner />
  ) : (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.length > 0 &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
