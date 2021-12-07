import React,{useEffect, useState} from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'

import { useDispatch,useSelector } from 'react-redux';
import {getOrders,updateOrder} from '../../actions/orders';
import moment from 'moment'
import SalesOrder from '../SalesOrder/SalesOrder';
import Invoice from '../Invoice/Invoice';
const ViewOrders = ()=>{
	const dispatch = useDispatch();
	const orders = useSelector((state)=>state.orders);

	console.log(orders);

	useEffect(() => {
		dispatch(getOrders());
	}, [dispatch])

	const [currId,setCurrId] = useState('');

	const [modal,setModal] = useState(false);
	const [invoiceModal,setInvoiceModal] = useState(false);
	const [orderStatusUpdate,setOrderStatusUpdate] = useState('');

	

	// const [currId,setCurrId] = useState(null);
	const handleSalesOrderClick =(id)=>{
		setCurrId(id)
	}

	const handleInvoiceClick = (id)=>{
		setCurrId(id);
	}

	const handleCancelSubmit = (e)=>{
		e.preventDefault();
		console.log(currId)
		const updateData = {orderCancelState:"Cancelled"}
		dispatch(updateOrder(currId,updateData));

	}
	
	const [deliveryStatus,setDeliveryStatus] = useState('');
	const handleDeliverySubmit =(e)=>{
		e.preventDefault();
		console.log(currId);
		const updateData = {orderDeliveryState:deliveryStatus}
		dispatch(updateOrder(currId,updateData))
		setDeliveryStatus('');
	}	

	const [paymentStatus,setPaymentStatus] = useState('');
	const handlePaymentSubmit =(e)=>{
		e.preventDefault();
		console.log(currId);
		const updateData = {orderPaymentState:paymentStatus}
		dispatch(updateOrder(currId,updateData))
		setPaymentStatus('');
	}	


    return(
        <div>
            <h1>
				View All Orders
			</h1>

			<div style={{margin:'1rem 0'}}>
				{modal && <SalesOrder currId={currId} setModal={setModal} />}
				{invoiceModal && <Invoice currId={currId} setInvoiceModal={setInvoiceModal} />}

				{(orderStatusUpdate === "delivery") && (
						
						<form className="form" onSubmit={handleDeliverySubmit}>
							<div style={{display:'flex',justifyContent:'space-between',marginBottom:'.5rem',alignItems:'center'}}>
								<AiFillCloseCircle style={{fontSize:'2rem',color:'red',cursor:'pointer'}} onClick={()=>{setOrderStatusUpdate('')}} />
								<h2>Order ID:{currId}</h2>
							</div>
							<h1>Delivery Status</h1>

							<input type="text" placeholder="Enter delivery status" value={deliveryStatus} onChange={(e)=>{setDeliveryStatus(e.target.value)}} /> 
							<select name="payment-operation" value={paymentStatus} onChange={(e)=>{setPaymentStatus(e.target.value)}}>
								<option value="select">Select Delivery Status</option>
								<option value="Packaging">Quarter Paid</option>
								<option value="Dispatched">Half Paid</option>
								<option value="On The way">3 Quarter Paid</option>
								<option value="Delivered">Paid</option>
							</select>	
							<button type="submit" >
								Update Delivery
							</button>
							<button style={{backgroundColor:'red'}} onClick={()=>{setOrderStatusUpdate('')}}> Cancel</button>

								

						</form>
				)}
				
				{(orderStatusUpdate === "payment") && (
						
						<form className="form" onSubmit={handlePaymentSubmit}>
							<div style={{display:'flex',justifyContent:'left',marginBottom:'.5rem'}}>
								<AiFillCloseCircle style={{fontSize:'2rem',color:'red',cursor:'pointer'}} onClick={()=>{setOrderStatusUpdate('')}} />
								{currId}
							</div>
							<h1>Update Payment Status</h1>

							<input type="text" placeholder="Enter payment status" value={paymentStatus} onChange={(e)=>{setPaymentStatus(e.target.value)}} /> 
							<select name="payment-operation" value={paymentStatus} onChange={(e)=>{setPaymentStatus(e.target.value)}}>
								<option value="select">Select Payment Status</option>
								<option value="Quarter Paid">Quarter Paid</option>
								<option value="Half Paid">Half Paid</option>
								<option value="3 Quarter Paid">3 Quarter Paid</option>
								<option value="Paid">Paid</option>



							</select>

							<button type="submit" >
								Update Payment Status
							</button>
							<button style={{backgroundColor:'red'}} onClick={()=>{setOrderStatusUpdate('')}}>Cancel</button>

								

						</form>
				)}	

				{(orderStatusUpdate === "cancel") && (
						
						<form className="form" onSubmit={handleCancelSubmit}>
							<div style={{display:'flex',justifyContent:'left',marginBottom:'.5rem'}}>
								<AiFillCloseCircle style={{fontSize:'2rem',color:'red',cursor:'pointer'}} onClick={()=>{setOrderStatusUpdate('')}} />
								{currId}
							</div>
							<h1>Cancel Order</h1>

							<h2> Are you sure you want to mark the order as cancel? </h2>

							<button type="submit" >
								Cancel Order
							</button>
							<button style={{backgroundColor:'green'}} onClick={()=>{setOrderStatusUpdate('')}}>Dont Cancel</button>

								

						</form>
				)}


			</div>		


			<div className="functionalityDashboard">
				{
					orders.map((order)=>{
						const {_id,createdAt,clientId,clientName,orderId,salesPerson,orderDeliveryState,orderPaymentState,orderCancelState} = order;
						const dateOrder = new Date(createdAt);
						return(
							<div key={_id} className="fDCard">
								<p>OrderID:{_id}</p>
								<p>Date:{`${dateOrder.toLocaleDateString()}(${moment(createdAt).fromNow()})`}</p>
								<p>ClientID:{clientId}</p>
								<p>OrderNumber:{`Order${orderId}`}</p>
								<p>Client Name:{clientName}</p>
								<p>SalesPerson:{salesPerson}</p>

								<button onClick={()=>{handleSalesOrderClick(_id); setModal(true)}}>
									Make SalesOrder
								</button>
								<button onClick={()=>{handleInvoiceClick(_id); setInvoiceModal(true)}}>
									Make Invoice
								</button>
								<button onClick={()=>{handleInvoiceClick(_id); setOrderStatusUpdate("payment")}}>
									Update Payment
								</button>
								<button onClick={()=>{handleInvoiceClick(_id); setOrderStatusUpdate("delivery")}}>
									Update Delivery
								</button>
								<p>Payment:{orderPaymentState}</p>
								{(orderDeliveryState === "Delivered")?(
									<p>Delivery:<span style={{color:'green',fontWeight:'bold'}}>{orderDeliveryState}</span></p>
								):(
									<p>Delivery:<span>{orderDeliveryState}</span></p>
								)}
								

								<div>
									{(orderCancelState==="Cancelled")&&<p style={{fontWeight:'bold',color:'red'}}>Order Status:{orderCancelState}</p>}
								</div>

								<button onClick={()=>{setOrderStatusUpdate("cancel"); handleInvoiceClick(_id);}}>
									Cancel Order
								</button>

							</div>
						)	
					})
				}
			</div>

			{/* <div className="functionalityDashboard">
				<div className="fDCard">
					<h3>Order ID:10001</h3>
					<p>Client Name:Client1</p>
					<p>Payment Status:Rs.90000 due</p>	
					<p>Delivery Status : Delivered</p>
				</div>
				<div className="fDCard">
					<h3>Order ID:10002</h3>
					<p>Client Name:Client2</p>
					<p>Payment Status:Paid</p>	
					<p>Delivery Status : Delivered</p>
				</div>
				<div className="fDCard">
					<h3>Order ID:10003</h3>
					<p>Client Name:Client3</p>
					<p>Payment Status:Rs.10000 due</p>	
					<p>Delivery Status : Shipped from warehouse</p>
				</div>
				<div className="fDCard">
					<p>Full order information fetched from database on click of the card.</p>
				</div>
				
			</div> */}

        </div>
    )
};
export default ViewOrders;