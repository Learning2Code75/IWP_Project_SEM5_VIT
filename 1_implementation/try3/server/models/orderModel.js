import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  orderID: String,
  orderDeliveryStatus:String,
  orderPaymentStatus:String,
  orderPaymentDue:{
    type:Number,
    default:0
  },
  createdAt:{
    type:Date,
    default: new Date()
  },
  orderClient:String,
  orderUser:String,
  orderSalesOrder:{
    sellerCompany:{
      name:String,
      address:String,
      gst:String,
      stateName:String,
      contact:String,
      email:String,
      code:String,

    },
    despatchToCompany:{
      name:String,
      address:String,
      gst:String,
      state:String,
      code:String
    },
    invoiceToCompany:{
      name:String,
      address:String,
      gst:String,
      state:String,
      code:String
    },
    voucherNumber:String,
    soNumber:String,
    dated:{
      type:Date,
      default:new Date()
    },
    modeTermsPayment:String,
    buyerRefOrderNo:String,
    otherRef:String,
    despatchThrough:String,
    destination:String,
    termsOfDelivery:String,

    productsTable:{
      items:[{
        description:String,
        hsn:String,
        dueOn:String,
        qty:Number,
        rate:Number,
        per:String,
        amount:Number
      }],
      centralTaxP:Number,
      stateTaxP:Number,
      discountP:Number,
      centralTax:Number,
      stateTax:Number,
      discount:Number,
      totalQty:Number,
      totalAmount:Number,

    },
     amountInWords:String,
     sellerBankDetails:{
      bankName:String,
      acNo:String,
      branchIFSC:String
     }
  },
  orderInvoice:{
    sellerCompany:{
      name:String,
      address:String,
      gst:String,
      stateName:String,
      contact:String,
      email:String,
      code:String,

    },
    despatchToCompany:{
      name:String,
      address:String,
      gst:String,
      state:String,
      code:String
    },
    invoiceNo:String,
    ewaybillNo:String,
    date:{
      type:Date,
      default:new Date()
    },
    deliveryNote:String,
    modeTermsPayment:String,
    supplierRef:String,
    otherRef:String,
    buyerOrderNo:String,
    date:String,
    despatchDocNo:String,
    deliveryNoteDate:String,
    despatchedThrough:String,
    destination:String,
    termsOfDelivery:String,
       productsTable:{
      items:[{
        description:String,
        hsn:String,
        dueOn:String,
        qty:Number,
        rate:Number,
        per:String,
        amount:Number
      }],
      centralTaxP:Number,
      stateTaxP:Number,
      discountP:Number,
      centralTax:Number,
      stateTax:Number,
      discount:Number,
      totalQty:Number,
      totalAmount:Number,

    },
     amountInWords:String,
     sellerBankDetails:{
      bankName:String,
      acNo:String,
      branchIFSC:String
     },

    declaration:String

  }


})

module.exports = mongoose.model("orders", orderSchema);

// make orderClient linked to clientModal and get all client information
// make orderUser linked to userModal and get all user information 