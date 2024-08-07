// const mongoose = require("mongoose")

// const OrderSchema = new mongoose.Schema(
// {
//     cardItems:{type:Array,required:true},
//     price:{type:Number,required:true},
// },{timestamps:true})
// const OrderModel = mongoose.model("Order",OrderSchema)

// module.exports = OrderModel


const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        cartItems: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                },
                name: { type: String, required: true },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true }
            }
        ],
        price: { type: Number, required: true, min: 0 }
    },
    { timestamps: true }
);

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
