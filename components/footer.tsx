const Footer = () => {
                    return (
                      <footer className="bg-black text-white py-10">
                        <div className="container mx-auto px-5">
                          {/* Subscribe Section */}
                          <div className="text-center mb-10">
                            <h2 className="text-2xl font-semibold">
                              <span className="text-orange-500">Still</span> You Need Our Support?
                            </h2>
                            <p className="text-gray-400 mt-2">Don’t wait; make a smart & logical quote here. It’s pretty easy.</p>
                            <div className="mt-4 flex justify-center">
                              <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="p-2 rounded-l-md text-black focus:outline-none w-64"
                              />
                              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
                                Subscribe Now
                              </button>
                            </div>
                          </div>
                  
                          {/* Footer Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* About Section */}
                            <div>
                              <h3 className="text-lg font-semibold mb-2">About Us.</h3>
                              <p className="text-gray-400 text-sm">
                                Corporate clients and leisure travelers have been relying on Groundlink for dependability and professional
                                chauffeured car service.
                              </p>
                              <div className="mt-4">
                                <p className="font-medium text-orange-500">Opening Hours</p>
                                <p className="text-gray-400 text-sm">Mon - Sat (10:00 - 6:00)</p>
                                <p className="text-gray-400 text-sm">Sunday - Closed</p>
                              </div>
                            </div>
                  
                            {/* Useful Links Section */}
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
                              <ul className="text-gray-400 text-sm space-y-1">
                                <li>About</li>
                                <li>News</li>
                                <li>Partners</li>
                                <li>Team</li>
                                <li>Menu</li>
                                <li>Contact</li>
                              </ul>
                            </div>
                  
                            {/* Help Section */}
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Help?</h3>
                              <ul className="text-gray-400 text-sm space-y-1">
                                <li>FAQ</li>
                                <li>Terms & Condition</li>
                                <li>Reporting</li>
                                <li>Documentation</li>
                                <li>Support Policy</li>
                                <li>Privacy</li>
                              </ul>
                            </div>
                  
                            {/* Recent Posts Section */}
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Recent Post</h3>
                              <ul className="space-y-3">
                                <li className="flex items-start space-x-2">
                                  <img src="/placeholder.jpg" alt="Post" className="w-12 h-12 rounded-md object-cover" />
                                  <div>
                                    <p className="text-gray-400 text-sm hover:text-white">Is seafood good for your body?</p>
                                    <span className="text-xs text-gray-500">February 28, 2022</span>
                                  </div>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <img src="/placeholder.jpg" alt="Post" className="w-12 h-12 rounded-md object-cover" />
                                  <div>
                                    <p className="text-gray-400 text-sm hover:text-white">Change your food habit with organic food</p>
                                    <span className="text-xs text-gray-500">February 28, 2022</span>
                                  </div>
                                </li>
                                <li className="flex items-start space-x-2">
                                  <img src="/placeholder.jpg" alt="Post" className="w-12 h-12 rounded-md object-cover" />
                                  <div>
                                    <p className="text-gray-400 text-sm hover:text-white">Do you like seafood for your life?</p>
                                    <span className="text-xs text-gray-500">February 28, 2022</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                  
                          {/* Footer Bottom */}
                          <div className="text-center mt-8 border-t border-gray-700 pt-4">
                            <p className="text-gray-500">&copy; 2024 by Ayman. All Rights Reserved.</p>
                          </div>
                        </div>
                      </footer>
                    );
                  };
                  
                  export default Footer;
                  