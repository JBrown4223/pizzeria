import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { ADD_QUANTITY, SUB_QUANTITY, REMOVE_ITEM } from '../other-components/actions/actionTypes';
import { useNavigate } from 'react-router-dom';


const ShoppingCart = () =>{

    const { items, total } = useSelector(state => ({
        items: state.addedItems,
        total: state.total
    }))

    let navigate = useNavigate(); 
    const dispatch = useDispatch();
    

    function handleClick(id) { dispatch({type: REMOVE_ITEM, id: id})}

    function increase(id){ dispatch({type:ADD_QUANTITY, id:id}) }

    function reduce(id){ dispatch({type:SUB_QUANTITY, id:id})}

     
            
          
    let addedItems = items.length ?

    (  
        items.map(item=>{
            return(
            
                <li className="collection-item avatar" key={item.id}>
                            
                            <div className="item-desc">
                                <span style={styles.title}>{item.size} - {item.name}</span>
                                
                                <p><b>Price: ${item.price}</b></p> 
                                <div style={styles.innerMenu}>
                                    <BiMinusCircle
                                        style={styles.icons}
                                        onClick={() =>{reduce(item.id)}}/>
                                    <p>
                                        <b>Quantity: {item.quantity}</b> 
                                        
                                    </p>
                                    <BiPlusCircle
                                    style={styles.icons}
                                    onClick={() =>{increase(item.id)}}/>
                                    
                                </div>
                                
                                <button className="btn btn-success px-7" style={styles.remove}
                                onClick={() => {handleClick(item.id)}}>Remove</button>
                            </div>
                            
                    </li>                        
            )
        })
    ):

    (
        <p>    Cart Empty </p>
    )
    return(
        <div className="container mt-5 px-5" style={styles.container}>
            <h3>Your Order</h3>
            <h5>Total : {total.toFixed(2)}</h5>
            <div className="cart mt-5 px-5">
                <ul className="collection">
                    {addedItems}
                </ul>
            </div> 
            <div><button className="btn btn-success px-7" style={styles.remove}
                                onClick={() => {navigate('/payment')}}>Pay Now</button></div>
            <div></div>
        </div>
    )

}

const styles = {

    container:{
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 150,
        marginRight: 150,
        marginBottom: 20

    },
    innerMenu:{
        display: 'flex'
    },
    title:{
        fontFamily:'Helvetica Neue',
        fontSize: 25,
        fontWeight: 'bold'
    },
    remove:{
        backgroundColor:'#981A1A',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons:{
       
        width: 20,
        height: 20,
       
    },
    
}

export default ShoppingCart