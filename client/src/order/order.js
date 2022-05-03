import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../other-components/actions/actionTypes';

import styles from './styles';
import pepperoni from '../images/pepperoni.webp'
import cheese from '../images/cheese.jpeg'
import vegan from '../images/vegan.jpeg'
import meat from '../images/meat.webp'
import noImage from '../images/logo512.png'


const OrderScreen = () =>{
    
    const items = useSelector(state => state.menu);

  
   const dispatch = useDispatch();

    console.log(items)
    
    

    /* Function get's the iterated name of the pizza and returns it's image */
    function getImage(name){
        switch(name){
            case "Pepperoni":
                return pepperoni
            case "Cheese":
                return cheese
            case "Vegan":
                return vegan
            case "Meat":
                return meat
            default:
                return noImage
             
        }
    }

     function handleClick (id) {

    
        console.log(id)
        dispatch({type: ADD_TO_CART, id: id})
    }
       
    

    let menuListing = items.map( item =>{
        return(
            
            <div className="card" key={item.id} style={styles.itemContainer}>
                    <div className="card-image" style={styles.img}>
                        <img src={getImage(item.name)} alt={item.title} />
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" >
                        <i className="fa fa-plus fa-1x"
                            onClick={()=>{handleClick(item.id)}}></i></span>
                    </div>
                    <div className="card-content">
                        <span className="card-title" style={styles.itemContainerText}>{item.size} {item.name}</span>
                        <span>{item.indredients.toString()}</span>
                        <p><b>Price: ${item.price}</b></p>
                    </div>
            </div>
        )
    })

    return(
       
            <div className="container" style={styles.mainContent}>
                <h3 className="center">Our Menu Offerings</h3>
                <div className="box" style={styles.container}>
                  <div className="row">
                      <div className="col-3">
                      {menuListing[0]}
                      </div>
                      <div className="col-3">
                      {menuListing[3]}
                      </div>
                      <div className="col-3">
                      {menuListing[6]}
                      </div>
                      <div className="col-3">
                      {menuListing[9]}
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      {menuListing[1]}
                      </div>
                      <div className="col-3">
                      {menuListing[4]}
                      </div>
                      <div className="col-3">
                      {menuListing[7]}
                      </div>
                      <div className="col-3">
                      {menuListing[10]}
                      </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-3">
                      {menuListing[2]}
                      </div>
                      <div className="col-3">
                      {menuListing[5]}
                      </div>
                      <div className="col-3">
                      {menuListing[8]}
                      </div>
                      <div className="col-3">
                      {menuListing[11]}
                      </div>
                  </div>
    
                  </div>
                    
                    
               
            </div>

        
        
    )

    
}



export default OrderScreen