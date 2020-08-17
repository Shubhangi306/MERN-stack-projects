import React,{Component} from 'react';
import Cards from './Cards/Cards';
import Charts from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import styles from './Home.module.css';
import axios from 'axios';
import Navbar from './Navbar';

class Home extends Component {
    state = {
        country:{},
        date:''
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get('https://api.covid19api.com/summary')
        .then(response =>{
            console.log(response.data.Countries);
        this.setState({country:response.data.Global,date:response.data.Countries[0].Date})
        })}
    
    render(){
        const { country,date} = this.state;
        return(
            <div className={styles.container}>
                <Navbar></Navbar>
                <br></br>
                <h2 className={styles.heading}>Global</h2>
                <Cards data={this.state}></Cards>
                <h4 className={styles.countries}>Countries</h4>
                <CountryPicker></CountryPicker>
                <h4 className={styles.stats}>Statistics</h4>
                <Charts></Charts>
                
            </div>
        );
    
    }
}

export default Home;