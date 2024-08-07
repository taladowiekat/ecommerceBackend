import  mongoose, { Schema, Types, model } from "mongoose";

const orderSchema = new Schema({
    userId : {
        type:Types.ObjectId,
        ref : 'User',
        required: true,
    },
    products:[
        {
            productId : {type:Types.ObjectId,ref : "Product",required: true,},
            quantity: {type:Number , default:1},
            unitPrice: {type:Number, required: true},
            finalPrice: {type:Number, required: true}

        }
    ],
    finalPrice: {
        type:Number, 
        required: true
    }
    ,
    address: {
        type:String, 
        required:true
    }
    ,
    phoneNumber: {
        type:String, 
        required:true
    }
    ,
    paymentType: {
        type:String, 
        enum: ['cash', 'cart'],
        default: 'cash'
    },
    status:{
        type:String,
        default:'Pending',
        enum:["Pending", "Cancelled" , "Confirmed" , "Onway" ,"Delivered" ],
    },
    notes: {
        type:String,
    },
    rejectedReason: {
        type:String,
    },
    cuoponeId:{
        type:Types.ObjectId,
        ref:'Cuopon'
    },
    updatedBy:{type:Types.ObjectId,ref:'User' , required:true},
},
{
    timestamps:true,
});

const orderModel = model('Order', orderSchema);

export default orderModel