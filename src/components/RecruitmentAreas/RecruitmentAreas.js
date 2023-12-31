import React, { useState } from "react";
import RecruitmentImage from "../Assets/44.png";

const Specialization = () => {
  const [hoverEffect, setHoverEffect] = useState(null);
  const data = [
    {
      title: "Remote",
      img: " ./images/remote.jpg",
      description:
        "Remote jobs can be employee-based jobs or freelance jobs, depending on how the employer sets up the role. ",
    },

    {
      title: "Contract based",
      // img: "./images/manufacturing.jpg",
      img: "./images/contract.jpg",

      description:
        "A contract position is where a worker is hired to complete a specific job over a predetermined period and for a set amount of money",
    },
    {
      title: "Permanent",
      // img: "./images/ecommerce.jpg",
      img: "./images/permenant.jpg",

      description:
        "Permanent employment is an employment relationship where an individual works for an employer and receives payment directly from them",
    },
  ];
  console.log("data", data);

  return (
    <div className="my-5">
      <h1 className="mt-0 mb-10 text-4xl font-semibold text-center text-primary">
        Recruitment Areas
      </h1>
      <div className="flex flex-col items-center justify-center mb-10 lg:flex-col">
        <p className="mb-5 text-xl text-justify text-gray-700">
          Recruitment area means that geographic locality within which a Head
          Start program seeks to enroll Head Start children and families. The
          recruitment area can be the same as the service area or it can be a
          smaller area within the service area
        </p>

        <img src={RecruitmentImage} className="h-[400px] lg:h-[300px]"></img>
      </div>

      <div className="grid items-start grid-cols-3 gap-20 pb-2 mt-10 sm:gap-2 sm:grid-cols-1 md:grid-cols-1 md:gap-5">
        {data?.map((item, index) => (
          <>
            <div className="flex flex-col ">
              <div
                style={{
                  height: "34.375rem",
                  "@media (width: 768px)": {
                    height: "20rem",
                    display: "grid",

                    // Adjust this value for smaller screens
                  },
                  "@media (max-width: 1024px)": {
                    height: "28rem",
                    // Adjust this value for medium-sized screens
                  },
                }}
                className="flex flex-col w-full py-4 mt-10 rounded-lg shadow-xl cursor-pointer md:w-92 md:gap-3 bg-primary"
              >
                <div className="px-3 shadow-md md:p-0 opacity-80 hover:opacity-70">
                  <img
                    className=" !rounded-lg  h-80 w-full md:py-2 md:px-2 lg:h-70 "
                    src={item?.img}
                    alt="Image"
                  />
                </div>
                <h1 className="items-center pt-4 pl-4 text-3xl font-semibold text-white">
                  {item?.title}
                </h1>
                <div className="w-full h-20 px-4 pb-3 py-9 md:py-4">
                  <p className="text-justify text-white">{item?.description}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
