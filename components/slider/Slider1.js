import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const Slider1 = () => {
    return (
        <>
            <Swiper
                breakpoints={{
                    // when window width is >= 768px
                    768: {
                    width: 768,
                    slidesPerView: 2,
                    },
                }}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next"
                }}
            >
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/3.png" alt="KBI" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-lightBlue">
                                        <Link href="/products" legacyBehavior>
                                            <a>Data processing and Visualization</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">Harvard university</p> */}
                                </div>
                                <div>
                                    <Link href="/products" legacyBehavior>
                                        <a className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs text-lightBlue font-semibold leading-none border border-blue-200 hover:border-lightBlue hover:text-white hover:bg-lightBlue rounded">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/AI1.jpg" alt="KBI" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-lightBlue">
                                        <Link href="/products" legacyBehavior>
                                            <a>Big Data Consulting</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">Cocacola., Co</p> */}
                                </div>
                                <div>
                                    <Link href="/products" legacyBehavior>
                                        <a className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs text-lightBlue font-semibold leading-none border border-blue-200 hover:border-lightBlue hover:text-white hover:bg-lightBlue rounded">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/img-4.jpg" alt="KBI" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-lightBlue">
                                        <Link href="/products" legacyBehavior>
                                            <a>Predictive Data Analytics</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">Oxford university</p> */}
                                </div>
                                <div>
                                    <Link href="/products" legacyBehavior>
                                        <a className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs text-lightBlue font-semibold leading-none border border-blue-200 hover:border-lightBlue hover:text-white hover:bg-lightBlue rounded">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/Data processing and Visualization.jpg" alt="KBI" />
                            <div className="flex justify-between items-end">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-lightBlue">
                                        <Link href="/products" legacyBehavior>
                                            <a>Business Intelligence</a>
                                        </Link>
                                    </h1>
                                    {/* <p className="mt-2 text-xs text-gray-500">Alibaba Co</p> */}
                                </div>
                                <div>
                                    <Link href="/products" legacyBehavior>
                                        <a className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs text-lightBlue font-semibold leading-none border border-blue-200 hover:border-lightBlue hover:text-white hover:bg-lightBlue rounded">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div id="carausel-2-columns-1-arrows" className="flex">
                <span className="mr-4 text-lightBlue flex slick-arrow custom_prev">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                    </svg>
                </span>
                <span className="text-lightBlue flex slick-arrow custom_next">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </span>
            </div>
        </>
    );
};

export default Slider1;
