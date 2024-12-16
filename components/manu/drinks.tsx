import React from "react";

const DrinksMenuPage: React.FC = () => {
  const drinks = [
    {
      id: 1,
      title: "Caffè macchiato",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      id: 2,
      title: "Aperol Spritz Capacianno",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$",
    },
    {
      id: 3,
      title: "Caffe Latte Campuri",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$",
    },
    {
      id: 4,
      title: "Tormentoso BushTea Pintoage",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$",
    },
  ];

  const partners = [
    { id: 1, name: "Restaurant", logo: "/restaurant.png" },
    { id: 2, name: "Bakery", logo: "/bakery.png" },
    { id: 3, name: "Fork & Spoon", logo: "/fork-spoon.png" },
    { id: 4, name: "Wolf Coffee", logo: "/wolf-coffee.png" },
    { id: 5, name: "Bistro", logo: "/bistro.png" },
    { id: 6, name: "Bakery 2", logo: "/bakery2.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Drinks Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Drinks Menu */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <span className="text-orange-500 mr-2">🍹</span> Drinks
          </h2>
          <ul className="space-y-6">
            {drinks.map((drink) => (
              <li key={drink.id} className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg">{drink.title}</p>
                  <p className="text-gray-500 text-sm">{drink.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{drink.calories}</p>
                </div>
                <p className="text-orange-500 font-bold text-lg">{drink.price}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Image */}
        <div>
          <img
            src="/drinks.jpg"
            alt="Drinks"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Partners & Clients Section */}
      <div className="mt-16 text-center">
        <h3 className="text-gray-500 uppercase mb-2">Partners & Clients</h3>
        <h2 className="text-3xl font-bold mb-6">We work with the best people</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="w-28 h-20 flex items-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-full h-full grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinksMenuPage;
