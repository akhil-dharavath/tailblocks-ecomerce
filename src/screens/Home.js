import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import getAllProducts from "../api/getAllProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchAllProducts = async () => {
    const response = await getAllProducts();
    setProducts(response);
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
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
