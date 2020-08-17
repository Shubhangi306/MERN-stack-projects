import React, {Component} from 'react'; 
import styles from './CountryPicker.module.css';
import Marquee from 'react-double-marquee';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class CountryPicker extends Component {
    state = {
        countries:[]
    }
    componentDidMount(){
        Axios.get('https://api.covid19api.com/summary')
        .then(response => {
                console.log(response.data.Countries);
                this.setState({
                    countries:response.data.Countries

                })
            }
        )
    }
    render(){
        const {countries}=this.state;
        const countryList= countries.length ? (countries.map((country,index)=>{
            return(
            <span className={styles.country} key={index}>
                <span><Link to={'/country/'+index}><span className={styles.label}>{country.Country}&nbsp;&nbsp;&nbsp;&nbsp;{country.TotalConfirmed}</span></Link></span>
            </span>
            )
                

        }) ): (<p>Loading...</p>)
        return (
            <div style={{whiteSpace:"nowrap",width:'90%', height:'50px'}}>
            <Marquee className={styles.marque} direction='left' speed='0.05' >{countryList}</Marquee>
            </div>

        )}
   
        
}

export default CountryPicker;