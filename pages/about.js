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
                                    <span>Who </span>
                                    <span className="text-lightBlue">we </span>
                                    <span>are</span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-2/3 py-8">
                                <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">Kinetic BI, co-founded by Mikiyas Amdu and Sosena Terefe in the US, is a technology-solutions company dedicated to revolutionizing clients’ businesses through data. As your one-stop partner, we offer comprehensive support services with unwavering commitment to quality and reliability. Our focus lies in driving intelligence to the forefront of operations, strengthening systems to simplify data gathering, interpretation, and accessibility, thereby ensuring business growth for our clients.</p>
                            </div>
                        </div>
                    </div>
                    <section className="py-6 bg-blueGray-50" id="how-we-work">
                        <div className="container">
                            <div className="flex flex-wrap -mx-3 -mb-6 text-left">
                                <div className="w-full md:w-1/2 lg:w-1/2 px-5 mb-6">
                                    <div className="hover-up-5 w-full">
                                        <div className="p-12 bg-white shadow rounded">
                                            <h3 className="mb-2 font-bold font-heading text-xl">Our Mission</h3>
                                            <p className="text-sm text-blueGray-400 leading-relaxed">We are concerned with leading an information revolution where analysis and reporting are the tactical tools at the forefront of providing business insight. In doing so, we are striving to make operations and growth smoother and more efficient for businesses, with an educational element to it as well.</p>
                                        </div>
                                    </div>
                                    <div className="hover-up-5 w-full mt-6">
                                        <div className="p-12 bg-white shadow rounded">
                                            <h3 className="mb-2 font-bold font-heading text-xl">Our Vision</h3>
                                            <p className="text-sm text-blueGray-400 leading-relaxed">To form a solid foundation and become a reputable AI-driven analytics platform through quality and dependable ‘intelligence’ with our products that preach an interconnected future that is data-driven.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/2 px-5 mb-6 mt-1">
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img className="rounded" src="/assets/imgs/placeholders/data (1).jpg" alt="KBI" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-20">
                        <div className="container">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <dl className="mt-4 w-full sm:w-1/2 lg:w-1/3 px-4">
                                    <div>
                                        <dt className="font-semibold text-gray-900">Precision</dt>
                                        <dd className="mt-1 text-sm text-blueGray-400 leading-relaxed">Without providing the best data and analysis, our existence would be null and void. That is why we look to provide services worked out to the smallest detail.</dd>
                                    </div>
                                </dl>
                                <dl className="mt-4 w-full sm:w-1/2 lg:w-1/3 px-4">
                                    <div>
                                        <dt className="font-semibold text-gray-900">Intelligence</dt>
                                        <dd className="mt-1 text-sm text-blueGray-400 leading-relaxed">Movement is intertwined within an entity providing cutting-edge technology. Through that, innovation-driven intelligence is a leading concern.</dd>
                                    </div>
                                </dl>
                                <dl className="mt-4 w-full sm:w-1/2 lg:w-1/3 px-4">
                                    <div>
                                        <dt className="font-semibold text-gray-900">Customer Satisfaction</dt>
                                        <dd className="mt-1 text-sm text-blueGray-400 leading-relaxed">Even when we provide solutions, as we do, our end-product is judged by how well we have listened to and solved the needs of our customers.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <section className="py-20" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                        <div className="container flex md:flex-row">
                        <div className="hidden lg:block w-1/3 md:w-1/4 mb-6 md:mb-0 md:mr-8 mt-18 max-w-xs">
    <h2 className='text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown'>Kinetic <br />Business <br />Intelligence</h2>
</div>

                            <div className="flex-1 flex flex-wrap pl-5 max-w-xs">
                                <div className="w-full md:w-1/2 mb-6 px-5">
                                    <div className="h-full py-8 px-2 border border-brightRed border-t-0 border-l-0 rounded-lg">
                                        <h3 className="text-l font-bold text-md mb-6">Dynamic Data Analysis</h3>
                                        <p className="text-sm text-blueGray-400 leading-relaxed">Our platform utilizes advanced analytics to interpret user data and behaviors, enabling personalized insights and real-time decision-making. Experience dynamic content recommendations tailored to individual preferences.

                                        </p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 mb-6 px-5">
                                    <div className="h-full py-8 px-2 border border-brightRed border-t-0 border-l-0 rounded-lg">
                                        <h3 className="text-l font-bold text-md mb-6">24/7 Analytical Support</h3>
                                        <p className="text-sm text-blueGray-400 leading-relaxed">
                                            Access our expert analytical team round-the-clock for insights, troubleshooting, and strategic guidance. Our team is dedicated to providing timely solutions and actionable intelligence.</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 mb-6 px-5">
                                    <div className="h-full py-8 px-2 border border-brightRed border-t-0 border-l-0 rounded-lg">
                                        <h3 className="text-l font-bold text-md mb-6">Cross-Platform Intelligence</h3>
                                        <p className="text-sm text-blueGray-400 leading-relaxed">
                                            Our solutions are designed for seamless integration across various systems and devices. Experience optimized data accessibility and visualization, ensuring actionable insights across all platforms.</p>
                                    </div>
                                </div>



                                <div className="w-full md:w-1/2 mb-6 px-5">
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
