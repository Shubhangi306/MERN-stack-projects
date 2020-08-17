import React from 'react';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cx from 'classnames';
import {format} from 'date-fns';
import cloudy from '../pictures/Clouds.jpg';
import drizzle from '../pictures/drizzle.jpg';
import foggy from '../pictures/foggy.jpg';
import rain from '../pictures/rain.jpg';
import sunny from '../pictures/sunny.jpg';
import snow from '../pictures/snow.jpg';
import thunderstorm from '../pictures/thunderstorm.jpg';
import styles from './ForeCast.module.css';
import { Card,CardContent,Typography,Grid,CardActionArea,CardMedia,Box,CardHeader} from '@material-ui/core';

const ForeCast = ({data:{temperature,city,country,humidity,
    pressure,error,icon, image,minTemp,maxTemp,feels,description,date,rain,
    cloudiness,visibility,sunrise,sunset,windSpeed,windDirection,color,clicked}}) => {
    console.log(error);
    
   
    if(!temperature){
        if(error){
            return(
                <div style={{color:'red',marginLeft:'-150px'}}>{error}</div>
            )
        }else{
            return(
                <div></div>
            )
        }}

    return(
       <div className='container'>
            
           <Grid container spacing={4} justify='center'>
                <Grid item component={Card} xs={12}  md={5} style={{position:'relative',backgroundColor:'whitesmoke',borderBottom:'10px solid' + color }} className={styles.card} >
                    <CardActionArea style={{display:'flex',justifyContent:'center'}}>

                        <CardMedia component='img' height='600' src={image} title='lorem ipsum' ></CardMedia>
                        <Box  style={{position:'absolute',top:'10px'}} fontWeight={700} fontSize='h5.fontSize'>{city}</Box>
                        <Box  style={{position:'absolute',top:'55px'}} fontWeight={500} fontSize='h6.fontSize'>{ Date(date).toString().slice(0,15)}</Box>
                        
                        <Typography  style={{position:'absolute',top:'145px',color:'white'}} variant='h1'>{temperature}&deg;c</Typography>
                        <Box  fontStyle='italic'fontSize='h5.fontSize'style={{position:'absolute',top:'265px'}} fontWeight={500}>Feels like</Box>
                        <Box  fontStyle='italic'fontSize='h3.fontSize' style={{position:'absolute',top:'285px',color:'#f5f5f5'}}>{feels}&deg;</Box>
                        
                    </CardActionArea>
                 </Grid>
                    <Grid item component={Card} xs={12}  md={5} style={{position:'relative',backgroundColor:'whitesmoke',borderBottom:'10px solid' + color}} className={styles.card} >
                        <CardActionArea gutterBottom style={{margin:'10px 0'}}>
                        <Box  fontWeight={700} fontSize='h5.fontSize'gutterBottom >{`${description.charAt(0).toUpperCase() + description.slice(1)}`}</Box>

                        </CardActionArea >
                        <CardActionArea gutterbottom style={{ backgroundColor:color}}>
                            <h1 style={{margin:'50px',color:'white'}}><i className={`wi ${icon} display-1`}></i></h1>
                        </CardActionArea>

                        <CardContent>
                            <Grid container spacing={4} justify='center'>
                                <Grid item>
                                    <span><Typography color='textSecondary' style={{display:'inline-block'}}>Max Temp:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5' style={{display:'inline-block'}}>{maxTemp}&deg;c</Typography></span>
                                    &nbsp;&nbsp;
                                    <span><Typography color='textSecondary' gutterBottom style={{display:'inline-block'}}>Min Temp:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5'style={{display:'inline-block'}}>{minTemp}&deg;c</Typography></span>
                                
                                </Grid>
                                    

                                <Grid item>
                                    <span><Typography color='textSecondary' gutterBottom style={{display:'inline-block'}}>Humidity:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5' style={{display:'inline-block'}}>{humidity}</Typography>&#37;</span>
                                    &nbsp;&nbsp;
                                    <span><Typography color='textSecondary' style={{display:'inline-block'}}>Pressure:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5' style={{display:'inline-block'}}>{pressure}</Typography>&nbsp;hPa</span>
                                </Grid>

                                <Grid item >
                                    <span><Typography color='textSecondary' style={{display:'inline-block'}}>Wind Direction:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5' style={{display:'inline-block'}}>{windDirection}&nbsp;&deg;</Typography></span>
                                    &nbsp;&nbsp;
                                    <span><Typography color='textSecondary' style={{display:'inline-block'}}>Wind Speed:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5'  style={{display:'inline-block'}}>{windSpeed}</Typography>&nbsp;m/sec</span>
                                
                                </Grid>
                                    

                                <Grid item>
                                    <span><Typography color='textSecondary' style={{display:'inline-block'}}>Cloudiness:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5' style={{display:'inline-block'}}>{cloudiness}</Typography>&#37;</span>
                                    &nbsp;&nbsp;
                                    <span><Typography color='textSecondary'  style={{display:'inline-block'}}>Visibility:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5'  style={{display:'inline-block'}}>{visibility}</Typography>&nbsp;meters</span>
                                   
                                </Grid>
                                <Grid item>
                                     <span><Typography color='textSecondary'  style={{display:'inline-block'}}>Sunrise:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5' style={{display:'inline-block'}}>{ new Date(sunrise).toString().slice(15,24)} am</Typography></span>
                                    &nbsp;&nbsp;
                                    <span><Typography color='textSecondary'  style={{display:'inline-block'}}>Sunset:&nbsp;&nbsp;</Typography></span>
                                    <span><Typography  variant='h5' style={{display:'inline-block'}}>{new Date(sunset).toString().slice(15,24) } pm</Typography></span>
                               
                                </Grid>
                            </Grid>
                    </CardContent>
                </Grid>
            </Grid>
           {/* <div className='cards pt-4'>
           {city && <h3>Location:{city}</h3>}
           <h1 className='py-4'>
           <i className={`wi ${icon} display-1`}></i>
           </h1>
            
            {temperature && <h5 className='py-2'>Temperature:{temperature}&deg;</h5>}
            {minTemp && <span className='px-4'>Min:{minTemp}&deg;</span>}
            {maxTemp && <span className='px-4'>Max:{maxTemp}&deg;</span>}
            
            {humidity  && <p>Humidity:{humidity}</p>}
            {pressure && <p>Pressure:{pressure}</p>}
            {error && <div className='alert alert-danger mx-5' role='alert'>{error}</div>}
     */}
        
        
       </div>
    )
}


export default ForeCast;