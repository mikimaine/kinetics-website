import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const loadRecaptcha = () => {
        if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute('6LdSwl0qAAAAALlAMQ87HVTGHSsIBaToOBYV8J9-', { action: 'submit' })
                    .then(token => {
                        setRecaptchaToken(token);
                    })
                    .catch(err => console.error('reCAPTCHA error:', err));
            });
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.grecaptcha) {
            loadRecaptcha();
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!recaptchaToken) {
            setStatus('reCAPTCHA verification failed.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus('Email sent successfully!');
                setFormData({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setStatus(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Failed to submit form. Please try again.');
        }
    };

    return (
        <>
            <Script
                src="https://www.google.com/recaptcha/api.js?render=6LdSwl0qAAAAALlAMQ87HVTGHSsIBaToOBYV8J9-"
                strategy="afterInteractive"
                onLoad={loadRecaptcha}
            />
            <form onSubmit={handleSubmit} className="contact-form row">
                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <input
                        className="w-full p-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                    />
                </div>

                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <input
                        className="w-full p-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        required
                    />
                </div>

                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <input
                        className="w-full p-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        required
                    />
                </div>

                <div className="col-md-6 mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <textarea
                        className="w-full h-36 p-4 text-blueGray-400 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="What can we help?"
                        required
                    />
                </div>

                <div className="w-full flex justify-center mb-4">
                    <div className="w-full wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                        <button
                            className="w-full py-4 px-8 text-sm text-white font-semibold leading-none bg-brightRed hover:bg-lightBlue rounded"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>

                {status && <p className="status-message">{status}</p>}
            </form>
        </>
    );
}
