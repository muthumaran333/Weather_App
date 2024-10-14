import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/weather/${city}`);
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('City not found');
            setWeatherData(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center py-10">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 transition-all hover:shadow-2xl">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Weather Forecast</h1>

                <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-6">
                    <input
                        type="text"
                        className="w-full px-5 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name"
                        required
                    />
                    <button 
                        type="submit" 
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 focus:outline-none"
                    >
                        Search
                    </button>
                </form>

                {error && <p className="text-red-500 text-center">{error}</p>}

                {weatherData && (
                    <div className="text-center space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800">{weatherData.name}</h2>

                        <div className="flex justify-center items-center space-x-4">
                            <img
                                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} 
                                alt={weatherData.weather[0].description}
                                className="w-24 h-24"
                            />
                            <div>
                                <p className="text-6xl font-bold text-blue-600">
                                    {weatherData.main.temp}°C
                                </p>
                                <p className="text-gray-500 text-xl capitalize">
                                    {weatherData.weather[0].description}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <p className="text-gray-600 font-semibold">Humidity</p>
                                <p className="text-gray-800 text-2xl">{weatherData.main.humidity}%</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <p className="text-gray-600 font-semibold">Wind Speed</p>
                                <p className="text-gray-800 text-2xl">{weatherData.wind.speed} m/s</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <p className="text-gray-600 font-semibold">Pressure</p>
                                <p className="text-gray-800 text-2xl">{weatherData.main.pressure} hPa</p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <p className="text-gray-700 font-semibold">Sunrise</p>
                                <p className="text-gray-800 text-lg">{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <p className="text-gray-700 font-semibold">Sunset</p>
                                <p className="text-gray-800 text-lg">{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <p className="text-gray-700 font-semibold">Wind Gusts</p>
                                <p className="text-gray-800 text-lg">{weatherData.wind.gust} m/s</p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
