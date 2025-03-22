const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const path = require('path');

const app1 = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



const express = require('express');
const path = require('path');

const app2 = express();
const port1 = 3000;

app2.use(express.static(path.join(__dirname, 'public')));

app2.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app2.post('/submit', (req, res) => {
    res.send('Form submitted successfully!');
});

app2.listen(port1, () => {
    console.log(`Server is running at http://localhost:${port1}`);
});





//contact
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app3 = express();
app3.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ritika@gmail.com',
        pass: '1234',
    },
});

app3.post('/api/sendEmail', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'ritika@gmail.com',
        to: 'destination-email@example.com',
        subject: `New Query from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error });
        }
        res.json({ success: true });
    });
});

const PORT3 = process.env.PORT3 || 3000;
app3.listen(PORT, () => {
    console.log(`Server is running on port ${PORT3}`);
});









