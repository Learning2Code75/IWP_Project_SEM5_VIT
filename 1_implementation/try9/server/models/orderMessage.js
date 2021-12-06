const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    clientName:String,
    clientId:String,
    salesPerson:String,
    orderId:Number,
    salesOrder:{

    },
    invoice:{

    },
    wayBill:{

    },
    orderDeliveryState:String,
    orderPaymentState:String,
    orderCancelState:String,
    orderPaymentDue:Number,
    orderPayments:[{
        paymentDate:Date,
        payementAmount:Number,
        paymentMethod:String,
        payementProof:String
    }]


},{
  timestamps: true
})

const OrderMessage = mongoose.model('OrderMessage',orderSchema);

module.exports = OrderMessage;