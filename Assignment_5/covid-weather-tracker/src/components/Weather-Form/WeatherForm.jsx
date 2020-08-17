import React from 'react';
import styles from './Weather-Form.module.css';


const WeatherForm=(props)=>{
    return(
        <div className='container '>
             
            <form  onSubmit={props.loadweather} >
            <div className='row' style={{contentAlign:'center'}}>
                <div className ='col-md-4 offset-md-3'>
                    <input  autoComplete='off'  className ='form-control'type="text" name="city" value={props.loadweather.City} placeholder="Choose a city" />
                </div>
                <div className='col-md-3 mt-md-0 text-md-left'>
                    <button className='btn btn-info blue' >Search</button>
                </div>
            
            </div>
            </form>
            
            
        </div>
        
    )
}
export default WeatherForm;