import React from "react";

function Home() {
  return (
    <div className="min-h-[300vh] flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Scroll down to see the navbar disappear, and scroll up to make it
        reappear.
      </p>

      {/* Add Multiple Sections for Long Scrolling */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="w-3/4 bg-white shadow-md rounded-lg p-8 mb-10"
        >
          <h2 className="text-2xl font-semibold text-gray-700">
            Section {index + 1}
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            suscipit libero, et interdum eros convallis ut. Nullam fermentum
            ante id ligula fermentum, a posuere risus laoreet.
          </p>
        </div>
      ))}

      <h2 className="text-3xl font-bold text-gray-800 mt-12">
        End of the Page
      </h2>
    </div>
  );
}

export default Home;
