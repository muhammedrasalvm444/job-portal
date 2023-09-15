import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Numbers = () => {
  const data = [
    {
      name: "Aspirants",
      count: 1052,
    },
    {
      name: "Companies",
      count: 47,
    },
    {
      name: "Locations",
      count: 16,
    },
    {
      name: "Clients",
      count: 16,
    },
  ];
  return (
    <div>
      <h1 className="mt-6 mb-10 text-4xl font-semibold text-center text-primary">
        Our statistics
      </h1>
      <h2 className="mb-5 text-2xl font-medium">
        Until today we have provided our service too...
      </h2>
      {/* <div className="flex flex-row justify-between w-full p-5 bg-white border-2 border-black rounded text-secondery hover:bg-primary sm:flex-col md:gap-4">
        {data?.map((item) => {
          return (
            <div className="flex flex-col">
              <h1 className=" text-7xl text-secondery">
                <CountUp start={0} end={item?.count}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <div>
                        <span ref={countUpRef} className="gap-5 sm:text-3xl " />
                      </div>
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <h1 className="text-2xl md:text-xl">{item?.name}</h1>
            </div>
          );
        })}
      </div> */}
      <div className="grid items-center grid-cols-4 gap-20 p-4 bg-white border-2 border-black rounded md:grid-cols-2 lg:grid-cols-4 text-secondary hover:bg-primary">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-col items-center ">
            <h1 className="font-semibold text-9xl text-secondery sm:text-7xl text-secondary">
              <CountUp start={0} end={item?.count}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <div>
                      <span ref={countUpRef} className="text-7xl sm:text-5xl" />
                    </div>
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h1 className="text-2xl md:text-xl">{item?.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
