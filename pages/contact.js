import React from 'react';
import Layout from '../components/layout/Layout';
import TextEffect from "../components/elements/TextEffect"
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <Layout>
                <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                    <div className="container">
                        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Contact Us</h1>
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
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="max-w-md mb-8 mx-auto">
                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-brightRed/20 text-brightRed rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    Contact Us
                                </span>
                                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                    We will <span className="text-lightBlue">be glad</span> to hear from you!
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject" />
                                </div>
                                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name" />
                                </div>
                                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                </div>
                                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <textarea className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Message..."></textarea>
                                </div>
                                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <label>
                                        <input className="mr-1" type="checkbox" name="terms" value="1" />
                                        <span className="text-sm font-semibold">I agree to terms and conditions.</span>
                                    </label>
                                </div>
                                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-brightRed hover:bg-blue-700 rounded" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                         </div>
                    </div>
                </section>
                <section className="py-20 bg-darkblue">
                    <div className="container">
                        <div className="text-center max-w-xl mx-auto">
                            <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                                <span>Subscribe to </span>
                                <span className="text-brightRed/40">Our Newsletter now.</span> <br />
                                {/* <span>and get the Coupon code.</span> */}
                            </h2>
                            <p className="mb-8 text-blueGray-200">All your information is completely confidential</p>
                            <div className="flex flex-wrap max-w-lg mx-auto">
                                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-white border border-blue-300 rounded">
                                    <svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0C1A2B">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input className="w-full pl-3 py-4 text-xs text-brightRed placeholder-red font-semibold leading-none bg-white outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button className="w-full md:w-auto py-4 px-8 text-xs  text-lightBlue hover:text-darkBlue font-semibold leading-none border border-blue-300 hover:border-brightRed/30 bg-white rounded transition duration-300 ease-in-out" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Contact;