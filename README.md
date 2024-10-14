# 🌦️ Weather App

![Weather](https://img.shields.io/badge/Weather-Forecasting-blue?style=flat-square&logo=weather)

A full-stack weather forecasting application built using **ReactJS** and **Tailwind CSS** on the frontend, and **Node.js** with **Express** for the backend. The app fetches real-time weather data through the OpenWeatherMap API.

## Features
- **Real-Time Weather Data**: Displays current temperature, humidity, and conditions for any city.
- **Responsive UI**: Designed for a seamless experience on both desktop and mobile.
- **Error Handling**: Notifies the user for invalid city names or network issues.
- **OpenWeatherMap API Integration**: Accurate weather data from a trusted API.

## Screenshots

### Main Interface
![Main Interface](https://github.com/muthumaran333/Weather_App/blob/main/Images/Picture2.PNG)

### Weather Example (Chennai)
![Weather for City](https://github.com/muthumaran333/Weather_App/blob/main/Images/weatherapp.PNG)

### Project File Structure
![File Structure](https://github.com/muthumaran333/Weather_App/blob/main/Images/code1.PNG)

## Architecture
The project is split into:
- **Frontend**: Developed with ReactJS and Tailwind CSS for responsive design.
- **Backend**: Powered by Node.js and Express to manage API requests.

## Prerequisites
- **Node.js** (v12+)
- **NPM**
- OpenWeatherMap API Key (Register at [OpenWeatherMap](https://openweathermap.org/api))

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/muthumaran333/Weather_App.git
   ```

2. **Backend Setup**:
   ```bash
   cd weather-app-backend
   npm install
   ```
   Create a `.env` file and add your API key:
   ```
   API_KEY=your_openweathermap_api_key
   ```

3. **Run the Backend**:
   ```bash
   npm start
   ```
   This starts the server on `http://localhost:3000`.

4. **Frontend Setup**:
   Open the `weather-app-frontend/index.html` in a browser.

## API Integration
The app integrates the OpenWeatherMap API for fetching real-time weather data. Ensure you have an API key before running the app.

## Project Structure
```
Weather_App/
│
├── weather-app-backend/           # Node.js backend
│   ├── server.js                  # Main backend logic
│   └── package.json               # Dependencies and scripts
│
├── weather-app-frontend/          # Frontend assets
│   ├── index.html                 # Main frontend page
│   └── style.css                  # Styling with Tailwind CSS
│
└── README.md                      # Project documentation
```

## Usage
1. Open the app and enter a city name in the search bar.
2. The app will display the temperature, humidity, and weather description for the chosen city.
3. Error messages will appear if the city is invalid or there are network issues.

## Technologies Used
- **Frontend**: 
  - ReactJS
  - Tailwind CSS
- **Backend**: 
  - Node.js
  - Express.js
- **API**: 
  - OpenWeatherMap API

## Future Enhancements
- **Extended Forecast**: Adding a 5-day weather forecast feature.
- **Geolocation**: Automatically fetch weather based on the user's location.
- **Historical Data**: Display past weather data.
