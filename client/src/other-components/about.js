import React from 'react';




const AboutScreen = () =>{

    return(
        <div className="container mx-3 mt-5" style={styles.container}>
            
            <div className="row d-flex justify-content-center">
                <div className=" col d-flex justify-content-center">
                    <h1 style={styles.text}> About This Site</h1>
                </div>
            </div>

            <div className="row ">
                <div className="col justify-content left">
                    <p style={styles.descriptionText}>This Web App was created using React, Redux, and Bootstrap.
                    <br/>
                    <br/>
                    The goal is to demonstrate how to build a dynamic eCommerce site and coresponding webservices capable
                    of simmulating the full process of ordering a pizza.</p>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content left">
                    <ul className style={styles.listText}>
                        <li><p className="font-weight-bold">Phase 1: Working Site with Shopping Cart and Payment Processing</p></li>
                        <li><p>Phase 2: Webservice that stores each order and calculates Pizzeria's sales</p></li>
                        <li><p>Phase 3: Login profiles and access tokens using Redux, additions to the menu</p></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

const styles = {
    container:{
        display: 'block',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    text:{
      
        fontFamily:'Helvetica Neue',
        fontSize:40
    },
    descriptionText:{
        fontFamily:'Helvetica Neue',
        fontSize:20
    },
    listText:{
        fontFamily:'Helvetica Neue',
        fontSize:20
    }
}
export default AboutScreen