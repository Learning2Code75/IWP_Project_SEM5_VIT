import React from 'react';

const ViewClient = ()=>{
    return(
        <div>
            		<h1>
			View All Clients
		</h1>
		<div className="functionalityDashboard">
			<div className="fDCard">
				<h3>Client ID:10001</h3>
				<p>Client Name:Client1</p>
				<p>Client Email:client1@gmail.com</p>	
				<p>Client Phone: 9809898089</p>
				<button>Delete </button>

			</div>
			<div className="fDCard">
				<h3>Client ID:10002</h3>
				<p>Client Name:Client2</p>
				<p>Client Email:client2@gmail.com</p>	
				<p>Client Phone: 9809898089</p>
				<button>Delete </button>

			</div>
			<div className="fDCard">
				<h3>Client ID:10002</h3>
				<p>Client Name:Client2</p>
				<p>Client Email:client2@gmail.com</p>	
				<p>Client Phone: 9809892089</p>
				<button>Delete </button>

			</div>
			<div className="fDCard">
					<p>Full client information fetched from database on click of the card.</p>
			</div>

			
		</div>

        </div>        
    )
}

export default ViewClient;