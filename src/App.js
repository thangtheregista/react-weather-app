import React from 'react';


//COMPONENTS
import Header from "./components/Header"
import Weather from "./components/Weather"

//STYLE
import './App.css';
import Axios from 'axios';


class App extends React.Component {
  state = {
      title: undefined,
      id: undefined,
      minTemp: undefined,
      maxTemp: undefined,
  }
  getLocationID = (city) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`
    Axios.get(url, {
      headers: {
        'x-requested-with': null
      }
    })
    .then(res => {
      this.setState({
        title: res.data[0].title,
        id: res.data[0].woeid,
      })
      this.getWeatherByID(this.state.id)
    })
      
  }
  getWeatherByID = (woeid) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    Axios.get(url, {
      headers: {
        'x-requested-with': null
      }
    })
    .then(res => {
      this.setState({
        maxTemp: res.data.consolidated_weather[0].max_temp,
        minTemp: res.data.consolidated_weather[0].min_temp,
      })
    })
  }
  render() {
    
  return (
    <div className="container">
      <Header
      getLocationID={this.getLocationID} />
      <Weather
      title={this.state.title}
      minTemp={this.state.minTemp}
      maxTemp={this.state.maxTemp}
      />
    </div>
  );
}
}
export default App;
