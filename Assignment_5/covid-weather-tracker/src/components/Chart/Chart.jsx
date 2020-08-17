import React,{useState,useEffect} from 'react'; 
import {fetchDailyData} from '../Api';
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Charts =() => {
    const [dailyData,setDailyData] = useState([]);
    useEffect(() =>{
       const fetchApi = async () =>{
           setDailyData(await fetchDailyData());

       }
       fetchApi();
    });

    const lineChart = (
        dailyData.length
        ?(<Line 
        data={{
            labels:dailyData.map(({ date }) => date),
            datasets: [ {
             data: dailyData.map(({ confirmed }) => confirmed),
             label: 'Infected',
             borderColor: '#3333ff',
             fill: true,   
            } , {
             data: dailyData.map(({ deaths }) => deaths),
             label: 'Deaths',
             borderColor: 'red',
             backgroundColor:'rgba(2555,0,0,0.5)',
             fill: true,
           }],

        }} >
        </Line> ) : null

    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;