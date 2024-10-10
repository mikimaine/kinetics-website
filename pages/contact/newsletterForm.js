import { useState } from 'react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (result.error) {
            setIsError(true);
            setStatus('Error: ' + result.error);
        } else {
            setIsError(false);
            setStatus('Thank you for subscribing!');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="text-center max-w-xl mx-auto">
                <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                    <span>Subscribe to </span>
                    <span className="text-brightRed/40">Our Newsletter now</span> <br />
                </h2>
                <p className="mb-8 text-blueGray-200">
                    All your information is completely confidential
                </p>
                <div className="flex flex-wrap max-w-lg mx-auto">
                    <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-white border border-blue-300 rounded">
                        <svg
                            className="h-6 w-6 my-auto text-blue-300"
                            xmlns="https://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#0C1A2B"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <input
                            className="w-full pl-3 py-4 text-xs text-brightRed placeholder-red font-semibold leading-none bg-white outline-none"
                            type="email"
                            placeholder="Type your e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        className="w-full md:w-auto py-4 px-8 text-xs text-lightBlue hover:text-darkBlue font-semibold leading-none border border-blue-300 hover:border-brightRed/30 bg-white rounded transition duration-300 ease-in-out"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            <p className={`mt-4 text-center p-4 ${isError ? 'text-brightRed' : 'text-white'}`}>
                {status}
            </p>
        </form>
    );
}
