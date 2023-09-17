import React from "react";
import ContactImage from "../Assets/img.png";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center -mt-5 sm:flex-col">
        <img src={ContactImage} alt="image" className="-mt-2"></img>
      </div>
      <h1 className="mb-10 text-3xl font-semibold text-primary">
        Get in touch
      </h1>

      <div className="flex w-full h-auto p-4 pt-10 pl-0 bg-white border-2 rounded md:flex-col border-primary">
        <div className="flex flex-col w-1/2 gap-5 p-5">
          <div className="flex items-center gap-3">
            <i class="ri-map-pin-line text-2xl text-secondery bg-orange-200 p-2 rounded"></i>

            <div>
              <h1 className="text-xl font-semibold">Visit Us</h1>
              <h1>Hydrabad,Amberpet,India</h1>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <i class="ri-mail-line text-2xl text-blue-300 bg-orange-200 p-2 rounded"></i>
            <div className="w-30">
              <h1 className="text-xl font-semibold">Mail Us</h1>
              <h1 className="sm:text-md">mhdrasalvm00@gmail.com</h1>
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            <i class="ri-smartphone-line text-2xl text-green-500 bg-orange-200 p-2 rounded"></i>
            <div>
              <h1 className="text-xl font-semibold">Call Us</h1>
              <h1>9539462746</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-8 p-5 md:w-full">
          <input
            name="name"
            placeholder="Name"
            className="p-3 bg-blue-100 border-none rounded outline-none h-14"
          ></input>
          <input
            name="email"
            placeholder="Email"
            className="p-3 text-green-900 bg-blue-100 border-none rounded outline-none h-14 selection:outline-none"
          ></input>
          <input
            name="phone"
            placeholder="Phone"
            className="p-3 text-black bg-blue-100 border-none rounded outline-none h-14"
          ></input>
          <div className="flex justify-end">
            <button className="w-24 text-white rounded cursor-pointer h-14 bg-secondery">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
