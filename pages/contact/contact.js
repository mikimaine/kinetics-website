import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from "./contactForm.js";
import NewsletterForm from "./newsletterForm.js";

const Contact = () => {
    return (
        <Layout>
            <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                <div className="container">
                    <h1 className="text-2xl lg:text-5xl font-bold mb-5">Contact Us</h1>
                    <ul className="flex text-gray-500 text-sm lg:text-sm pb-12">
                        <li className="inline-flex items-center">
                            <a href="/" className="hover:text-brightRed text-gray-800">Home</a>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </li>
                        <li className="inline-flex items-center">
                            <a href="#" className="hover:text-brightRed text-gray-800">Contact</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="mb-10 mx-auto">
                            <span className="mt-4 text-xl">Feel free to contact us any time</span>
                            <h2 className="text-3xl font-bold">We Will Get Back to You as Soon as We Can</h2>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-darkblue">
                <div className="container">
                    <NewsletterForm />
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
