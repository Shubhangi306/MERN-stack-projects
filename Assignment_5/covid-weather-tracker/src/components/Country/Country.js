import React,{Component} from 'react';
import Cards from '../../components/Cards/Cards';
import styles from './Country.module.css';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class Country extends Component {
    state = {
        country:{},
        date:''
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get('https://api.covid19api.com/summary')
        .then(response =>{
            console.log(response.data.Countries[id]);
        this.setState({country:response.data.Countries[id],date:response.data.Countries[id].Date})
        })
    

    }
    render(){
        console.log(this.props.match.params.id);
        const { country ,date} = this.state;
        const barChar=(
            country 
            ? (<Bar 
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    labels:'People',
                    backgroundColor:['rgba(255,0,0,0.5)','rgba(0,255,0,0.5)','rgba(0,0,255,0.5)'],
                    data:[country.TotalConfirmed,country.TotalRecovered,country.Totaldeaths]
                }]

            }}
           options={{
               legend:{display: false},
               title:{display: true, text: `Current State in ${country.Country}`},
           }}>

        </Bar>):(<div>Loading...</div>)
        );
        

        return(
            <div className={styles.container}>
                <h3 className={styles.heading}>{country.Country}</h3>
            <Cards data={this.state}></Cards>
            <h4 className={styles.stats}>Statistics</h4>
            <div className={styles.bbar} >{barChar}</div>
                
            </div>
        );
}}

export default Country;