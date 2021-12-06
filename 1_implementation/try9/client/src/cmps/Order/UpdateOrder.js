import SalesOrder from "../SalesOrder/SalesOrder";
import Invoice from "../Invoice/Invoice";
import React from "react"
const UpdateOrder = ()=>{
    return(
        <div>
            <h1>
				Update or Delete Order
			</h1>
			<div>
				<h1>Order details</h1>
				<div className="form">
                 <input type="text" placeholder="Client Name" />
                 <input type="text" placeholder="Client ID" />
                 <input type="text" placeholder="Sales person" />
                 <input type="text" placeholder ="Order ID" />	</div>
				<div>
					<SalesOrder />
				</div>
				<div>
					<Invoice />
				</div>
                <div>
                    
                </div>
			</div>
        </div>
    )
}
export default UpdateOrder;