import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REMOVE_ALL } from './actions/actionTypes';
import './payment.css';



const PaymentScreen = () =>{

    let navigate = useNavigate(); 

    const dispatch = useDispatch();

    const order = useSelector(state => state.addedItems);
    const totalCost = useSelector(state => state.total);
    const orderDetails = {order:order,cost:totalCost.toFixed(2)};

    const { register, handleSubmit, formState: { errors }, formState } = useForm();
    const onSubmit = async data => {
    
    if (data && data.same === "Yes") {
        
        data.baddr = data.addr
        data.bcity = data.city
        data.bprov = data.prov
        data.bpc = data.pc

        
        const details = data
         orderDetails['name'] = data.name
         orderDetails['contact'] = data.phone
         orderDetails['email'] = data.email

        //Goes to Pizza Assembly Webservice
         console.log(orderDetails)

        //Goes to Pizza Store Webservice
        console.log(details)
        console.log( orderDetails)

        dispatch({type: REMOVE_ALL})
        navigate('/')
    } 
    if(data && data.same !== "Yes"){
        const details = data

        orderDetails['name'] = data.name
        orderDetails['contact'] = data.phone
        orderDetails['email'] = data.email

        //Goes to Pizza Assembly Webservice
         console.log(orderDetails)

        //Goes to Pizza Store Webservice
        console.log(details)

        dispatch({type: REMOVE_ALL})
        navigate('/')
    }else {
      console.log(errors)
    }
  };

    

    function SetBilling() {
  
            document.getElementById('billing').style.display="none"
        
    }

    return(
      
            <div className="container mt-5 px-5">
                <div className="mb-4" style={styles.text}>
                    <h2>Confirm order and pay</h2> <span>We will start your pizza upon payment</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card p-3">
                                <h6 className="text-uppercase" style={styles.text}>Payment details</h6>
                                <div className="inputbox mt-3"> <input type="text" name="name" className="form-control" required="required" {...register("name")}/> <span>Name on card</span> </div>
                                <div className="inputbox mt-3"> <input type="text" name="email" className="form-control" required="required" {...register("email")}/> <span>Email</span> </div>
                                <div className="inputbox mt-3"> <input type="text" name="name" className="form-control" required="required" {...register("phone")}/> <span>Phone</span> </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 mr-2"> <input type="text" name="cc-num" className="form-control" required="required"{...register("cc-num")}/> <i className="fa fa-credit-card"></i> <span>Card Number</span> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex flex-row">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="exp" className="form-control" required="required" {...register("exp")}/> <span>Expiry</span> </div>
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="cvv" className="form-control" required="required" {...register("cvv")}/> <span>CVV</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mb-4">
                                    <h6 className="text-uppercase" style={styles.text}>Delivery Address</h6>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="addr" className="form-control" required="required" {...register("addr")}/> <span>Street Address</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="city" className="form-control" required="required" {...register("city")}/> <span>City</span> </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="prov" className="form-control" required="required" {...register("prov")}/> <span>Province</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="pc" className="form-control" required="required" {...register("pc")}/> <span>Postal Code</span> </div>
                                        </div>
                                    </div>
                                    <h6 className="text-uppercase" style={styles.text}>Billing Address The Same As Delivery</h6>
                                    <div className="row mt-3">
                                    <div className="col-md-6">
                                        <select  name="same" className="form-select form-select-sm" {...register("same")} onChange={SetBilling}>
                                            <option name="default">...</option>
                                            <option name="yes">Yes</option>  
                                        </select>
                                        
                                        </div>
                                    </div>
                                    
                                </div>
                                <div id="billing" className="mt-4 mb-4" style={{"display":"block"}}>
                                    <h6 className="text-uppercase" style={styles.text}>Billing Address</h6>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="baddr" className="form-control" {...register("baddr")}/> <span>Street Address</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="bcity" className="form-control" {...register("bcity")} /> <span>City</span> </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="bprov" className="form-control"{...register("bprov")} /> <span>Province</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputbox mt-3 mr-2"> <input type="text" name="bpc" className="form-control" {...register("bpc")} /> <span>Postal code</span> </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="mt-4 mb-4 d-flex justify-content-between">  
                            <button className="btn btn-success px-5" style={styles.standards}
                                type="submit">Pay ${orderDetails.cost}</button> </div>
                            </div>
                        
                       
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card card-blue p-3 text-black mb-3" style={styles.text}> <span>You have to pay</span>
                                <div className="d-flex flex-row align-items-end mb-3">
                                    <h1 className="mb-0 ">${orderDetails.cost} </h1> 
                                </div> 
                            </div>
                        </div>
                        
                  </div>
                </form>
            </div>
            
       
    );

}

const styles = {

    standards:{
        backgroundColor:'#981A1A',
        
    },
    text: {
        fontFamily:'Helvetica Neue',
    }
}


export default PaymentScreen;