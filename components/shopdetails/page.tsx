import React from "react";
import { FaStar, FaRegStar, FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const ProductDetailPage = () => {
  const similarProducts = [
    { id: 1, name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "/lime.jpg" },
    { id: 2, name: "Chocolate Muffin", price: "$28.00", image: "/muffin.jpg" },
    { id: 3, name: "Burger", price: "$21.00", image: "/burger.jpg" },
    { id: 4, name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "/lime.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img
            src="/left side image.png"
            alt="Yummy Chicken Chup"
            className="rounded-lg w-647 h-96 object-cover"
          />
          <div className="flex space-x-2 mt-4">
            <img src="/small1.jpg" alt="Small 1" className="w-20 h-20 rounded-lg object-cover" />
            <img src="/small2.jpg" alt="Small 2" className="w-20 h-20 rounded-lg object-cover" />
            <img src="/small3.jpg" alt="Small 3" className="w-20 h-20 rounded-lg object-cover" />
            <img src="/small4.jpg" alt="Small 4" className="w-20 h-20 rounded-lg object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded">In Stock</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Yummy Chicken Chup</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum.
          </p>
          <p className="text-2xl font-semibold text-orange-500 mb-4">54.00$</p>
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-600">(5.0 Rating, 22 Review)</span>
          </div>

          {/* Quantity and Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded overflow-hidden">
              <button className="px-4 py-2 bg-gray-200">-</button>
              <span className="px-4 py-2">1</span>
              <button className="px-4 py-2 bg-gray-200">+</button>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Add to cart
            </button>
          </div>

          {/* Wishlist & Compare */}
          <div className="flex space-x-4 mb-4">
            <button className="text-gray-600 hover:text-orange-500">❤️ Add to Wishlist</button>
            <button className="text-gray-600 hover:text-orange-500">🔍 Compare</button>
          </div>

          <p className="text-gray-600">
            <span className="font-semibold">Category:</span> Pizza
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Tags:</span> Our Shop
          </p>

          {/* Share Icons */}
          <div className="flex space-x-4 text-gray-600 mt-4">
            <span>Share:</span>
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer" />
            <FaPinterest className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex border-b">
          <button className="py-2 px-6 border-b-2 border-orange-500 text-orange-500 font-semibold">
            Description
          </button>
          <button className="py-2 px-6 text-gray-600 hover:text-orange-500">
            Reviews (24)
          </button>
        </div>
        <div className="mt-4 text-gray-600">
          <p>
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu
            euismod tellus.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Mauris eget magna eget ligula tincidunt tempus.</li>
            <li>Nam et lectus lacus lorem fringilla leo.</li>
          </ul>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500 font-semibold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
