const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the database connection

const app = express();

// Middleware
app.use(bodyParser.json());

app.post('/',(req,res) => {
    res.sendFile('./customer.html')
})

// Routes
app.post('/add-customer', (req, res) => {
    const { name, email, phone } = req.body;
    const sql = 'INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)';
    db.query(sql, [name, email, phone], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Customer added successfully', id: results.insertId });
    });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
