import React,{useState} from 'react';

import {useDispatch} from 'react-redux';
import {createClient} from '../../actions/clients';


const CreateClient = ()=>{
	const dispatch = useDispatch();
	
	const [clientData,setClientData]= useState({
		clientCompanyName:'',
		clientContactPersonName:'',
		clientAddress:'',
		clientGST:'',
		clientPhoneNumber:'',
		clientDiscountRate:0,
		modeTermsOfPayment:'',
		clientEmail:'',
		clientWebsite:'',
		clientInstagram:'',
		clientFacebook:'',
		clientLinkedIn:'',
		clientTwitter:'',
		salespersonName:''
	})


	const clear =()=>{
		setClientData({
		clientCompanyName:'',
		clientContactPersonName:'',
		clientAddress:'',
		clientGST:'',
		clientPhoneNumber:'',
		clientDiscountRate:0,
		modeTermsOfPayment:'',
		clientEmail:'',
		clientWebsite:'',
		clientInstagram:'',
		clientFacebook:'',
		clientLinkedIn:'',
		clientTwitter:'',
		salespersonName:''
		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
		dispatch(createClient(clientData))
		clear();
	}
	console.log(clientData);
    return(
        <div>
			<h1>
				Create Client
			</h1>
			<div>
				<h1>Client details</h1>
				<form autoComplete="off" noValidate className="form" onSubmit={handleSubmit} >
					<input type="text" placeholder="Client Company Name" value={clientData.clientCompanyName} onChange={(e)=> setClientData({...clientData,clientCompanyName:e.target.value})} />
					<input type="text" placeholder="Client Contact Person Name" value={clientData.clientContactPersonName} onChange={(e)=> setClientData({...clientData,clientContactPersonName:e.target.value})} />
					<input type="text" placeholder="Client Address" value={clientData.clientAddress} onChange={(e)=> setClientData({...clientData,clientAddress:e.target.value})} />
					<input type="text" placeholder="Client GSTIN/UIN" value={clientData.clientGST} onChange={(e)=> setClientData({...clientData,clientGST:e.target.value})} />
					<input type="text" placeholder="Client Phone Number" value={clientData.clientPhoneNumber} onChange={(e)=> setClientData({...clientData,clientPhoneNumber:e.target.value})} />
					<input type="number" placeholder="Client Discount Rate"value={clientData.clientDiscountRate} onChange={(e)=> setClientData({...clientData,clientDiscountRate:e.target.value})} />
					<input type="text" placeholder="Mode/Terms of Payment" value={clientData.modeTermsOfPayment} onChange={(e)=> setClientData({...clientData,modeTermsOfPayment:e.target.value})} />

					<input type="email" placeholder="Client Email" value={clientData.clientEmail} onChange={(e)=> setClientData({...clientData,clientEmail:e.target.value})} />
					<input type="text" placeholder="Client Website" value={clientData.clientWebsite} onChange={(e)=> setClientData({...clientData,clientWebsite:e.target.value})} />
					<input type="text" placeholder="Client Instagram" value={clientData.clientInstagram} onChange={(e)=> setClientData({...clientData,clientInstagram:e.target.value})} />
					<input type="text" placeholder="Client Facebook" value={clientData.clientFacebook} onChange={(e)=> setClientData({...clientData,clientFacebook:e.target.value})} />
					<input type="text" placeholder="Client LinkedIN"  value={clientData.clientLinkedIn} onChange={(e)=> setClientData({...clientData,clientLinkedIn:e.target.value})}/>
					<input type="text" placeholder="Client Twitter" value={clientData.clientTwitter} onChange={(e)=> setClientData({...clientData,clientTwitter:e.target.value})} />


					<select name="order-operation" id="" value={clientData.salespersonName} onChange={(e)=> setClientData({...clientData,salespersonName:e.target.value})}>
						<option value="Select Salesperson">Select Salesperson</option>
						<option value="salesperson1">Salesperson1</option>
						<option value="salesperson2">Salesperson2</option>
						<option value="salesperson3">Salesperson3</option>
					</select>

					<button type="submit">Create Client </button>
					<button onClick={clear}>Clear</button>
				</form>

			</div>


        </div>
    );
}


export default CreateClient;