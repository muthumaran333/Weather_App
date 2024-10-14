# 🌦️ Weather App

![Weather](https://img.shields.io/badge/Weather-Forecasting-blue?style=flat-square&logo=weather)

A full-stack weather forecasting application that provides real-time weather information based on city search. The application integrates with the OpenWeatherMap API to deliver accurate and responsive weather data.

## Features
- **Real-Time Weather Data**: Displays current temperature, humidity, and weather conditions.
- **Responsive UI**: Optimized for both desktop and mobile devices.
- **Error Handling**: Provides feedback for invalid city names or network issues.
- **OpenWeatherMap API Integration**: Fetches weather data from a trusted API.

## Screenshots
Here are some screenshots to give you an idea of the application's interface:

### Main Weather Page
![Main Page](images/weather_app_main.png)

### Error Message for Invalid City
![Error Message](images/weather_app_error.png)

## Architecture
The project is divided into two parts:
- **Frontend**: Built with HTML, CSS, and vanilla JavaScript for a responsive experience.
- **Backend**: Powered by Node.js and Express, managing API requests and serving frontend assets.

## Prerequisites
- **Node.js** (v12+)
- **NPM** (Node Package Manager)
- An API key from [OpenWeatherMap](https://openweathermap.org/api).

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/muthumaran333/Weather_App.git
   ```

2. **Backend Setup**:
   Navigate to the backend directory:
   ```bash
   cd weather-app-backend
   ```
   Install dependencies:
   ```bash
   npm install
   ```
   Configure your OpenWeatherMap API key by creating a `.env` file:
   ```bash
   touch .env
   ```
   Add your API key:
   ```
   API_KEY=your_openweathermap_api_key
   ```

3. **Run the Backend**:
   Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:3000`.

4. **Frontend**:
   Open the `index.html` file located in `weather-app-frontend` with a browser to use the application.

## API Integration
This project integrates with the OpenWeatherMap API to retrieve real-time weather data. Ensure you have registered and obtained an API key before using the app.

## Project Structure
```
Weather_App/
│
├── weather-app-backend/           # Node.js backend handling API requests
│   ├── server.js                  # Main server file
│   └── package.json               # NPM dependencies and scripts
│
├── weather-app-frontend/          # Frontend with HTML, CSS, and JavaScript
│   ├── index.html                 # Main HTML page
│   └── style.css                  # Custom styles
│
└── README.md                      # Project documentation
```

## Usage
1. Open the app and enter the name of any city in the search bar.
2. The app will fetch and display the current weather conditions including temperature, humidity, and weather description.
3. If the city is not found or there is a connectivity issue, an error message will be shown.

## Technologies Used
- **Frontend**: 
  - HTML5
  - CSS3
  - JavaScript (AJAX)
- **Backend**: 
  - Node.js
  - Express.js
- **API**: 
  - OpenWeatherMap API

## Future Enhancements
- **Extended Forecast**: Add a 5-day weather forecast feature.
- **Geolocation**: Automatically fetch weather based on user’s location.
- **Historical Data**: Show past weather conditions.
