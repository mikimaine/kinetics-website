import React from "react";
import Link from "next/link"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
                            <Link href="/" legacyBehavior>
                                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                    <img className="h-6" src="/assets/imgs/logos/kbi_white_bg.png" alt="Kinetic" />
                                </a>
                            </Link>
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-16 text-xs text-blueGray-400 leading-relaxed mt-3">
                                Transforming <strong className="text-brightRed">Data</strong> into actionable insights for your success
                            </p>
                            <div className="order-first lg:order-last -mx-2 lg:mb-0 pt-6 sm:hidden">
                                <a className="inline-block px-2" href="https://twitter.com/kineticsbi">
                                    <img src="/assets/imgs/icons/twitterx1.png" alt="KBI" />
                                </a>
                                <a className="inline-block px-2" href="https://www.instagram.com/kineticsbi/">
                                    <img src="/assets/imgs/icons/instagram.png" alt="KBI" />
                                </a>
                                <a className="inline-block px-2 pb-1" href="https://www.linkedin.com/company/kinetic-bi/">
                                    <img src="/assets/imgs/icons/linkedin.png" alt="KBI" />
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3  mb-8 lg:mb-0 pr-8">
                            <p className="mb-2 lg:mb-4 lg:text-md font-bold font-heading text-blueGray-800">Products </p>
                            <a href="/products/#Complaint"> <p className="text-xs text-blueGray-400 pb-2">Complaint System</p></a>
                            <a href="/products/#data"> <p className="text-xs text-blueGray-400 pb-2">Data processing</p></a>
                            <a href="/products/#ecommerce"> <p className="text-xs text-blueGray-400">E-Commerce Platform</p></a>
                        </div>
                        <div className="w-full lg:w-1/3 ">
                            <p className="mb-2 lg:mb-4 lg:text-md font-bold font-heading text-blueGray-800">Contact Info</p>
                            <p className="text-xs text-blueGray-400 pb-2">108 W. 13th Street, Suite 100 Wilmington, <br />DE 19801 County of New Castle</p>
                            <p className="text-xs text-blueGray-400 pb-2"> <a href="tel:+19452466827">+1 945 246 6827</a></p>
                            <p className="text-xs text-blueGray-400"><a href="mailto:info@kineticsbi.com">info@kineticsbi.com</a></p>
                            <div className="order-first lg:order-last -mx-2 lg:mb-0 pt-6 md:hidden">
                            <a className="inline-block px-2" href="https://twitter.com/kineticsbi">
                                    <img src="/assets/imgs/icons/twitterx.png" alt="KBI" />
                                </a>
                                <a className="inline-block px-2" href="https://www.instagram.com/kineticsbi/">
                                    <img src="/assets/imgs/icons/instagram.png" alt="KBI" />
                                </a>
                                <a className="inline-block px-2 pb-1" href="https://www.linkedin.com/company/kinetic-bi/">
                                    <img src="/assets/imgs/icons/linkedin.png" alt="KBI" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400 text-center">
                            &copy; {currentYear} Kineticbi. All rights reserved.
                        </p>
                        {/* <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://twitter.com/kineticsbi">
                                <img src="/assets/imgs/icons/twitter.png" alt="KBI" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com/kineticsbi/">
                                <img src="/assets/imgs/icons/instagram-blue.svg" alt="KBI" />
                            </a>
                            <a className="inline-block px-2" href="https://www.linkedin.com/company/kinetic-bi/">
                                <img src="/assets/imgs/icons/linkedin-icon-3.svg" alt="KBI" />
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
