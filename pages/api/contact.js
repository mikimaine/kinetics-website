import sendgrid from '@sendgrid/mail';
import axios from 'axios';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

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

        try {
            await sendgrid.send({
                from: 'info@kineticsbi.com',
                to: 'info@kineticsbi.com',
                subject: subject,
                text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
            });

            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error.response ? error.response.body : error);
            return res.status(500).json({ message: 'Error sending email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
