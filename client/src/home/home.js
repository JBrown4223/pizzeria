import React from 'react';
import { useNavigate } from "react-router-dom";

import styles from './style';
import map from '../images/map.png';




const HomeScreen = ()=>{

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/order`; 
      navigate(path);
    }
    

    return (

        <div>
            <div style={styles.jumbotron}></div>
            
                <div clasname="row" style={styles.container}>
                    
                    <div className="col-4">
                        <button
                            className="btn btn-success px-10"
                            style={styles.button}
                            onClick={() =>{
                                routeChange()
                            }}
                        >Order</button>
                    </div>
                    
                    <div className="col-4">
                        <h4 style={styles.hoursTitle}>Hours of Operation</h4>
                        <ul>
                            <li>Mon - Thurs: 11am - 11pm</li>
                            <li>Fri - Sat: 11am - 2am</li>
                            <li>Sun: 11am - 7pm</li>
                        </ul>
                        
                    </div>
                    
                    
                    <div className='col-4'>
                        <h4 style={styles.hoursTitle}>Location</h4>
                        <img src={map} alt='find us here' style={styles.map}/>
                    </div>
                    <div className='row'></div>
                    
                </div>
                
           
        </div>
    )

}
export default HomeScreen


