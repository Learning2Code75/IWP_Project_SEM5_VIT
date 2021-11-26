import React from 'react';
const ViewOrders = ()=>{
    return(
        <div>
            <h1>
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
				
			</div>

        </div>
    )
};
export default ViewOrders;