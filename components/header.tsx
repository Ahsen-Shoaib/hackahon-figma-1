// import React from "react";

// const Error404 = () => {
//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/radish-bg.jpg')", // Replace with the actual image path
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Center Content */}
//       <div className="relative flex flex-col items-center justify-center h-full text-white">
//         <h1 className="text-6xl font-bold mb-4">404 Error</h1>
//         <p className="text-lg font-light">
//           <a href="/" className="text-gray-300 hover:text-orange-500 transition">
//             Home
//           </a>{" "}
//           <span className="text-orange-500">&gt;</span> 404
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Error404;



import React from "react";

const Error404 = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/header.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">404 Error</h1>
        <p className="text-lg mt-4">
          <a href="/" className="text-gray-300 hover:text-orange-500">
            Home
          </a>{" "}
          <span className="text-orange-500">&gt;</span> <span>404</span>
        </p>
      </div>
    </div>
  );
};

export default Error404;
