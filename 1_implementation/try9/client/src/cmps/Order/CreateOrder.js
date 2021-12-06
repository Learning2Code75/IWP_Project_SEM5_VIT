import React,{useState,useEffect} from 'react';
import SalesOrder from '../SalesOrder/SalesOrder';
import Invoice from '../Invoice/Invoice';
import {TiTick} from 'react-icons/ti';

import {useDispatch,useSelector} from 'react-redux';
import {createOrder} from '../../actions/orders';
import {getClients} from '../../actions/clients';


const CreateOrder = () =>{ 
    const [pageState,setPageState]=useState('orderCreation');
    
	
    const dispatch = useDispatch();

    const [orderData,setOrderData] = useState({
        clientName:'',
        clientId:'',
        salesPerson:'',
        orderId:''
    })

    const clear = ()=>{
        setOrderData({
            clientName:'',
            clientId:'',
            salesPerson:'',
            orderId:''    
        })
    }

    const handleOrderSubmit = (e)=>{
        e.preventDefault();
        dispatch(createOrder(orderData));
        clear();
        setPageState("salesOrderCreation");
    }

    const clients = useSelector((state)=> state.clients);
    console.log(clients)
    useEffect(() => {
        dispatch(getClients())        
    }, [dispatch])

    return(
        <div>
            <h1 className="order-heading">
                Create Order <span>{(pageState === "salesOrderCreation" || pageState === "invoiceGeneration") && (<TiTick style={{color:"green"}}/>) }</span>
            </h1>
            <div>

                {(pageState === "orderCreation") && (
                    <>
                        <h1>Order details</h1>
                        <form autoComplete="off" noValidate className="form" onSubmit={handleOrderSubmit}>
                        <select name="select-client" id=""  onChange={(e)=> {setOrderData({...orderData,clientName:e.target.value})
                                                                                                                 
                      }}>
                            <option value="client">Select a client</option>
                            {
                                clients.map((client)=>{
                                    const {clientCompanyName,_id} = client;
                                    return(<option key={_id} value={clientCompanyName}>{clientCompanyName}</option>)
                                })    
                            }
                        </select>    
                            {/* <input type="text" placeholder="Client Name" value={orderData.clientName} onChange={(e)=> setOrderData({...orderData,clientName:e.target.value})} /> */}
                            <input type="text" placeholder="Client ID" value={orderData.clientId} onChange={(e)=> setOrderData({...orderData,clientId:e.target.value})}/>

                            <input type="text" placeholder="Sales person" value={orderData.salesPerson} onChange={(e)=> setOrderData({...orderData,salesPerson:e.target.value})}/>
                            <input type="number" placeholder ="Order ID" value={orderData.orderId} onChange={(e)=> setOrderData({...orderData,orderId:e.target.value})}/>
                            <button type="submit">Create Order </button>
                            <button onClick={clear}>Clear</button>

                        </form>
                    </>
                ) }

                {/* <div>
                    <h1 className="order-heading">Sales Order Generation <span>{(pageState === "invoiceGeneration") && (<TiTick style={{color:"green"}}/>) }</span> </h1>
                    {(pageState === "salesOrderCreation")&&(<SalesOrder pageState={pageState} setPageState={setPageState} />)}
                </div>
                <div>
                    <h1 className="order-heading">Invoice Generation  </h1>
                    {(pageState === "invoiceGeneration")&&(<Invoice pageState={pageState} setPageState={setPageState}/>)}
                </div> */}
                {/*<div>
                    {`packed/dispatched/Delivered`}
                    {`upload LR copy when packed, dispatched : upload Acknowledgement document when delivered`}
                </div>
        */}
                


            </div>
            </div>
    );
}

export default CreateOrder;