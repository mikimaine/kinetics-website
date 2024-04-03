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
                                </li>
                        </ul>
                    </div>
                </section>
                <section className="pt-20 pb-24 bg-blueGray-50" id="how-we-work">
                    <div className="container">
                        <div className="flex flex-wrap -mx-3 -mb-6 text-left">
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/Loyalty.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Loyalty Rewards App</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">The Loyalty Rewards app boasts a highly adaptable points and rewards management system, nurturing robust customer relationships through redeemable points for exclusive discounts or rewards, thereby amplifying customer loyalty and fostering greater engagement.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6" id='ecommerce'>
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
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6" id='booking'>
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/booking.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Booking Engine</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">
                                        The Hotel Reservation System optimizes resource management to boost revenue effortlessly. It streamlines bookings, integrates payment gateways, and generates insightful reports for marketing and financial analysis, enhancing operational efficiency and guest satisfaction.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s" id='hrManagement'>
                                <div className="p-12 bg-white shadow rounded">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/hr.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">HR Management System</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">
                                        The HR management system integrates HR practices with digital tools, enhancing efficiency in monitoring tasks and project assignments. It streamlines workflows, centralizes employee data, and tracks activities to optimize resource allocation and decision-making processes.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6" id='Complaint'>
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    {/* <div className="flex w-24 h-24 text-2xl items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div> */}
                                    <img className="h-36 my-4" src="/assets/imgs/illustrations/Complaint.png" alt="KBI" />
                                    <h3 className="mb-2 font-bold font-heading text-xl py-6">Digital Request and Complaint System</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">The Digital Request and Complaint System enables refugees and asylum seekers to submit requests and complaints electronically to UNHCR staff. It ensures effective service delivery and promotes real-time learning by addressing gaps and challenges.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6" id='data'>
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