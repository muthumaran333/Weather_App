const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env

const app = express();
app.use(cors());  // Enable Cross-Origin requests

// Route to fetch weather data
app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;  // Access API key from .env file
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);  // Make API request
        res.json(response.data);  // Send the weather data as a response
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
