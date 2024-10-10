import { useEffect, useState } from 'react';
import Layout from "../components/layout/Layout";
import Link from "next/link";
import CounterUp from "../components/elements/Counterup";

const About = () => {
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
                        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">About Us</h1>
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
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="py-20 bg-blueGray-50" id="how-we-work">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-8 px-5">
                            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
                                    <span>WHO </span>
                                    <span className="text-brightRed">WE </span>
                                    <span>ARE</span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-2/3 py-8">
                                <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">Kinetic Business Intelligence (KBI) is a suite of advanced analytics solutions that leverage predictive analytics, real-time monitoring, and AI integration to enhance decision-making processes across industries. It enables organizations to make informed strategic decisions, optimize operations, and adapt to evolving market conditions through data-driven insights.</p>
                            </div>
                        </div>
                    </div>
                    <section className="py-6 bg-blueGray-50" id="how-we-work">
                        <div className="container">
                            <div className="flex flex-wrap -mx-3 -mb-6 text-left">
                                <div className="w-full md:w-1/2 lg:w-1/2 px-5">
                                    <div className="w-full mb-8">
                                        <div className="p-6 bg-white shadow rounded">
                                            <h3 className="mb-2 font-bold font-heading text-xl">Our Mission</h3>
                                            <p className="text-sm text-blueGray-400 leading-relaxed">Unlock business potential with data driven insights and innovative solutions for informed decisions.</p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-8">
                                        <div className="p-6 bg-white shadow rounded">
                                            <h3 className="mb-2 font-bold font-heading text-xl">Our Vision</h3>
                                            <p className="text-sm text-blueGray-400 leading-relaxed">To be the leading provider of business intelligence solutions that empower businesses to make informed, data-driven decisions that drive growth and improve customer satisfaction.</p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-8 pb-8">
                                        <div className="p-6 bg-white shadow rounded">
                                            <h3 className="mb-2 font-bold font-heading text-xl">Our Value</h3>
                                            <p className="text-sm text-blueGray-400 leading-relaxed">Unwavering reliability and innovative data solutions for businesses, empowering them with actionable insights for long-term success.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/2 px-5 mb-6 mt-1">
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img className="rounded" src="/assets/imgs/placeholders/kbi-about.png" alt="KBI" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-10 bg-no-repeat bg-center" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                        <div className="lg:hidden px-8 pb-10">
                            <div className="flex items-center justify-center">
                                <h2 className='text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown'>
                                    Kinetic Business Intelligence
                                </h2>
                            </div>
                        </div>
                        <div className="container flex md:flex-row">
                            <div className="lg:flex hidden flex-wrap items-center justify-between">
                                <h2 className='text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown'>Kinetic Business <br />Intelligence</h2>
                            </div>
                            <div className="flex-1 flex flex-wrap pl-5 max-w-xs">
                                <div className="w-full md:w-1/2 mb-10 px-3 ">
                                    <div className="h-full py-8 px-2 border-t-0 border-l-0 border border-brightRed rounded-lg hover:border-t hover:border-l">
                                        <h3 className="text-lg font-bold mb-6">Dynamic Data Analysis</h3>
                                        <p className="text-sm text-blueGray-400 leading-relaxed">
                                            Our platform utilizes advanced analytics to interpret user data and behaviors, enabling personalized insights and real-time decision-making. Experience dynamic content recommendations tailored to individual preferences.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 mb-10 px-3">
                                    <div className="h-full py-8 px-2 border border-brightRed border-t-0 border-l-0 rounded-lg">
                                        <h3 className="text-l font-bold text-md mb-6">24/7 Analytical Support</h3>
                                        <p className="text-sm text-blueGray-400 leading-relaxed">
                                            Access our expert analytical team round-the-clock for insights, troubleshooting, and strategic guidance. Our team is dedicated to providing timely solutions and actionable intelligence.<br /><br /></p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 mb-10 px-3">
                                    <div className="h-full py-8 px-2 border border-brightRed border-t-0 border-l-0 rounded-lg">
                                        <h3 className="text-l font-bold text-md mb-6">Cross-Platform Intelligence</h3>
                                        <p className="text-sm text-blueGray-400 leading-relaxed">
                                            Our solutions are designed for seamless integration across various systems and devices. Experience optimized data accessibility and visualization, ensuring actionable insights across all platforms.</p>
                                    </div>
                                </div>



                                <div className="w-full md:w-1/2 mb-10 px-3">
                                    <div className="h-full py-8 px-2 border border-brightRed border-t-0 border-l-0 rounded-lg">
                                        <h3 className="text-l font-bold text-md mb-6">Robust Security Measures</h3>
                                        <p className="text-sm text-blueGray-400 leading-relaxed">We employ state-of-the-art security protocols to safeguard sensitive business data and transactions. Rest assured, your information is protected with the highest standards of encryption and authentication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </Layout>
        </>
    );
};
export default About;
