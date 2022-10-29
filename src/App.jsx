import React from "react";
import Form from "./components/Form";
import Nav from "./components/Nav";
import { Component } from "react";
import INFO_USERS from './components/index'
import Footer from "./components/Footer";

class App extends Component {

  state = {
    name_city: '',
    name_country: '', 
    temperature: '',
    temperature_max: '',
    temperature_min: '',
    humidity: '',
    lat: '',
    lon: '',
    wind_speed: '',
  }

  getInfoUsers = async (e) =>{
    e.preventDefault()



    const {cityName, countryName} = e.target.elements;
    const valueCity = cityName.value
    const valueCountry = countryName.value


    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${valueCity},${valueCountry}&appid=YOUR-KEY&units=metric`
    const res = await fetch(URL_API)
    const data = await res.json()
    console.log(this.state)

    this.setState({
        name_city: data.name,
        name_country: data.sys.country, 
        temperature: data.main.temp,
        temperature_max: data.main.temp_max,
        temperature_min: data.main.temp_min,
        humidity: data.main.humidity,
        lat: data.coord.lat,
        lon: data.coord.lon,
        wind_speed: data.wind.speed,
        error: null
      }, () => console.log(this.state));
  }


  render() {
    return (
      <section className="hero">
        <Nav/>
        <Form getInfoUsers={this.getInfoUsers}/>
        <INFO_USERS {...this.state} />
        <Footer/>
      </section>
    )
  }
}

export default App;

