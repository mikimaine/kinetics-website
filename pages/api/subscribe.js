export default async (req, res) => {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        try {
            const API_KEY = process.env.MAILCHIMP_API_KEY;
            const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
            const DATACENTER = API_KEY.split('-')[1];

            const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
                method: 'POST',
                headers: {
                    Authorization: `apikey ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed',
                }),
            });

            if (response.status >= 400) {
                return res.status(400).json({
                    error: `There was an error subscribing to the newsletter. Please try again later.`,
                });
            }

            return res.status(201).json({ message: 'Subscribed successfully!' });
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    return res.status(405).json({ error: 'Method not allowed' });
};
