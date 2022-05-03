import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomeScreen from './home/home';
import OrderScreen from './order/order';
import ShoppingCart from './cart/cart';
import PaymentScreen from './other-components/payment';
import AboutScreen from './other-components/about';
import ContactScreen from './other-components/contact';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Navbar />
            <Routes>
                        <Route exact path="/" element={<HomeScreen/>} />
                        <Route exact path="/order" element={ <OrderScreen /> }/>
                        <Route exact path="/cart" element={ <ShoppingCart /> }/>
                        <Route exact path="/payment" element={ <PaymentScreen /> }/>
                        <Route exact path="/contact" element={ <ContactScreen/>} />
                        <Route exact path="/about" element={ <AboutScreen /> }/>
                    

            </Routes>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;

const Header = () =>{
  return(
    
       <Link className="text-decoration-none" to="/"><header style={styles.header}>Johnny's Pizzeria</header></Link>
    
  )
}

const Footer = () =>{

  return(
  
      <footer style={styles.footer}>Jonathan Brown - April 2022</footer>
    

  );

  
}

const Navbar = ()=>{
  return(
          <nav className="nav-wrapper" style={styles.navBar}>
          
                  <ul className="left">
                      <li style={styles.navbarText}><Link className="text-decoration-none" to="/order">Order</Link></li>
                      <li style={styles.navbarText}><Link className="text-decoration-none" to="/about">About</Link></li>
                      <li style={styles.navbarText}><Link className="text-decoration-none" to="/contact">Contact Us</Link></li>
                  </ul>
                  
                  <ul className="right">
                    
                      <li><Link className="text-decoration-none" to="/cart"><i className="fa fa-shopping-cart fa-1x"></i></Link></li>
                  </ul>
              
          </nav>  
  )
}

const styles = {
    
    navBar: {

        backgroundColor:'#E09494',
        height:75,
        alignItems: 'left',
        justifyContent: 'left',
        boarder: 0

    },
    navbarText: {
       
        fontFamily:'Helvetica Neue',
        fontSize: 40,
        color: '#F2EAEA'

    },
    footer: {
      backgroundColor:'#981A1A',
      color: '#F2EAEA',
      
    },
    header: {
      

      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#981A1A',
      height: 200,
      fontFamily:'Helvetica Neue',
      color: '#F2EAEA',
      fontSize: 80,
      

    },
}