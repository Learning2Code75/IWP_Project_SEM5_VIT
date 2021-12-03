import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getClients} from '../../actions/clients';



const ViewClient = ()=>{
	const dispatch = useDispatch();
	const clients = useSelector((state)=> state.clients);
	console.log(clients)

	useEffect(()=>{
		dispatch(getClients());
	},[dispatch])

    return(
        <div>
        <h1>
			View All Clients
		</h1>
		<div className="functionalityDashboard">
			{clients.map((client)=>{
				const {_id,
				clientCompanyName,
					clientContactPersonName,
					clientAddress,
					clientGST,
					clientPhoneNumber,
					clientDiscountRate,
					modeTermsOfPayment,
					clientEmail,
					clientWebsite,
					clientInstagram,
					clientFacebook,
					clientLinkedIn,
					clientTwitter,
					salespersonName} = client;
				return(<div key={_id } className="fDCard">
									<h3>Client ID:{_id}</h3>
									<p>clientCompanyName:{clientCompanyName}</p>
									<p>clientContactPersonName:{clientContactPersonName}</p>
									<p>clientAddress:{clientAddress}</p>
									<p>clientGST:{clientGST}</p>
									<p>clientPhoneNumber:{clientPhoneNumber}</p>
									<p>clientDiscountRate:{clientDiscountRate}</p>
									<p>modeTermsOfPayment:{modeTermsOfPayment}</p>
									<p>clientEmail:{clientEmail}</p>
									<p>clientWebsite:{clientWebsite}</p>
									<p>clientInstagram:{clientInstagram}</p>
									<p>clientFacebook:{clientFacebook}</p>
									<p>clientLinkedIn:{clientLinkedIn}</p>
									<p>clientTwitter:{clientTwitter}</p>
									<p>salespersonName:{salespersonName}</p>
								</div>)
			})}
			{/*<div className="fDCard">
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
			</div>*/}

			
		</div>

        </div>        
    )
}

export default ViewClient;