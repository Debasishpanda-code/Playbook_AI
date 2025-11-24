import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // Simulate database delay
    setTimeout(() => {
        console.log(`New subscriber: ${email}`);
        res.status(200).json({ message: 'Successfully subscribed!' });
    }, 1000);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
