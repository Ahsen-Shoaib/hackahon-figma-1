import React from "react";

const ShopListPage = () => {
  const products = [
    { id: 1, name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "/fresh lime.png" },
    { id: 2, name: "Chocolate Muffin", price: "$28.00", oldPrice: "$45.00", image: "/chocolate muffins.png", sale: true },
    { id: 3, name: "Burger", price: "$21.00", oldPrice: "$41.00", image: "/burger.png" },
    { id: 4, name: "Country Burger", price: "$45.00", image: "/country burger.png" },
    { id: 5, name: "Drink", price: "$23.00", oldPrice: "$45.00", image: "/drinks.png" },
    { id: 6, name: "Pizza", price: "$43.00", image: "/pizza.png" },
    { id: 7, name: "Cheese Butter", price: "$10.00", image: "/cheese butter.png" },
    { id: 8, name: "Sandwiches", price: "$25.00", image: "/sandwich.png" },
    { id: 9, name: "Chicken Chup", price: "$12.00", image: "/chicken chup.png", sale: true },
  ];

  return (
                    <div className="container mx-auto px-4 py-8">
                      {/* Grid Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Center Content: Products */}
                        <div className="lg:col-span-3">
                          {/* Shop Controls */}
                          <div className="flex justify-between items-center mb-8">
                            <div>
                              <label className="font-semibold">Sort By :</label>
                              <select className="border rounded px-2 py-1 ml-2">
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                              </select>
                            </div>
                            <div>
                              <label className="font-semibold">Show :</label>
                              <select className="border rounded px-2 py-1 ml-2">
                                <option>Default</option>
                                <option>Popular</option>
                                <option>Featured</option>
                              </select>
                            </div>
                          </div>
                
                          {/* Product Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                              <div
                                key={product.id}
                                className="border rounded-lg overflow-hidden shadow hover:shadow-lg"
                              >
                                <div className="relative w-full h-[330px]">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                    style={{ width: "312px", height: "330px" }}
                                  />
                                  {product.sale && (
                                    <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-sm">
                                      Sale
                                    </span>
                                  )}
                                </div>
                                <div className="p-4">
                                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                  <div className="flex items-center">
                                    <span className="text-orange-500 font-semibold text-xl mr-2">
                                      {product.price}
                                    </span>
                                    {product.oldPrice && (
                                      <span className="text-gray-400 line-through">{product.oldPrice}</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                          {/* Search */}
                          <div className="mb-8">
                            <h4 className="font-bold mb-4">Search Product</h4>
                            <div className="flex">
                              <input
                                type="text"
                                placeholder="Search Product"
                                className="border rounded-l px-4 py-2 w-full"
                              />
                              <button className="bg-orange-500 text-white px-4 py-2 rounded-r">
                                🔍
                              </button>
                            </div>
                          </div>
                
                          {/* Categories */}
                          <div className="mb-8">
                            <h4 className="font-bold mb-4">Category</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li><input type="checkbox" className="mr-2" /> Sandwiches</li>
                              <li><input type="checkbox" className="mr-2" /> Burger</li>
                              <li><input type="checkbox" className="mr-2" /> Chicken Chup</li>
                              <li><input type="checkbox" className="mr-2" /> Drink</li>
                              <li><input type="checkbox" className="mr-2" /> Pizza</li>
                              <li><input type="checkbox" className="mr-2" /> Thi</li>
                              <li><input type="checkbox" className="mr-2" /> Non Veg</li>
                              <li><input type="checkbox" className="mr-2" /> UnCategorised</li>
                            </ul>
                            </div>

                            <div>
                            <img
                             src="/banner right.png"
                             alt="Main Course"
                             className="mr-2  w-448 h-626"
                              />          
                            </div>
                
                          {/* Filter By Price */}
                          <div className="mb-8">
                            <h4 className="font-bold mb-4">Filter By Price</h4>
                            <input type="range" min="0" max="1000" className="w-full" />
                            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
                              Filter
                            </button>
                          </div>
                
                          {/* Latest Products */}
                          <div className="mb-8">
                            <h4 className="font-bold mb-4">Latest Products</h4>
                            <ul className="space-y-2 text-gray-700">
                              <li>Pizza - $45.00</li>
                              <li>Cupcake - $30.00</li>
                              <li>Cookies - $5.00</li>
                              <li>Burger - $21.00</li>
                            </ul>
                          </div>
                
                          {/* Product Tags */}
                          <div>
                            <h4 className="font-bold mb-4">Product Tags</h4>
                            <div className="flex flex-wrap gap-2">
                              <span className="bg-gray-200 px-2 py-1 rounded">Pizza</span>
                              <span className="bg-gray-200 px-2 py-1 rounded">Burger</span>
                              <span className="bg-gray-200 px-2 py-1 rounded">Cookies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                     )
                    };
                

export default ShopListPage;
