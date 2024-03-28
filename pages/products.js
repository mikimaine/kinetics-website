import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup"

const Products = () => {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = () => {
        const elements = document.getElementsByClassName("counterUp");
        if (elements.length > 0) {
            const element = elements[0];
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport && !inViewport) {
                setInViewport(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <Layout>
                <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                    <div className="container">
                        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Our Products</h1>
                        <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-brightRed text-gray-800">
                                    Home
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-brightRed text-gray-800">
                                    Our Products
                                </a>
                                {/* <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg> */}
                            </li>
                            {/* <li className="inline-flex items-center text-gray-400">
                                <span>Web Development</span>
                            </li> */}
                        </ul>
                    </div>
                </section>
                {/* <section className="pt-12">
                    <div className="container py-12 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <img className="sm:max-w-sm lg:max-w-full mx-auto" src="/assets/imgs/placeholders/img-6.jpg" alt="KBI" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                                <div className="max-w-md-2">
                                    <div className="mb-4">
                                        <span className="text-xs py-1 px-3 text-brightRed font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Why choose us
                                        </span>
                                        <h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            We Provide Best <br />
                                            <span className="text-brightRed">Web design </span>services
                                        </h2>
                                    </div>

                                    <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>

                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                            <div className="w-8 mb-5 text-brightRed">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-brightRed text-white rounded">1</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Web design UX/UI</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="w-8 mb-5 text-brightRed">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-brightRed text-white rounded">2</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">React Develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="w-8 mb-5 text-brightRed">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-brightRed text-white rounded">3</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Ecommerce Build</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            <div className="w-8 mb-5 text-brightRed">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-brightRed text-white rounded">4</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">CMS develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="pb-4">
                    <div className="container">
                        <div className="flex flex-wrap justify-between pt-8 pb-16 px-3">
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-brightRed rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                    {inViewport && <CounterUp end={100} duration={10} />}
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Technical Experts</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-brightRed rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                    {inViewport && <CounterUp end={240} duration={10} />}
                                    </span>
                                    <span className="sm:text-2xl font-bold font-heading">  </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-brightRed rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">
                                    {inViewport && <CounterUp end={500} duration={10} />}
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".8s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-brightRed rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count counterUp">
                                    {inViewport && <CounterUp end={320} duration={10} />}
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="pt-20 pb-24 bg-blueGray-50" id="how-we-work">
                    <div className="container">
                        {/* <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                    <span>We are </span>
                                    <span className="text-brightRed">awesome team </span>
                                    <br />
                                    <span>for your business dream</span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
                            </div>
                        </div> */}
                        <div className="flex flex-wrap -mx-3 -mb-6 text-left">
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/Loyalty.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Loyalty Rewards App</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">The Loyalty Rewards app boasts a highly adaptable points and rewards management system, nurturing robust customer relationships through redeemable points for exclusive discounts or rewards, thereby amplifying customer loyalty and fostering greater engagement.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/ecommerce.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">E-Commerce Platform</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">The E-commerce system facilitates business opportunities through a centralized platform, enabling users to add products with descriptions and prices. It supports third-party payment gateways and customizable delivery options, with advanced backend features.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="p-12 bg-white shadow rounded">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/Recruitment.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Recruitment & Attendance Management</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">An online platform for HR officers to post vacancy announcements, filter candidates, and automate recruitment processes. Integrates biometric attendance for real-time monitoring and generates reliable HR reports, optimizing time and resources.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/booking.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Booking Engine</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">
                                        The Hotel Reservation System optimizes resource management to boost revenue effortlessly. It streamlines bookings, integrates payment gateways, and generates insightful reports for marketing and financial analysis, enhancing operational efficiency and guest satisfaction.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="p-12 bg-white shadow rounded">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/hr.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">HR Management System</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">
                                        The HR management system integrates HR practices with digital tools, enhancing efficiency in monitoring tasks and project assignments. It streamlines workflows, centralizes employee data, and tracks activities to optimize resource allocation and decision-making processes.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/Complaint.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Digital Request and Complaint System</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">The Digital Request and Complaint System enables refugees and asylum seekers to submit requests and complaints electronically to UNHCR staff. It ensures effective service delivery and promotes real-time learning by addressing gaps and challenges.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/processing.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Data processing and Visualization</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">The data system aggregates UNHCR data for visualization, analysis, and reporting, aiding various levels from camps to HQ. It focuses on healthcare, water, sanitation, nutrition, and food security. The user-friendly system ensures compliance with data protection policies and enables controlled data sharing with partners.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};
export default Products;