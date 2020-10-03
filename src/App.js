import React from 'react';
import Axios from 'axios';
import { debounce } from 'debounce';

// COMPONENTS
import Header from './components/Header';
import Weather from './components/Weather';

// STYLES
import './App.css';

class App extends React.Component {
  state = {
    loading: false,
    weatherLoading: false,
    selectedLocation: undefined,
    searchResults: undefined,
  }

  searchLocation = debounce((text) => {
    this.setState({
      loading: true,
    })
    if (text.length > 2) {
      const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${text}`
      Axios.get(url, {
        headers: {
          'x-requested-with': null
        }
      })
      .then(res => {
        if (res.data.length === 0) {
          this.setState({
            searchResults: null,
            selectedLocation: null,
            loading: false,
          })
        } else {
          this.setState({
            searchResults: res.data.slice(0, 5),
            loading: false,
          })
          this.getWeatherByID(res.data[0].woeid)
        }
      })
      .catch(err => console.log(err))
    } else {
      this.setState({
        searchResults: null,
        selectedLocation: null,
        loading: false,
      })
    }
  }, 500)

  getWeatherByID = debounce((id) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
    this.setState({
      weatherLoading: true,
    })
    Axios.get(url, {
      headers: {
        'x-requested-with': null
      }
    })
    .then(res => {
      this.setState({
        selectedLocation: res.data,
        weatherLoading: false
      })
    })
  }, 500)

  render () {
    const { 
      loading,
      weatherLoading, 
      searchResults, 
      selectedLocation 
    } = this.state;
    return (
      <div className="App">
        <Header 
          searchLocation={this.searchLocation}
          getWeatherByID={this.getWeatherByID}
          loading={loading}
          searchResults={searchResults}
        />
        <Weather 
          weatherLoading={weatherLoading}
          selectedLocation = {selectedLocation}
        />
      </div>
    );
  }
}

export default App;