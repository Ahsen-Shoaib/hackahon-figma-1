import React from "react";
// import { FaUtensils, FaPizzaSlice, FaCheese, FaUserTie } from "react-icons/fa";
import DrinksMenuPage from "./drinks";

const MenuPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div>
          <img
            src="/starter menu.png"
            alt="Starter Menu"
            className="rounded-lg object-cover w-448 h-626"
          />
        </div>

        {/* Starter Menu */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <span className="text-orange-500 mr-2">🍽</span> Starter Menu
          </h2>
          <ul className="space-y-4">
            {/* Menu Item 1 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold">Alder Grilled Chinook Salmon</p>
                <p className="text-gray-500 text-sm">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-xs text-gray-400 mt-1">560 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">32$</p>
            </li>
            {/* Menu Item 2 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-orange-500">
                  Berries and creme tart
                </p>
                <p className="text-gray-500 text-sm">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-xs text-gray-400 mt-1">700 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">43$</p>
            </li>
            {/* Menu Item 3 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold">Tormentoso Bush Pizza Pintoage</p>
                <p className="text-gray-500 text-sm">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-xs text-gray-400 mt-1">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">14$</p>
            </li>
            {/* Menu Item 4 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold">Spicy Vegan Potato Curry</p>
                <p className="text-gray-500 text-sm">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-xs text-gray-400 mt-1">580 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">35$</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
        {/* Main Course */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <span className="text-orange-500 mr-2">🍽</span> Main Course
          </h2>
          <ul className="space-y-4">
            {/* Menu Item 1 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold">
                  Optic Big Breakfast Combo Menu
                </p>
                <p className="text-gray-500 text-sm">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-xs text-gray-400 mt-1">560 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">32$</p>
            </li>
            {/* Menu Item 2 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold">Cashew Chicken With Stir-Fry</p>
                <p className="text-gray-500 text-sm">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-xs text-gray-400 mt-1">700 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">43$</p>
            </li>
            {/* Menu Item 3 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold">Vegetables & Green Salad</p>
                <p className="text-gray-500 text-sm">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-xs text-gray-400 mt-1">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">14$</p>
            </li>
            {/* Menu Item 4 */}
            <li className="flex justify-between items-start">
              <div>
                <p className="font-semibold">Spicy Vegan Potato Curry</p>
                <p className="text-gray-500 text-sm">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-xs text-gray-400 mt-1">580 CAL</p>
              </div>
              <p className="text-orange-500 font-semibold">35$</p>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img
            src="/main course.png"
            alt="Main Course"
            className="rounded-lg object-cover w-448 h-626"
          />
        </div>
        
<div className="container mx-auto px-4 py-8" style={{ width: 1923, margin: "0" }}>
{/* Statistics Section */}
<div className="bg-black text-white py-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
   
{/* <div>
  <img src="/cap logo.png" alt="Logo 1" className="text-orange-500 text-4xl mx-auto mb-2" />
  <h2 className="text-3xl font-bold">420</h2>
  <p className="text-gray-300">Professional Chefs</p>
</div>
<div>
  <img src="/burgerlogo.png" alt="Logo 2" className="text-orange-500 text-4xl mx-auto mb-2" />
  <h2 className="text-3xl font-bold">320</h2>
  <p className="text-gray-300">Items Of Food</p>
</div>
<div>
  <img src="/spon logo.png" alt="Logo 3" className="text-orange-500 text-4xl mx-auto mb-2" />
  <h2 className="text-3xl font-bold">30+</h2>
  <p className="text-gray-300">Years Of Experienced</p>
</div>
<div>
  <img src="/pizza logo.png" alt="Logo 4" className="text-orange-500 text-4xl mx-auto mb-2" />
  <h2 className="text-3xl font-bold">220</h2>
  <p className="text-gray-300">Happy Customers</p>
</div> */}


{/* <div style={{ backgroundImage: `url('`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
    <div>
      <img src="/cap logo.png" alt="Logo 1" className="text-orange-500 text-4xl mx-auto mb-2" />
      <h2 className="text-3xl font-bold">420</h2>
      <p className="text-gray-300">Professional Chefs</p>
    </div>
    <div>
      <img src="/burgerlogo.png" alt="Logo 2" className="text-orange-500 text-4xl mx-auto mb-2" />
      <h2 className="text-3xl font-bold">320</h2>
      <p className="text-gray-300">Items Of Food</p>
    </div>
    <div>
      <img src="/spon logo.png" alt="Logo 3" className="text-orange-500 text-4xl mx-auto mb-2" />
      <h2 className="text-3xl font-bold">30+</h2>
      <p className="text-gray-300">Years Of Experienced</p>
    </div>
    <div>
      <img src="/pizza logo.png" alt="Logo 4" className="text-orange-500 text-4xl mx-auto mb-2" />
      <h2 className="text-3xl font-bold">220</h2>
      <p className="text-gray-300">Happy Customers</p>
    </div>
  </div>
</div> */}




<img
  src="/Client & customers.png"
  alt="Client & customers"
  className="w-1923px468 top-2027 left-1"
/>


  </div>
</div>

{/* Dessert Menu Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
  {/* Image */}
  <div>
    <img
      src="/dessert.png"
      alt="Dessert Menu"
      className=" w-448 h-626 top-2617 left-300"
    />
  </div>

  {/* Menu */}
  <div>
    <h2 className="text-3xl font-bold mb-6 flex items-center">
      <span className="text-orange-500 mr-2">🍰</span> Dessert
    </h2>
    <ul className="space-y-4">
      {/* Menu Item 1 */}
      <li className="flex justify-between items-start">
        <div>
          <p className="font-semibold">Fig and lemon cake</p>
          <p className="text-gray-500 text-sm">
            Toasted French bread topped with romano, cheddar
          </p>
          <p className="text-xs text-gray-400 mt-1">560 CAL</p>
        </div>
        <p className="text-orange-500 font-semibold">32$</p>
      </li>
    \
      {/* Menu Item 2 */}
      <li className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-orange-500">
            Creamy mascarpone cake
          </p>
          <p className="text-gray-500 text-sm">
            Gorgonzola, ricotta, mozzarella, taleggio
          </p>
          <p className="text-xs text-gray-400 mt-1">700 CAL</p>
        </div>
        <p className="text-orange-500 font-semibold">43$</p>
      </li>
      {/* Menu Item 3 */}
      <li className="flex justify-between items-start">
        <div>
          <p className="font-semibold">
            Pastry, blueberries, lemon juice
          </p>
          <p className="text-gray-500 text-sm">
            Ground cumin, avocados, peeled and cubed
          </p>
          <p className="text-xs text-gray-400 mt-1">1000 CAL</p>
        </div>
        <p className="text-orange-500 font-semibold">14$</p>
      </li>
      {/* Menu Item 4 */}
      <li className="flex justify-between items-start">
        <div>
          <p className="font-semibold">Pain au chocolat</p>
          <p className="text-gray-500 text-sm">
            Spreadable cream cheese, crumbled blue cheese
          </p>
          <p className="text-xs text-gray-400 mt-1">580 CAL</p>
        </div>
        <p className="text-orange-500 font-semibold">35$</p>
      </li>
    </ul>
    <DrinksMenuPage />
  </div>
</div>
</div>

      </div>
    </div>
    
    
  );
};








export default MenuPage;
