import React from "react";

export default function Feed() {
  return (
    <section
      className="py-20 xl:bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
      }}
      id="how-we-work"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2
            className="max-w-xl mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
            data-wow-delay=".2s"
          >
            <span>How</span>
            <span className="text-lightBlue"> KBI </span>
            <span>Works</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown"
            data-wow-delay=".5s"
          >
            We start with a clear understanding, conduct strategic assessments,
            tailor custom solutions, and provide ongoing support.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="relative w-full lg:w-1/2 my-8 lg:my-0 flex">
            <div
              className="wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              <img
                className="jump relative mx-auto rounded-xl w-full z-10 -ml-16 pt-0 "
                src="/assets/imgs/placeholders/placeholder2.jpg"
                alt="KBI"
              />
              {/* <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="/assets/imgs/elements/blob-tear.svg" alt="KBI" /> */}
              {/* <img className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="/assets/imgs/elements/blob-tear.svg" alt="KBI" /> */}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full  flex flex-col gap-2 justify-center items-center"  style={{ paddingTop: "64px" }}>
              <div
                className="rapport w-full relative flex py-2"
                style={{ borderLeft: "2px solid #0d1729", padding: "10px" }}
              >
                <div
                  className="w-2/3 flex flex-col space-y-4 justify-start items-start pl-20 pb-6"
                  style={{ paddingLeft: "64px", paddingBottom: "40px" }}
                >
                  <h4 className="font-semibold font-heading text-xl">Rapport-building</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn p-10">
                    To expedite understanding, we kick off with a detailed
                    brief, ensuring clarity on specifications.
                  </p>
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full bg-white  hover:bg-blue-50 flex justify-center items-center border-3 border-red-200"
                  style={{
                    top: "0%",
                    left: "-23px",
                    border: "2px solid #c9d2e2",
                  }}
                >
                  <span
                    className="text-lg font-bold text-#0d1729 hover:bg-blue-50"
                    style={{ position: "absolute" }}
                  >
                    1
                  </span>
                </div>
              </div>
              <div
                className="w-full relative flex border-l border-#0d1729 py-2"
                style={{ borderLeft: "2px solid #0d1729" }}
              >
                <div
                  className="w-2/3 flex flex-col gap-3 justify-start items-start pl-12 pb-6"
                  style={{ paddingLeft: "64px", paddingBottom: "40px" }}
                >
                  <h4 className="font-semibold font-heading text-xl">Test-the-waters</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn p-10">
                    Assessing the current system provides insight for building
                    or integrating structures.
                  </p>
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full bg-white  hover:bg-blue-50 flex justify-center items-center border-3 border-red-200"
                  style={{
                    top: "0%",
                    left: "-23px",
                    border: "2px solid #c9d2e2",
                  }}
                >
                  <span
                    className="text-lg font-bold text-#0d1729 hover:bg-blue-50"
                    style={{ position: "absolute" }}
                  >
                    2
                  </span>
                </div>
              </div>
              <div
                className="w-full relative flex border-l border-#0d1729 py-2"
                style={{ borderLeft: "2px solid #0d1729" }}
              >
                <div
                  className="w-2/3 flex flex-col gap-3 justify-start items-start pl-12 pb-6"
                  style={{ paddingLeft: "64px", paddingBottom: "40px" }}
                >
                  <h4 className="font-semibold font-heading text-xl">Lift-off</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn p-10">
                    Customization, design, and deployment are executed here with
                    dedicated resources.
                  </p>
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full bg-white  hover:bg-blue-50 flex justify-center items-center border-3 border-red-200"
                  style={{
                    top: "0%",
                    left: "-23px",
                    border: "2px solid #c9d2e2",
                  }}
                >
                  <span
                    className="text-lg font-bold text-#0d1729 hover:bg-blue-50"
                    style={{ position: "absolute" }}
                  >
                  3
                  </span>
                </div>
              </div>
              <div className="w-full relative flex">
                <div
                  className="w-2/3 flex flex-col gap-3 justify-start items-start pl-12 pb-6"
                  style={{ paddingLeft: "64px", paddingBottom: "40px" }}
                >
                  <h4 className="font-semibold font-heading text-xl">Steady and Set</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn p-10">
                    Post-agreement, we ensure stability through staff training,
                    platform maintenance, and ongoing support.
                  </p>
                </div>
                <div
                  className="absolute w-12 h-12 rounded-full bg-white  hover:bg-blue-50 flex justify-center items-center border-3 border-red-200"
                  style={{
                    top: "0%",
                    left: "-23px",
                    border: "2px solid #c9d2e2",
                  }}
                >
                  <span
                    className="text-lg font-bold text-#0d1729 hover:bg-blue-50"
                    style={{ position: "absolute" }}
                  >
                    4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
