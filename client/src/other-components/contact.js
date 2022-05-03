import React from 'react';
import noImage from '../images/logo512.png'



const ContactScreen = () =>{

    return(
        <div className="container mt-5 px-5">

            <div className="row">
                <div className="mb-4-center" style={styles.text}>
                    <p>Here's How You Can Reach Me</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" >
                    <img src={noImage} alt="headshot" style={styles.img}/>
                </div>
                <div className="col-md-6" style={styles.text}>
                    <h2>Jonathan Brown</h2>
                    <h2>Phone: 647-525-6068</h2>
                    <h2>Email: jonathan.d.a.brown@gmail.com</h2>
                </div>
            </div>
            
        </div>
    )
}


const styles = {
    text:{
        fontFamily:'Helvetica Neue',
        fontSize: 24
    },
    img:{
        width: 350,
        height: 300
    }
}
export default ContactScreen;