import React, { useState } from "react";
import RecruitmentImage from "../Assets/44.png";

const Specialization = () => {
  const [hoverEffect, setHoverEffect] = useState(null);
  const data = [
    {
      title: "It/Software",
      img: "./images/it.jpg",
      description:
        "We have a team of dedicated IT proffesionals who expert in It and software development",
    },

    {
      title: "Manufacturing",
      // img: "./images/manufacturing.jpg",
      img: "./images/it.jpg",

      description:
        "Manufacturing is the process of transforming raw materials into finished goods .",
    },
    {
      title: "Ecommerce",
      // img: "./images/ecommerce.jpg",
      img: "./images/it.jpg",

      description:
        "Ecommerce is a method of buying and selling goods and services online",
    },
  ];
  console.log("data", data);

  return (
    <div className="my-15">
      <h1 className="mt-0 mb-5 text-4xl font-semibold text-center text-primary">
        Recruitment Areas
      </h1>
      <div className="flex flex-col items-center justify-center mb-10 lg:flex-col">
        <p className="mb-5 text-xl text-gray-700">
          Specialization is when a nation focuses its labor, resources, and
          capital on the production of a good or service that they are experts
          in. Trade is when nations create a relationship that promotes the
          exchange of goods and services. The bottom line: a combination of
          economies of scale, network effects and unrivaled specialization has
          made TSMC irreplaceable—and has made the entire world deeply,
          precariously dependent on it.
        </p>
        <p className="mb-4 text-xl text-gray-700">
          Specialization is when a nation focuses its labor, resources, and
          capital on the production of a good or service that they are experts
          in. Trade is when nations create a relationship that promotes the
          exchange of goods and services. The bottom line: a combination of
          economies of scale, network effects and unrivaled specialization has
          made TSMC irreplaceable—and has made the entire world deeply,
          precariously dependent on it.
        </p>
        <img src={RecruitmentImage} className="h-[400px] lg:h-[300px]"></img>
      </div>

      <div className="grid items-start grid-cols-3 gap-20 pb-2 mt-10 sm:grid-cols-1 md:grid-cols-2">
        {data?.map((item, index) => (
          <>
            {/* <div
              onMouseEnter={() => setHoverEffect(index)}
              onMouseLeave={() => {
                setHoverEffect(null);
              }}
              className="flex flex-col items-center justify-center gap-5 border-2 rounded border-secondery"
            >
              <div className="-mt-10 bg-white border-2 rounded-full border-primary">
                <img
                  className="w-40 h-40 rounded-full"
                  src={item?.img}
                  alt="Image"
                />
              </div>
              <h1 className="text-2xl font-semibold text-primary">
                {item?.title}
              </h1>
              <p
                className={`h-0 overflow-hidden  transition-all  duration-500${
                  index === hoverEffect && " text-white h-32 p-5 bg-primary"
                }`}
              >
                {item?.description}
              </p>
            </div> */}

            <div className="flex flex-col ">
              <div
                style={{ height: "500px" }}
                className="flex flex-col items-center justify-center w-auto rounded-lg shadow-xl md:w-92 md:gap-3 bg-primary"
              >
                <div className="p-3 md:p-0">
                  <img
                    className=" !rounded-lg  h-80 w-full md:py-5 md:px-2"
                    src={item?.img}
                    alt="Image"
                  />
                </div>
                <h1 className="text-2xl font-semibold text-white">
                  {item?.title}
                </h1>
                <div className="w-full h-20 p-3">
                  <p className="text-white ">{item?.description}</p>
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
