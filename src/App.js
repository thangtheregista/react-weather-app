import React from 'react';
import Axios from 'axios';
import { debounce } from 'debounce';

//COMPONENTS
import Header from './components/Header';

//STYLES
import './App.css';

class App extends React.Component {
  state = {
    suggestions: undefined,
    loading: false,
    error: false,
  }

  setLoadingToTrue = () => {
    this.setState({
      loading: true
    })
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
        />
      </div>
    );
  }
}

export default App;
