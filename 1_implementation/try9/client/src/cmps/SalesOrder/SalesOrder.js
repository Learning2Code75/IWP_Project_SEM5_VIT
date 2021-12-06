import axios from 'axios';
import {saveAs} from 'file-saver';
import {useState} from 'react';
import './salesorder.css';

import {IoCreateOutline} from 'react-icons/io5';
import {AiOutlineDownload,AiFillCloseCircle} from 'react-icons/ai';

const SalesOrder = ({currId,setModal})=>{
  console.log(currId)
  const [name,setName]= useState("");
  const [soNumber,setSONumber] = useState("SO1000");
  const [price1,setPrice1] = useState(0);
  const [price2,setPrice2] = useState(0);

  
  const [soData,setSOData] = useState({
    
    
    dCompanyName:'',
    dCompanyAddress:'',
    dCompanyGSTIN:'',
    dCompanyStateName:'',
    dCompanyStateCode:'',
    dCompanyContact:'',
    dCompanyEmail:'',
    dCompanyWebstie:'',
    dCompanysoNumber:'',
    soDate:'',
    mode:'',
    other:'',
    despatchThrough:'',
    destination:'',
    terms:'',
    salesPerson:'',
    soMadeBy:'',
    clientCompanyName:'',
    clientAddr:'',
    clientGST:'',
    clientState:'',
    clientStateCode:'',
    invClientCompany:'',
    invClientAddr:'',
    invClientGST:'',
    invClientStateName:'',
    invClientStateCode:'',
    supplierRef:'',
    poDate:'',
    prod1:'',
    prod2:'',
    price1:'',
    price2:''
  })
  

  const createAndDownloadPdf =async(e)=>{
      // const billState = {
      //   name,
      //   poRef,
      //   poDate,
      //   soNumber,
      //   price1,
      //   price2,
      // }
      e.preventDefault();
      console.log(soData)
      // setPageState("invoiceGeneration")
      await axios.post("/create-pdf" , soData);
      const response = await axios.get("/fetch-pdf", {responseType:'blob'})
      const pdfBlob = await new Blob([response.data], {type:'application/pdf'});

      await saveAs(pdfBlob,`${name}.pdf`)
  }

  return (
    <div className="modal-background">
         <div className="Invoice">
      
     <form autoComplete="off" noValidate className="form" >
     <div style={{display:'flex',justifyContent:'left',marginBottom:'.5rem'}}>
        <AiFillCloseCircle style={{fontSize:'2rem',color:'red',cursor:'pointer'}} onClick={()=>{setModal(false)}} />
      </div>

     <h2>Create SalesOrder</h2>
      
      {/* Distributor Details */}
        <input type="text" placeholder="Distributor Company Name" name="name"  value={soData.dCompanyName} onChange={(e)=> setSOData({...soData,dCompanyName:e.target.value})}/>
        <input type="text" placeholder="Distributor Address" name="name"  value={soData.dCompanyAddress} onChange={(e)=> setSOData({...soData,dCompanyAddress:e.target.value})}/>
        <input type="text" placeholder="Distributor Company GSTIN/UIN" name="name"  value={soData.dCompanyGSTIN} onChange={(e)=> setSOData({...soData,dCompanyGSTIN:e.target.value})}/>
        <input type="text" placeholder="Distributor Company State Name" name="name"  value={soData.dCompanyStateName} onChange={(e)=> setSOData({...soData,dCompanyStateName:e.target.value})}/>
        <input type="text" placeholder="Distributor Company State Code" name="name"  value={soData.dCompanyStateCode} onChange={(e)=> setSOData({...soData,dCompanyStateCode:e.target.value})}/>
        <input type="text" placeholder="Distributor Company Contact" name="name"  value={soData.dCompanyContact} onChange={(e)=> setSOData({...soData,dCompanyContact:e.target.value})}/>
        <input type="text" placeholder="Distributor Company Email" name="name"  value={soData.dCompanyEmail} onChange={(e)=> setSOData({...soData,dCompanyEmail:e.target.value})}/>
        <input type="text" placeholder="Distributor Company Website" name="name"  value={soData.dCompanyWebstie} onChange={(e)=> setSOData({...soData,dCompanyWebstie:e.target.value})}/>


      <input type="text" placeholder="Sales Order Number(VoucherNo)" name="soNumber" value={soData.dCompanysoNumber} onChange={(e)=> setSOData({...soData,dCompanysoNumber:e.target.value})}/>
      {/* so date */}
      <input type="date" placeholder= "Sales Order Date" value={soData.soDate} onChange={(e)=> setSOData({...soData,soDate:e.target.value})}/>
      {/* mode/terms of payment */}
      <input type="text" placeholder= "Mode/Terms of Payment"  value={soData.mode} onChange={(e)=> setSOData({...soData,mode:e.target.value})}/>
      {/* Other reference */}
      <input type="text" placeholder= "Other Reference(s)" value={soData.other} onChange={(e)=> setSOData({...soData,other:e.target.value})}/>
      {/* Despatch through */}
      <input type="text" placeholder= "Despatch through" value={soData.despatchThrough} onChange={(e)=> setSOData({...soData,despatchThrough:e.target.value})}/>
      {/* Destination */}
      <input type="text" placeholder= "Destination" value={soData.destination} onChange={(e)=> setSOData({...soData,destination:e.target.value})}/>
      {/* Terms of Delivery */}
      <input type="text" placeholder= "Terms of Delivery" value={soData.terms} onChange={(e)=> setSOData({...soData,terms:e.target.value})}/>

      
      {/* Salesperson */}
      <input type="text" placeholder="Sales person" value={soData.salesPerson} onChange={(e)=> setSOData({...soData,salesPerson:e.target.value})}/>
      {/*Sales Order Made by */}
      <input type="text" placeholder="Sales order made by" value={soData.soMadeBy} onChange={(e)=> setSOData({...soData,soMadeBy:e.target.value})}/>


      {/* Despatch to */}
        <input type="text" placeholder="Client Company Name" value={soData.clientCompanyName} onChange={(e)=> setSOData({...soData,clientCompanyName:e.target.value})}/>
        <input type="text" placeholder="Client Address" value={soData.clientAddr} onChange={(e)=> setSOData({...soData,clientAddr:e.target.value})}/>
        <input type="text" placeholder="Client GSTIN/UIN" value={soData.clientGST} onChange={(e)=> setSOData({...soData,clientGST:e.target.value})}/>
        <input type="text" placeholder="Client State Name" value={soData.clientState} onChange={(e)=> setSOData({...soData,clientState:e.target.value})}/>
        <input type="text" placeholder="Client State Code" value={soData.clientStateCode} onChange={(e)=> setSOData({...soData,clientStateCode:e.target.value})}/>

      
      {/* Invoice to */}
      <input type="text" placeholder="Client Company Name" value={soData.invClientCompany} onChange={(e)=> setSOData({...soData,invClientCompany:e.target.value})}/>
        <input type="text" placeholder="Client Address" value={soData.invClientAddr} onChange={(e)=> setSOData({...soData,invClientAddr:e.target.value})}/>
        <input type="text" placeholder="Client GSTIN/UIN" value={soData.invClientGST} onChange={(e)=> setSOData({...soData,invClientGST:e.target.value})}/>
        <input type="text" placeholder="Client State Name" value={soData.invClientStateName} onChange={(e)=> setSOData({...soData,invClientStateName:e.target.value})}/>
        <input type="text" placeholder="Client State Code" value={soData.invClientStateCode} onChange={(e)=> setSOData({...soData,invClientStateCode:e.target.value})}/>



      <input type="text" placeholder="Supplier Ref" name="poRef"  value={soData.supplierRef} onChange={(e)=> setSOData({...soData,supplierRef:e.target.value})}/>
      <input type="date" placeholder="Purchase Order Date" name="poRef"  value={soData.poDate} onChange={(e)=> setSOData({...soData,poDate:e.target.value})}/>
      {/* <input type="file" name="poFile" placeholder="Upload PO file" value={soData.soNumber} onChange={(e)=> setSOData({...soData,dCompanyName:e.target.value})}/> */}
 

      <input type="text" placeholder="Product Name1" name="price1" value={soData.prod1} onChange={(e)=> setSOData({...soData,prod1:e.target.value})}/>
      <input type="text" placeholder="Product Name 2" name="price1" value={soData.prod2} onChange={(e)=> setSOData({...soData,prod2:e.target.value})}/>
      <input type="number" placeholder="Price 1" name="price1" value={soData.price1} onChange={(e)=> setSOData({...soData,price1:e.target.value})}/>
      <input type="number" placeholder="Price 2" name="price2"  value={soData.price2} onChange={(e)=> setSOData({...soData,price2:e.target.value})} />
      <button onClick={createAndDownloadPdf}>
        <IoCreateOutline/> Create SO and Download PDF <AiOutlineDownload/>
      </button>
      <button style={{backgroundColor:'red'}} onClick={()=>{setModal(false)}}>Cancel</button>
     </form>
      

    </div>
    </div>
  );

}


export default SalesOrder;