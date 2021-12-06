import React,{useState} from 'react';
import Invoice from '../cmps/Invoice/Invoice';
import SalesOrder from '../cmps/SalesOrder/SalesOrder';
import CreateOrder from '../cmps/Order/CreateOrder';
import ViewOrders from '../cmps/Order/ViewOrders';
import UpdateOrder from '../cmps/Order/UpdateOrder';
const Order = ()=>{
	const [page,setPage] = useState("select");
	const handleChange = (e)=>{
		setPage(e.target.value);
		console.log(page);
	}
	return(
		<div className="order">	
			<select name="order-operation" id="" value={page} onChange={handleChange} className="mainSelector">
				<option value="select">--Select--</option>
				<option value="create">Create Order</option>
				<option value="view">View all Orders</option>
				{/* <option value="updel">Update/Delete Order</option> */}
			</select>
			<p>{page}</p>

			{(page === "create") && <CreateOrder /> }
			{(page === "view") && <ViewOrders /> }
			{(page === "updel") && <UpdateOrder /> }



			<hr />
			{/* <h1>
				View All Orders
			</h1>
			<div className="functionalityDashboard">
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

			<hr />
	
			
			

		</div>
	)
}

export default Order;