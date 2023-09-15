import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-5 pt-5 shadow-md ">
      <div className="flex gap-1">
        <h1 className="text-4xl font-semibold border-t-2 border-t-secondery text-primary">
          S
        </h1>
        <h1 className="text-4xl font-semibold border-b-2 border-t-primary text-secondery">
          H
        </h1>
      </div>
      <div className="items-center px-4 py-3 text-4xl text-center rounded-md cursor-pointer bg-secondery ">
        <h1 className="text-2xl text-white hover:scale-110 ">Login</h1>
      </div>
    </div>
  );
};

export default Header;
