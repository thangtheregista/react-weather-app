import React from 'react';
import Axios from 'axios';

//COMPONENTS
import Weather from "./components/Weather"
import LocationInput from "./components/LocationInput"

//STYLE
import './App.css';



class App extends React.Component {
  state = {
      title: undefined,
      woeid: undefined,
      suggestions: undefined,
      day1: undefined,
      day1mintemp: undefined,
      day1maxtemp: undefined,
      day2: undefined,
      day2mintemp: undefined,
      day2maxtemp: undefined,
      day3: undefined,
      day3mintemp: undefined,
      day3maxtemp: undefined,
      day4: undefined,
      day4mintemp: undefined,
      day4maxtemp: undefined,
      day5: undefined,
      day5mintemp: undefined,
      day5maxtemp: undefined,
  }
  searchLocation = (text) => {
    if (text) {
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${text}`
    Axios.get(url, {
      headers: {
        'x-requested-with': null
      }
    })
    .then(res => {
      this.setState({
        suggestions: res.data.slice(0, 5).map(city => city.title)
      })
    })
  } else {
    this.setState({
      suggestions: undefined
    })
  }}
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
        woeid: res.data[0].woeid,
        suggestions: undefined
      })
      this.getWeatherReports(this.state.woeid)
    })}
  getWeatherReports = (id) => {
      if (id !== undefined) {
        const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
        Axios.get(url, {
          headers: {
            'x-requested-with': null
          }
        })
        .then(res => {
          return(
            this.setState({
              day1: res.data.consolidated_weather[0].applicable_date,
              day1mintemp: res.data.consolidated_weather[0].min_temp,
              day1maxtemp: res.data.consolidated_weather[0].max_temp,
              day2: res.data.consolidated_weather[1].applicable_date,
              day2mintemp: res.data.consolidated_weather[1].min_temp,
              day2maxtemp: res.data.consolidated_weather[1].max_temp,
              day3: res.data.consolidated_weather[2].applicable_date,
              day3mintemp: res.data.consolidated_weather[2].min_temp,
              day3maxtemp: res.data.consolidated_weather[2].max_temp,
              day4: res.data.consolidated_weather[3].applicable_date,
              day4mintemp: res.data.consolidated_weather[3].min_temp,
              day4maxtemp: res.data.consolidated_weather[3].max_temp,
              day5: res.data.consolidated_weather[4].applicable_date,
              day5mintemp: res.data.consolidated_weather[4].min_temp,
              day5maxtemp: res.data.consolidated_weather[4].max_temp,
            })
          )
        })
        }
    }
  render() {
    
  return (
    <div className="container">
      <LocationInput
      searchLocation={this.searchLocation}
      locationSuggestions={this.locationSuggestions}
      getLocationID={this.getLocationID}
      suggestions={this.state.suggestions} />
      <Weather
      day1={this.state.day1}
      day1mintemp={this.state.day1mintemp}
      day1maxtemp={this.state.day1maxtemp}
      day2={this.state.day2}
      day2mintemp={this.state.day2mintemp}
      day2maxtemp={this.state.day2maxtemp}
      day3={this.state.day3}
      day3mintemp={this.state.day3mintemp}
      day3maxtemp={this.state.day3maxtemp}
      day4={this.state.day4}
      day4mintemp={this.state.day4mintemp}
      day4maxtemp={this.state.day4maxtemp}
      day5={this.state.day5}
      day5mintemp={this.state.day5mintemp}
      day5maxtemp={this.state.day5maxtemp}
      />
    </div>
  );
}
}
export default App;
