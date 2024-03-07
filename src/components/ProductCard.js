import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a href="/" class="block relative h-48 rounded overflow-hidden">
        <Link to={"product/12"}>
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/421x261"
          />
        </Link>
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          Shooting Stars
        </h2>
        <p class="mt-1">$21.15</p>
      </div>
    </div>
  );
};

export default ProductCard;
