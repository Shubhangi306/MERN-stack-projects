import axios from 'axios';
const url2='https://covid19.mathdro.id/api/daily';
export const fetchDailyData= async () => {
    try {
        const {data} = await axios.get(url2);
        
        const modifiedData2 = data.map((dailyData) =>({
           confirmed: dailyData.confirmed.total,
           deaths: dailyData.deaths.total,
           date: dailyData.reportDate,
        }));
        return modifiedData2;
    } catch (error) {
        console.log(error);
        
    }
}
