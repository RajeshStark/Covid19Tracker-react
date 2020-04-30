import React from 'react';
import { Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api';

class App extends React.Component{
  state = {
     date: {},
     country: ''
  }

 async componentDidMount(){

    const fetchedData = await fetchData()

     this.setState({date: fetchedData})

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({date: fetchedData, country: country})
    
    console.log(fetchedData);
  }

  render(){

    return(
      <div className={styles.container}>
        <h1>Covid 19 Tracker</h1>
        <Cards data={this.state.date}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={this.state.date} country={this.state.country} />
      </div>
    )
  }
}

export default App;
