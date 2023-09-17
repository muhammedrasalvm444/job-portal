import React, { useState } from "react";
import SpecializationImage from "../Assets/spec.jpg";

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
      title: "Medical",
      img: "./images/medical.jpg",
      description:
        "Medical can describe the practice of medicine, or a type of illness or injury. If bright red spots have erupted all over your arms, you probably have some sort of medical condition, and it would be wise for you to visit a doctor",
    },
    {
      title: "Manufacturing",
      img: "./images/manufacturing.jpg",
      description:
        "Manufacturing is the process of transforming raw materials into finished goods through the use of tools, machines, and labor",
    },
    {
      title: "Ecommerce",
      img: "./images/ecommerce.jpg",
      description:
        "Ecommerce is a method of buying and selling goods and services online",
    },
  ];
  console.log("data", data);
  return (
    <div className="my-10">
      <h1 className="mb-6 text-4xl font-semibold text-center text-primary">
        Specialization
      </h1>
      <div className="flex items-center justify-center mb-10 lg:flex-col">
        <img
          src={SpecializationImage}
          className="h-[400px] lg:h-[300px] "
        ></img>
        <p className="mb-10 text-xl text-justify text-gray-700">
          Specialization is when a nation focuses its labor, resources, and
          capital on the production of a good or service that they are experts
          in. Trade is when nations create a relationship that promotes the
          exchange of goods and services. The bottom line: a combination of
          economies of scale, network effects and unrivaled specialization has
          made TSMC irreplaceable—and has made the entire world deeply,
          precariously dependent on it.
        </p>
      </div>
      <hr className=""></hr>

      <div className="grid items-start grid-cols-4 gap-5 px-30 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 ">
        {data?.map((item, index) => (
          <div
            onMouseEnter={() => setHoverEffect(index)}
            onMouseLeave={() => {
              setHoverEffect(null);
            }}
            className="flex flex-col items-center justify-center gap-5 mb-10 border-2 rounded l border-secondery"
          >
            <div className="-mt-10 bg-white border-2 rounded-full border-primary">
              <img
                className="w-40 h-40 rounded-full md:h-20 md:w-20 sm:w-40 sm:h-40"
                src={item?.img}
                alt="Image"
              />
            </div>
            <h1 className="text-2xl font-semibold text-primary md:text-xl">
              {item?.title}
            </h1>
            <p
              className={`h-0 overflow-hidden text-justify  transition-all  duration-500${
                index === hoverEffect && " text-white h-auto p-5 bg-primary"
              }`}
            >
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
