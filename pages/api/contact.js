import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullName, email, subject, message, recaptchaToken } = req.body;

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        try {
            const recaptchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
                params: {
                    secret: secretKey,
                    response: recaptchaToken,
                },
            });

            const { success } = recaptchaResponse.data;
            console.log('reCAPTCHA Response:', recaptchaResponse.data);

            if (!success) {
                console.error('reCAPTCHA verification failed:', recaptchaResponse.data);
                return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
            }
        } catch (error) {
            console.error('Error verifying reCAPTCHA:', error);
            return res.status(500).json({ message: 'Error verifying reCAPTCHA.' });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: 'fiyori039@gmail.com',
                subject: subject,
                text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
            });

            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
