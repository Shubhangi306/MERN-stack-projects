import React, { Component } from 'react';
import styles from './Weather.module.css';
import axios from 'axios';
import ForeCast from './ForeCast/ForeCast';
import WeatherNav from './WeatherNav';
import WeatherForm from './Weather-Form/WeatherForm';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloudy from './pictures/Clouds.jpg';
import drizzle from './pictures/drizzle.jpg';
import foggy from './pictures/foggy.jpg';
import rain from './pictures/rain.jpg';
import sunny from './pictures/sunny.jpg';
import snow from './pictures/snow.jpg';
import thunderstorm from './pictures/thunderstorm.jpg';


const api_key='65ccf1982f0663d791aa5b0f4c262250';
const api_base='https://api.openweathermap.org/data/2.5/';
const weatherIcon={
    ThunderStorm:'wi-thunderstorm',
    Drizzle:'wi-sleet',
    Rain:'wi-storm-showers',
    Snow:'wi-snow',
    Atmosphere:'wi-fog',
    Clear:'wi-day-sunny',
    Clouds:'wi-day-fog'

};

class Weather extends Component {

    state={
        city:'',country:'', temperature:'',
        humidity:'',pressure:'',minTemp:'',maxTemp:'',
        feels:'',date:'',rain:'',sunrise:'',sunset:'',
        visibility:'', description:'',error:'',
         icon:'', windDirection:'', windSpeed:'',cloudiness:'',image:'',color:'',clicked:false
    }
    
    
    
    handleChange=(e)=>{
        let City=e.target.city.value;
        e.preventDefault();
        console.log(City);
        this.fetchdata(City);
        this.setState({clicked:true})
        e.target.city.value=null;

    }

    get_WeatherIcon=(rangeId)=>{
        switch(true){
            case rangeId>=200 && rangeId <=232:
                this.setState({icon:weatherIcon.ThunderStorm ,image:thunderstorm ,color:'#d1c4e9'});
                break;
            case rangeId>=300 && rangeId <=221:
                this.setState({icon:weatherIcon.Drizzle ,image:drizzle, color:'#80cbc4'});
                break;
            case rangeId>=500 && rangeId <=531:
                this.setState({icon:weatherIcon.Rain,image:rain, color:'#b0bec5'});
                break;
            case rangeId>=600 && rangeId <=622:
                this.setState({icon:weatherIcon.Snow ,image:snow ,color:'#bdbdbd'});
                break;           
            case rangeId>=700 && rangeId <=781:
                this.setState({icon:weatherIcon.Atmosphere,image:foggy, color:'#dcdbdf'});
                break;           
            case rangeId===800:
                this.setState({icon:weatherIcon.Clear,image:sunny,color:'#81d4fa'});
                break;           
            case rangeId>=801 && rangeId <=804:
                this.setState({icon:weatherIcon.Clouds,image:cloudy,color:'#607d8b' });
                break; 
            default:
                this.setState({icon:weatherIcon.Clouds,image:cloudy ,color:'#607d8b'});           
        }

    }


    fetchdata = async(City)=> 
    {   try {
        const response=await axios.get(`https://cors-anywhere.herokuapp.com/${api_base}weather?q=${City}&units=metric&appid=${api_key}`);
        console.log(response.data);
        if(response.data && City){
        this.setState({
            city:response.data.name,
            country:response.data.sys.country,
            temperature:response.data.main.temp,
            minTemp:response.data.main.temp_min,
            maxTemp:response.data.main.temp_max,
            feels:response.data.main.feels_like,
            humidity:response.data.main.humidity,
            pressure:response.data.main.pressure,
            windSpeed:response.data.wind.speed,
            windDirection:response.data.wind.deg,
            visibility:response.data.visibility,
            cloudiness:response.data.clouds.all,
            sunset:response.data.sys.sunset,
            sunrise:response.data.sys.sunrise,
            description:response.data.weather[0].description,
            date:response.data.dt,
            error:''
        })
            this.get_WeatherIcon(response.data.weather[0].id);

    }else{
            this.setState({
                
                city:'',country:'', temperature:'',
                humidity:'',pressure:'',minTemp:'',maxTemp:'',
                feels:'',date:'',rain:'',sunrise:'',sunset:'',
                visibility:'', description:'',
                 icon:'', windDirection:'', windSpeed:'',cloudiness:'', image:'',
            error:'Loading...'
            })
        }
        
    } catch (error) {
        this.setState({
            city:'',country:'', temperature:'',
                humidity:'',pressure:'',minTemp:'',maxTemp:'',
                feels:'',date:'',rain:'',sunrise:'',sunset:'',
                visibility:'', description:'',
                 icon:'', windDirection:'', windSpeed:'',cloudiness:'',image:'',error:'Please enter proper city name!'  
            
        })
    } }


    render(){
        const{temperature,city,country,humidity,
            pressure,error,icon, image,minTemp,
            maxTemp,feels,description,date,rain,
            cloudiness,visibility,sunrise,sunset,
        windSpeed,windDirection,color,clicked}=this.state
        return(
            <div>
            <WeatherNav></WeatherNav>
            <div className={styles.container}>
            <WeatherForm loadweather={this.handleChange}></WeatherForm>
        <ForeCast data={this.state}></ForeCast>
        </div>
        </div>
        );

    }
    

}
 
export default Weather;