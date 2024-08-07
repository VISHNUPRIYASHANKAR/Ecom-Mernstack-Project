// const Order = require("../Models/Ordermodel");
// const Productmodel = require('../Models/ProductModel');



// exports.createOrder = async (req, res, next) => {
//     const cardItems = req.body;
//     // console.log(cartItems)
//     // const price = Number(cardItems.reduce((acc, item) => (acc + item.product.price * item.kg), 0)).toFixed(2);
//     const price = Number(cardItems.reduce((acc, item) => (acc + item.price * item.quantity), 0)).toFixed(2);
//     const order = await Order.create({cardItems, price})
//     console.log(price)
//     res.json(
//         {
//             success:true,
//             order
//         }
//     )
// }


// exports.orderlist = [
//     (req,res)=>{
//       Order.find()
//       .then((product)=>{
//         res.send(product)
//       })
//       .catch((err)=>{
//         res.send(err)
//       })
//     }
//   ]

const Order = require("../Models/Ordermodel");
const Productmodel = require('../Models/ProductModel');

// Create Order
exports.createOrder = async (req, res, next) => {
    try {
        const cartItems = req.body;

        if (!Array.isArray(cartItems) || cartItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Cart items are required and should be an array.'
            });
        }

        // Calculate total price
        const price = Number(cartItems.reduce((acc, item) => (acc + item.price * item.quantity), 0)).toFixed(2);

        // Create order
        const order = await Order.create({ cartItems, price });

        res.status(201).json({
            success: true,
            order
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while creating order'
        });
    }
};

// List Orders
exports.orderList = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching orders'
        });
    }
};
