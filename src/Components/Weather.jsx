import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
  var [city, setCity] = useState('');
  var [temp, setTemp] = useState("0.0");
  var [hum, setHum] = useState("0.0");
  var [pressure, setPressure] = useState("");
  var [weatherDescription, setWeatherDescription] = useState("");
  var [windSpeed, setWindSpeed] = useState("");

  // Function to fetch weather data based on the city entered
  async function f1() {
    var res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee3070a329bf3dd76a091c1497a04586`
    );
    setTemp((res.data.main.temp - 273.15).toFixed(2)); // Fixed temp
    setHum(res.data.main.humidity);
    setPressure(res.data.main.pressure);
    setWeatherDescription(res.data.weather[0].description);
    setWindSpeed(res.data.wind.speed);
  }

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      
      <div className="input-group" style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={f1}
          style={styles.button}
        >
          Get Weather
        </button>
      </div>

      {/* Weather Information Display */}
      <div style={styles.weatherInfo}>
        <p style={styles.infoItem}>Temperature: {temp} °C</p>
        <p style={styles.infoItem}>Humidity: {hum} %</p>
        <p style={styles.infoItem}>Pressure: {pressure} hPa</p>
        <p style={styles.infoItem}>Wind Speed: {windSpeed} m/s</p>
        <p style={styles.infoItem}>Weather: {weatherDescription}</p>
      </div>
    </div>
  );
}

// Internal CSS for styling
const styles = {
  container: {
    background: 'linear-gradient(to bottom, #6a11cb, #2575fc)', // Purple to blue gradient
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  },
  title: {
    color: '#ffffff', // White title
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontSize: '28px'
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
  },
  input: {
    borderRadius: '20px',
    border: '2px solid #ffffff',
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    width: '250px'
  },
  button: {
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#6a11cb', // Purple text
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
  },
  weatherInfo: {
    marginTop: '20px',
    textAlign: 'center'
  },
  infoItem: {
    backgroundColor: '#ffffff',
    border: '1px solid #6a11cb', // Purple border
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '18px',
    width: '300px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
  }
};
