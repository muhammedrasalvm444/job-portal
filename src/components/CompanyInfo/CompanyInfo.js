import React from "react";

function CompanyInfo() {
  return (
    <div className="flex flex-col gap-2 mt-20 md:mt-0 ">
      <h1 className="text-4xl font-semibold text-center text-primary">
        Who we are?
      </h1>
      <div className="flex justify-center">
        <img
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202010/jobs_660_130920052343_291020052310.jpg"
          className="mt-10"
          alt=""
        />
      </div>
      <p className="mt-10 text-lg text-gray-600 sm:mx-2">
        sheyhiring.com is an Indian employment website operating in India and
        Middle East. It was founded in March 1997 by Indian businessman Sanjeev
        Bikhchandani. shehiring.com is the largest employment website in India.
      </p>
      <div className="flex flex-col items-center justify-center gap-5 p-2 text-center rounded bg-primary text-secondery mt-11 hover:text-primary hover:bg-secondery">
        <h1 className="italic font-semibold text-7xl md:text-4xl">
          "" If opertunity doesn't knock,
        </h1>
        <h1 className="italic font-semibold text-7xl md:text-4xl ">
          build a door ""
        </h1>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold text-center text-primary">
          What we do?
        </h1>

        <p className="m-auto mx-auto mt-10 text-lg text-gray-600 sm:mx-4">
          sheyhiring.com is an Indian employment website operating in India and
          Middle East. It was founded in March 1997 by Indian businessman
          Sanjeev Bikhchandani. shehiring.com is the largest employment website
          in India.
        </p>
        <div className="relative ">
          <img src="./office.jpg" className="mt-10" alt="" />
          <div className="absolute inset-0 flex items-center justify-start bg-black opacity-70 hover:opacity-60">
            <h1 className="font-semibold text-center text-white text-7xl sm:text-xl md:text-3xl ">
              Easy and fast way you to find your dream job
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
