app.post('/user_responses', (req, res) => {
    const { name, phone, email,product, quantity, country} = req.body; // Assuming these fields in your form
    const sql = 'INSERT INTO user_responses (name, phone, email,product, quantity, country) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Customer added successfully', id: results.insertId });
    });
});


app.get('/user_responses', (req, res) => {
    const sql = 'SELECT * FROM customers';
    db.query(sql, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});
