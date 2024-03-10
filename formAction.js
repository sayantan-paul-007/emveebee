const express = require('express');
const bodyParser = require('body-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { fname, lname, email, message } = req.body;

    // Create CSV writer
    const csvWriter = createCsvWriter({
        path: 'data.csv',
        header: [
            { id: 'fname', title: 'First Name' },
            { id: 'lname', title: 'Last Name' },
            { id: 'email', title: 'Email' },
            { id: 'message', title: 'Message' }
        ],
        append: true // Append data to existing file
    });

    // Write data to CSV file
    csvWriter.writeRecords([{ fname, lname, email, message }])
        .then(() => {
            console.log('Data submitted successfully.');
            res.send('Data submitted successfully.');
        })
        .catch(error => {
            console.error('Error writing data:', error);
            res.status(500).send('Error submitting data.');
        });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
