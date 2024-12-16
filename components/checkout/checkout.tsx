const CheckoutPage = () => {
                    return (
                      <div className="container mx-auto p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Shipping Form */}
                          <div>
                            <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
                            <form>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm mb-1">First name</label>
                                  <input
                                    type="text"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Last name</label>
                                  <input
                                    type="text"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Email address</label>
                                  <input
                                    type="email"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Phone number</label>
                                  <input
                                    type="tel"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Company</label>
                                  <input
                                    type="text"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Country</label>
                                  <select className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500">
                                    <option>Choose country</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">City</label>
                                  <select className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500">
                                    <option>Choose city</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Zip code</label>
                                  <input
                                    type="text"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Address 1</label>
                                  <input
                                    type="text"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm mb-1">Address 2</label>
                                  <input
                                    type="text"
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-500"
                                  />
                                </div>
                              </div>
                              {/* Billing Address */}
                              <div className="mt-6">
                                <label className="flex items-center space-x-2">
                                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                  <span className="text-sm font-semibold">Same as shipping address</span>
                                </label>
                              </div>
                              {/* Buttons */}
                              <div className="flex justify-between mt-8">
                                <button
                                  type="button"
                                  className="border border-gray-400 text-gray-700 py-2 px-4 rounded hover:bg-gray-100"
                                >
                                  &larr; Back to cart
                                </button>
                                <button
                                  type="submit"
                                  className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                                >
                                  Proceed to shipping &rarr;
                                </button>
                              </div>
                            </form>
                          </div>
                  
                          {/* Order Summary */}
                          <div className="border rounded-md p-6">
                            <div>
                              {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-center space-x-4 border-b pb-4 mb-4">
                                  <img
                                    src="/placeholder.jpg"
                                    alt="Chicken Tikka Kabab"
                                    className="w-16 h-16 rounded object-cover"
                                  />
                                  <div>
                                    <p className="font-semibold">Chicken Tikka Kabab</p>
                                    <p className="text-sm text-gray-500">150 gm net</p>
                                    <p className="text-sm font-semibold">$50</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Price Details */}
                            <div className="space-y-2 text-sm text-gray-700">
                              <div className="flex justify-between">
                                <span>Sub-total</span>
                                <span>130$</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Discount</span>
                                <span>25%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Tax</span>
                                <span>54.76$</span>
                              </div>
                            </div>
                            {/* Total */}
                            <div className="flex justify-between font-semibold text-lg mt-4">
                              <span>Total</span>
                              <span>432.65$</span>
                            </div>
                            {/* Place Order Button */}
                            <div className="mt-6">
                              <button className="bg-orange-500 text-white py-2 w-full rounded hover:bg-orange-600">
                                Place an order &rarr;
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  };
                  
                  export default CheckoutPage;
                  
