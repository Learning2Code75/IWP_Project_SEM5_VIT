import axios from 'axios';
import {saveAs} from 'file-saver';
import {useState} from 'react';
import './invoice.css';

const Invoice = ()=>{

  const [name,setName]= useState("");
  const [receiptId,setReceiptId] = useState(0);
  const [price1,setPrice1] = useState(0);
  const [price2,setPrice2] = useState(0);

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
      <input type="text" placeholder="Name" name="name" onChange={handleName}/>
      <input type="number" placeholder="Receipt ID" name="receiptId" onChange={handleReceiptId}/>
      <input type="number" placeholder="Price 1" name="price1" onChange={handlePrice1}/>
      <input type="number" placeholder="Price 2" name="price2"  onChange={handlePrice2} />

      <button onClick={createAndDownloadPdf}>
        Download PDF
      </button>

    </div>
  );

}


export default Invoice;