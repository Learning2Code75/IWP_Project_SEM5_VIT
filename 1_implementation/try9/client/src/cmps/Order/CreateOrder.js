import SalesOrder from '../SalesOrder/SalesOrder';
import Invoice from '../Invoice/Invoice';


const CreateOrder = () =>{
    return(
<div>
<h1>
        Create Order
    </h1>
    <div>
        <h1>Order details</h1>
        <div className="form">
            <input type="text" placeholder="Client Name" />
            <input type="text" placeholder="Client ID" />

            <input type="text" placeholder="Sales person" />
            <input type="text" placeholder ="Order ID" />
        </div>
        <div>
            <SalesOrder />
        </div>
        <div>
            <Invoice />
        </div>
        <div>
            {`packed/dispatched/Delivered`}
            {`upload LR copy when packed, dispatched : upload Acknowledgement document when delivered`}
        </div>

        


    </div>
    </div>
    );
}

export default CreateOrder;