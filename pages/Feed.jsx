import React from "react";

export default function Feed() {
  return (
    <section className="pt-20 pb-32 xl:bg-contain bg-top bg-no-repeat bg-blueGray-100" id="how-we-work">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center">
            <h2 className="max-w-xl mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated" data-wow-delay=".2s">
              <span className="inline-block mr-4">How</span>
              <span className="mr-4">
                <img className="w-8 inline-block" src="/assets/imgs/logos/kbi.png" alt="KBI" style={{marginTop:"-5px"}}/>
              </span>
              <span className="inline-block">Works</span>
            </h2>
          </div>
          <p className="max-w-xl mx-auto text-lg text-blueGray-400 wow animate__animatedDown" data-wow-delay=".5s">
            We start with a clear understanding, conduct strategic assessments, tailor custom solutions, and provide ongoing support.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="relative w-full lg:w-1/2 my-8 lg:my-0 flex">
            <div className="wow animate__animated" data-wow-delay=".5s">
              <img className="jump relative mx-auto rounded-xl w-full z-10 pt-0 " src="/assets/imgs/placeholders/1.jpg" alt="KBI" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-12">
            <div className="w-full  flex flex-col gap-2 justify-center items-center">
              <div className="w-full relative flex py-2" style={{ marginTop: "10px" }}>
                <div className="w-2/3 flex flex-col justify-start items-start pl-5 border-dashed border-l-2 border-brightRed">
                  <h4 className="font-semibold font-heading text-xl">Rapport-building</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated p-10">
                    To expedite understanding, we kick off with a detailed brief, ensuring clarity on specifications.
                  </p>
                </div>
              </div>
              <div className="w-full relative flex py-2" style={{ marginTop: "40px" }}>
                <div className="w-2/3 flex flex-col justify-start items-start pl-5 border-l-2 border-brightRed">
                  <h4 className="font-semibold font-heading text-xl">Test-the-waters</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated p-10">
                    Getting a feel of where the business’s current system stands allow us to know what existing structure we would be building on and/or from within.
                  </p>
                </div>
              </div>
              <div className="w-full relative flex py-2" style={{ marginTop: "40px" }}>
                <div className="w-2/3 flex flex-col justify-start items-start pl-5 border-l-2 border-brightRed">
                  <h4 className="font-semibold font-heading text-xl">Lift-off</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated p-10">
                    Customization, design, and deployment are executed here with dedicated resources.
                  </p>
                </div>
              </div>
              <div className="w-full relative flex" style={{ marginTop: "40px" }}>
                <div className="w-2/3 flex flex-col justify-start items-start pl-5 border-l-2 border-brightRed">
                  <h4 className="font-semibold font-heading text-xl">Steady and Set</h4>
                  <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated p-10">
                    Dependent on the agreement, it involves training administrative staff, maintaining the platform, and providing necessary support to ensure consistent operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
