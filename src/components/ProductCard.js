import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <p className="block relative h-48 rounded overflow-hidden">
        <Link to={`product/${product._id}`}>
          <img
            alt={product.name}
            className="object-cover object-center h-full block"
            src={product.image}
          />
        </Link>
      </p>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>
        <p className="mt-1">&#8377;{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
