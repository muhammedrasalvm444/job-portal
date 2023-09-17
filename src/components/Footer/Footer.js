import React from "react";

const Footer = () => {
  return (
    <div className="-mt-5">
      <div className="flex flex-col items-center justify-center gap-2 text-white h-36 bg-primary gap-1o">
        <h1>Muhammed rasal vm</h1>
        <h1>developed by Muhammed rasal vm</h1>
        <div className="grid grid-flow-row grid-cols-4 gap-10 mt-5">
          {/* <i class="ri-map-pin-line text-2xl text-secondery bg-orange-200 p-2 rounded"></i>
          <i class="ri-mail-line text-2xl text-secondery bg-orange-200 p-2 rounded"></i>
          <i class="ri-map-pin-line text-2xl text-secondery bg-orange-200 p-2 rounded"></i> */}
          <i class="ri-facebook-box-fill text-5xl md:text-4xl"></i>
          <i class="ri-whatsapp-fill text-5xl md:text-4xl"></i>
          <i class="ri-github-fill text-5xl md:text-4xl"></i>
          <i class="ri-instagram-fill text-5xl md:text-4xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
