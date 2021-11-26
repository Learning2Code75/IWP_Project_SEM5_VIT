import axios from 'axios';
import {saveAs} from 'file-saver';
import {useState} from 'react';
import './invoice.css';

const Invoice = ()=>{

  const [name,setName]= useState("");
  const [receiptId,setReceiptId] = useState(0);
  const [price1,setPrice1] = useState(0);
  const [price2,setPrice2] = useState(0);

  const [stateCodeSame,setStateCodeSame] = useState(true);
  const [finalAmount, setFinalAmount]=useState(0);


  const handleName = (e)=>{
    setName(e.target.value)   
  }

  const handleReceiptId = (e)=>{
    setReceiptId(e.target.value)
  }

  const handlePrice1 = (e)=>{
    setPrice1(e.target.value)
  }

  const handlePrice2 = (e)=>{
    setPrice2(e.target.value)
  }

  const createAndDownloadPdf =async()=>{
      const billState = {
        name,
        receiptId,
        price1,
        price2
      }
      console.log(billState)

      await axios.post("/create-pdf" , billState);
      const response = await axios.get("/fetch-pdf", {responseType:'blob'})
      const pdfBlob = await new Blob([response.data], {type:'application/pdf'});

      await saveAs(pdfBlob,`${name}.pdf`)
  }

  return (

    <div className="Invoice">
      <h1>Invoice Generation</h1>
     <div className="form">
       <input type="text" placeholder="Name" name="name" onChange={handleName}/>
      <input type="number" placeholder="Receipt ID" name="receiptId" onChange={handleReceiptId}/>
      <input type="number" placeholder="Price 1" name="price1" onChange={handlePrice1}/>
      <input type="number" placeholder="Price 2" name="price2"  onChange={handlePrice2} />

      



     </div>

     {/* SGST-CGST(50-50 tax) */}
      {stateCodeSame && (finalAmount<100000 || finalAmount===100000 ) && <p>  No waybill required </p>}
      {stateCodeSame && (finalAmount>100000  ) && <p>  gernerate waybill , enter waybill detail </p>}

     {/* IGST(100 tax) */}
      {!stateCodeSame && ((finalAmount<50000 || finalAmount===50000 )) && <p>  No waybill required</p>}
      {!stateCodeSame && ((finalAmount>50000  )) && <p>  gernerate waybill , enter waybill detail</p>}

      {/* Calculate tax for each product according to tax percent stored for that product */}

      {/* Bank details */}

      <button onClick={createAndDownloadPdf}>
        Download PDF
      </button>

    </div>
  );

}


export default Invoice;