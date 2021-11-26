import axios from 'axios';
import {saveAs} from 'file-saver';
import {useState} from 'react';
import './salesorder.css';

const SalesOrder = ()=>{

  const [name,setName]= useState("");
  const [soNumber,setSONumber] = useState("SO1000");
  const [price1,setPrice1] = useState(0);
  const [price2,setPrice2] = useState(0);

  const [poRef, setPoRef] = useState("");
  const [poDate,setPoDate] = useState("");
  const [dCompanyName,setDCompanyName] = useState("VIT Enterprise");
  const [dCompanyAddress,setDCompanyAddress] = useState("Address1");
  const [dCompanyGSTIN,setDCompanyGSTIN] = useState("29AAACP1234M1Z0");
  const [dCompanyStateName,setDCompanyStateName] =useState("Tamil Nadu");
  const [dCompanyStateCode,setDCompanyStateCode] = useState(29);
  const [dCompanyContact,setDCompanyContact] = useState(9012901290);
  const [dCompanyEmail,setDCompanyEmail] = useState("contact@gmail.com");
  const [dCompanyWebstie,setDCompanyWebsite] = useState("https://vit.ac.in");


  const handleSONumber = (e)=>{
    setSONumber(e.target.value)
  }

  const handlePrice1 = (e)=>{
    setPrice1(e.target.value)
  }

  const handlePrice2 = (e)=>{
    setPrice2(e.target.value)
  }

  const handlePORef = (e)=>{
    setPoRef(e.target.value)
  }

  const handlePODate = (e)=>{
    setPoDate(e.target.value);
  }

  const handleDCompanyName = (e)=>{
    setDCompanyName(e.target.value);
  }

  const handleDCompanyAddress = (e)=>{
    setDCompanyAddress(e.target.value);
  }

  const handleDCompanyGSTIN = (e)=>{
    setDCompanyGSTIN(e.target.value);
  }

  const handleDCompanyStateName = (e)=>{
    setDCompanyStateName(e.target.value);
  }

  const handleDCompanyStateCode = (e)=>{
    setDCompanyStateCode(e.target.value);
  }

  const handleDCompanyContact =(e)=>{
    setDCompanyContact(e.target.value);
  }

  const handleDCompanyEmail =(e)=>{
    setDCompanyEmail(e.target.value);
  }

  const handleDCompanyWebsite =(e)=>{
    setDCompanyWebsite(e.target.value);
  }


  const createAndDownloadPdf =async()=>{
      const billState = {
        name,
        poRef,
        poDate,
        soNumber,
        price1,
        price2,
      }
      console.log(billState)

      await axios.post("/create-pdf" , billState);
      const response = await axios.get("/fetch-pdf", {responseType:'blob'})
      const pdfBlob = await new Blob([response.data], {type:'application/pdf'});

      await saveAs(pdfBlob,`${name}.pdf`)
  }

  return (
    <div className="Invoice">
      <h1>Sales Order Generation</h1>
     <div className="form">
      {/* Distributor Details */}
        <input type="text" placeholder="Distributor Company Name" name="name" onChange={handleDCompanyName} value={dCompanyName} disabled/>
        <input type="text" placeholder="Distributor Address" name="name" onChange={handleDCompanyAddress} value={dCompanyAddress} disabled/>
        <input type="text" placeholder="Distributor Company GSTIN/UIN" name="name" onChange={handleDCompanyGSTIN} value={dCompanyGSTIN} disabled/>
        <input type="text" placeholder="Distributor Company State Name" name="name" onChange={handleDCompanyStateName} value={dCompanyStateName} disabled/>
        <input type="text" placeholder="Distributor Company State Code" name="name" onChange={handleDCompanyStateCode} value={dCompanyStateCode} disabled/>
        <input type="text" placeholder="Distributor Company Contact" name="name" onChange={handleDCompanyContact} value={dCompanyContact} disabled/>
        <input type="text" placeholder="Distributor Company Email" name="name" onChange={handleDCompanyEmail} value={dCompanyEmail} disabled/>
        <input type="text" placeholder="Distributor Company Website" name="name" onChange={handleDCompanyWebsite} value={dCompanyWebstie} disabled/>


      <input type="text" placeholder="Sales Order Number(VoucherNo)" name="soNumber" value={soNumber} onChange={handleSONumber}/>
      {/* so date */}
      <input type="date" placeholder= "Sales Order Date" />
      {/* mode/terms of payment */}
      <input type="text" placeholder= "Mode/Terms of Payment"  />
      {/* Other reference */}
      <input type="text" placeholder= "Other Reference(s)" />
      {/* Despatch through */}
      <input type="text" placeholder= "Despatch through" />
      {/* Destination */}
      <input type="text" placeholder= "Destination" />
      {/* Terms of Delivery */}
      <input type="text" placeholder= "Terms of Delivery" />

      
      {/* Salesperson */}
      <input type="text" placeholder="Sales person" />
      {/*Sales Order Made by */}
      <input type="text" placeholder="Sales order made by" />


      {/* Despatch to */}
        <input type="text" placeholder="Client Company Name" />
        <input type="text" placeholder="Client Address" />
        <input type="text" placeholder="Client GSTIN/UIN" />
        <input type="text" placeholder="Client State Name" />
        <input type="text" placeholder="Client State Code" />

      
      {/* Invoice to */}
      <input type="text" placeholder="Client Company Name" />
        <input type="text" placeholder="Client Address" />
        <input type="text" placeholder="Client GSTIN/UIN" />
        <input type="text" placeholder="Client State Name" />
        <input type="text" placeholder="Client State Code" />



      <input type="text" placeholder="Supplier Ref" name="poRef" onChange={handlePORef} />
      <input type="date" placeholder="Purchase Order Date" name="poRef" onChange={handlePODate} />
      <input type="file" name="poFile" placeholder="Upload PO file" />
 
 

      <input type="number" placeholder="Price 1" name="price1" onChange={handlePrice1}/>
      <input type="number" placeholder="Price 2" name="price2"  onChange={handlePrice2} />

     </div>
      <button onClick={createAndDownloadPdf}>
        Download PDF
      </button>

    </div>
  );

}


export default SalesOrder;