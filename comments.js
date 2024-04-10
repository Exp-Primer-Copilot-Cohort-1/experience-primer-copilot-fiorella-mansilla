
// Create web server
const express = require('express');
const app = express();

// Create a comment
app.post('/comments', (req, res) => {
    // Create a new comment
    res.send('Comment created');
});

// Retrieve a comment
app.get('/comments/:id', (req, res) => {
    // Retrieve a comment by id
    res.send('Comment retrieved');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
    // Update a comment by id
    res.send('Comment updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    // Delete a comment by id
    res.send('Comment deleted');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started');
});


