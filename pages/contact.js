import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Contact = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    // State to hold form submission status
    const [status, setStatus] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            // Here you can make an API call to send the form data, for now we will log it
            console.log('Form data submitted:', formData);

            // Mock API response delay
            setTimeout(() => {
                setStatus('Form submitted successfully!');
            }, 2000);

            // Reset form fields after successful submission
            setFormData({
                fullName: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setStatus('Failed to submit the form.');
            console.error('Form submission error:', error);
        }
    };

    return (
        <>
            <Layout>
                <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                    <div className="container">
                        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Contact Us</h1>
                        <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="/" className="hover:text-brightRed text-gray-800">
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
                            <div className="mb-10 mx-auto">
                                <span className="mt-4 text-xl wow animate__animated animate__fadeIn">
                                    Feel free to contact us any time
                                </span>
                                <h2 className="text-3xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".s">
                                    We Will Get Back to You as Soon as We Can
                                </h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="block text-left text-blueGray-500 mb-4 text-sm font-semibold">Full Name</label>
                                        <input
                                            className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                            type="text"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="block text-left text-blueGray-500 mb-4 text-sm font-semibold">Email</label>
                                        <input
                                            className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="block text-left text-blueGray-500 mb-4 text-sm font-semibold">Subject</label>
                                        <input
                                            className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="block text-left text-blueGray-500 mb-4 text-sm font-semibold">Message</label>
                                        <textarea
                                            className="w-full h-36 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                                            name="message"
                                            placeholder="Tell us what we can help you with..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="w-full flex justify-center mb-4">
                                        <div className="w-full wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <button className="w-full py-4 px-8 text-sm text-white font-semibold leading-none bg-brightRed hover:bg-lightBlue rounded" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {status && <p className="text-center mt-4">{status}</p>}
                            </form>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-darkblue">
                    <div className="container">
                        <div className="text-center max-w-xl mx-auto">
                            <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                                <span>Subscribe to </span>
                                <span className="text-brightRed/40">Our Newsletter now.</span>
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
                                <button className="w-full md:w-auto py-4 px-8 text-xs text-lightBlue hover:text-darkBlue font-semibold leading-none border border-blue-300 hover:border-brightRed/30 bg-white rounded transition duration-300 ease-in-out" type="submit">
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
