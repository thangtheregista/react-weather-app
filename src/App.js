import React from 'react';
import Axios from 'axios';
import { debounce } from 'debounce';

//COMPONENTS
import Header from './components/Header';
import Weather from './components/Weather'

//STYLES
import './App.css';

class App extends React.Component {
  state = {
    title: undefined,
    woeid: undefined,
    suggestions: undefined,
    loading: false,
    weatherLoading: false,
    error: false,
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
    day6: undefined,
    day6mintemp: undefined,
    day6maxtemp: undefined,
  }

  setLoadingToTrue = () => {
    this.setState({
      loading: true
    })
  }

  searchSuggestedLocation = (loc) => {
    this.setState({
      suggestions: undefined,
      weatherLoading: true,
    })
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${loc}`
    Axios.get(url, {
      headers: {
        'x-requested-with': null
      }
    })
    .then(res => {
      const cityNames = res.data.slice(0, 5).map(city => city.title)
      if (cityNames.length === 0) {
        this.setState({
          suggestions: undefined,
          loading: false,
          error: true,
        })
      } else {
        const cityName = res.data[0].title
        const cityID = res.data[0].woeid
        this.setState({
          title: cityName,
          woeid: cityID,
        })
        this.getWeatherReports(cityID)
      }
    })
  }

  getWeatherReports = (id) => {
    if (id !== undefined) {
      const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
      Axios.get(url, {
        headers: {
          'x-requested-with': null
        }
      })
      .then(res => {
        const day1data = res.data.consolidated_weather[0]
        const day2data = res.data.consolidated_weather[1]
        const day3data = res.data.consolidated_weather[2]
        const day4data = res.data.consolidated_weather[3]
        const day5data = res.data.consolidated_weather[4]
        const day6data = res.data.consolidated_weather[5]
        return(
          this.setState({
            day1: day1data.applicable_date,
            day1mintemp: Math.round(day1data.min_temp),
            day1maxtemp: Math.round(day1data.max_temp),
            day2: day1data.applicable_date,
            day2mintemp: Math.round(day2data.min_temp),
            day2maxtemp: Math.round(day2data.max_temp),
            day3: day1data.applicable_date,
            day3mintemp: Math.round(day3data.min_temp),
            day3maxtemp: Math.round(day3data.max_temp),
            day4: day1data.applicable_date,
            day4mintemp: Math.round(day4data.min_temp),
            day4maxtemp: Math.round(day4data.max_temp),
            day5: day1data.applicable_date,
            day5mintemp: Math.round(day5data.min_temp),
            day5maxtemp: Math.round(day5data.max_temp),
            day6: day1data.applicable_date,
            day6mintemp: Math.round(day6data.min_temp),
            day6maxtemp: Math.round(day6data.max_temp),
            weatherLoading: false,
          })
        )
      })
    } 
  }

  searchLocation = debounce((text) => {
    this.setLoadingToTrue()
    if (text.length > 2) {
      const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${text}`
      Axios.get(url, {
        headers: {
          'x-requested-with': null
        }
      })
      .then(res => {
        const cityNames = res.data.slice(0, 5).map(city => city.title)

        if (cityNames.length === 0) {
          this.setState({
            suggestions: undefined,
            loading: false,
            error: true,
          })
        } else {
          this.setState({
            suggestions: cityNames,
            loading: false,
            error: false,
          })
        }
      })
    } else {
      this.setState({
        suggestions: undefined,
        loading: false,
        error: false,
      })
    }
  }, 500)

  render () {
    return (
      <div className="App">
        <Header 
          searchLocation={this.searchLocation}
          suggestions={this.state.suggestions}
          loading={this.state.loading}
          error={this.state.error}
          searchSuggestedLocation={this.searchSuggestedLocation}
          title={this.state.title}
          weatherLoading={this.state.weatherLoading}
        />
        <Weather 
          day1={this.state.day1}
          day1maxtemp={this.state.day1maxtemp}
          day1mintemp={this.state.day1mintemp}  
          day2={this.state.day1}
          day2maxtemp={this.state.day2maxtemp}
          day2mintemp={this.state.day2mintemp}  
          day3={this.state.day1}
          day3maxtemp={this.state.day3maxtemp}
          day3mintemp={this.state.day3mintemp}  
          day4={this.state.day1}
          day4maxtemp={this.state.day4maxtemp}
          day4mintemp={this.state.day4mintemp}  
          day5={this.state.day1}
          day5maxtemp={this.state.day5maxtemp}
          day5mintemp={this.state.day5mintemp}  
          day6={this.state.day1}
          day6maxtemp={this.state.day6maxtemp}
          day6mintemp={this.state.day6mintemp}
          weatherLoading={this.state.weatherLoading}
          title={this.state.title}  
        />
      </div>
    );
  }
}

export default App;