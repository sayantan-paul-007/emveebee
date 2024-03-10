const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { fname ,lname, email, message } = req.body;

    // Read existing data from Excel file, if any
    let data = [];
    if (fs.existsSync('data.xlsx')) {
        const workbook = xlsx.readFile('data.xlsx');
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        data = xlsx.utils.sheet_to_json(worksheet);
    }

    // Append new data
    data.push({ FirstName: fname,LastName: lname, Email: email, Message:message });

    // Write data to Excel file
    const newWorkbook = xlsx.utils.book_new();
    const newWorksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, 'Sheet1');
    xlsx.writeFile(newWorkbook, 'data.xlsx');

    res.send('Data submitted successfully.');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
