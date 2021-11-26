import React from 'react';
import {IoCreateOutline} from 'react-icons/io5';
import {BsViewStacked} from 'react-icons/bs';
import {MdCreate,MdDeleteOutline,MdUpdate} from 'react-icons/md';
import {DiGoogleAnalytics} from 'react-icons/di';
import {HiViewGrid} from 'react-icons/hi';
const FunctionalityDashboard = ()=>{
	return(
		<>	
			<h1 className="fDHead">
				FunctionalityDashboard
			</h1>
			<div className="functionalityDashboard">
				<div className="fDCard">
					<div className="actionButton">
						<IoCreateOutline />	
					</div>
					<h3>Create Client</h3>
					<p>Add a new client to the system</p>
				</div>
				<div className="fDCard">
					<div className="actionButton">
						<HiViewGrid  />
					</div>
					<h3>View Clients</h3>
					<p>List of all clients with their details</p>
				</div>
				<div className="fDCard">
					<div className="actionButton">
					<MdUpdate />
					<MdDeleteOutline  />
					</div>
					<h3>Update/Delete Client</h3>
					<p>Update or Delete Client Information</p>
				</div>
				<div className="fDCard">
				<div className="actionButton">
						<IoCreateOutline />	
					</div>
					<h3>Create Product</h3>
					<p>Add a new Product to the system</p>
				</div>
				<div className="fDCard">
				<div className="actionButton">
						<HiViewGrid  />
					</div>
					<h3>View Products</h3>
					<p>Inventory of Products shown with stock.</p>
				</div>
				<div className="fDCard">
					<div className="actionButton">
					<MdUpdate />
					<MdDeleteOutline  />
					</div>
					<h3>Update/Delete Product</h3>
					<p>Update or Delete Product Information</p>
				</div>
				<div className="fDCard">
					<div className="actionButton">
					<MdUpdate />
					</div>
					<h3>Add Proudcts</h3>
					<p>Add Products in the system when delivery is received from supplier.</p>
				</div>
				<div className="fDCard">
				<div className="actionButton">
						<IoCreateOutline />	
					</div>
					<h3>Register User</h3>
					<p>Add a new user to the system: user could be of type: Salesperson,Manager,Financier,Warehouser</p>
				</div>
				<div className="fDCard">
				<div className="actionButton">
						<HiViewGrid  />
					</div>
					<h3>View all users</h3>
					<p>View all users or users of a type</p>
				</div>
				<div className="fDCard">
					<div className="actionButton">
						<MdUpdate />
						<MdDeleteOutline  />
					</div>
					
					<h3>Update / Delete User</h3>
					<p>Update user information or delete the user.</p>
				</div>
				<div className="fDCard">
				<div className="actionButton">
						<IoCreateOutline />	
					</div>
					<h3>Create Order</h3>
					<p>Create new order for a client.Create Sales order, Invoice along with it.</p>
				</div>
				<div className="fDCard">
				<div className="actionButton">
						<HiViewGrid  />
					</div>
					<h3>View all orders</h3>
					<p>View all orders with their sales orders, invoice, payment status, delivery status.</p>
				</div>

				<div className="fDCard">
					<div className="actionButton">
						<MdUpdate />
						<MdDeleteOutline  />
					</div>
					<h3>Update /Cancel Order</h3>
					<p>Update inovice , sales order details, payment status,delivery status.</p>
				</div>

				<div className="fDCard">
				<div className="actionButton">
						<DiGoogleAnalytics />
				</div>
					<h3>View Analytics</h3>
					<ul>
						<li>Amount sold by client</li>
						<li>Amount sold by product name</li>
						<li>Number of pcs sold by client</li>
						<li>Number of pcs sold by product name</li>
						<li>Payment due per client</li>
						<li>Total amount sold per product</li>
						<li>Total amount sold per client</li>
						<li>Total amount sold in orders date separated. </li>
						<li>Total number of pcs sold in orders date separated</li>
					</ul>
				</div>


	

			</div>
		</>
	)
}

export default FunctionalityDashboard;