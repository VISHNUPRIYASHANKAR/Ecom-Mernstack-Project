// import { useState, useEffect } from "react";

// function Cart() {
//     // Initialize the cart state from localStorage or default to an empty array
//     const [cart, setCart] = useState(() => {
//         const storedCart = localStorage.getItem("cartItems");
//         return storedCart ? JSON.parse(storedCart) : [];
//     });

//     // Update localStorage whenever the cart changes
//     useEffect(() => {
//         localStorage.setItem("cartItems", JSON.stringify(cart));
//     }, [cart]);

//     // Handle changes in quantity of items
//     const handleQuantityChange = (index, delta) => {
//         setCart(prevCart => {
//             const updatedCart = [...prevCart];
//             updatedCart[index].quantity = Math.max((updatedCart[index].quantity || 1) + delta, 1);
//             return updatedCart;
//         });
//     };

//     // Handle removing an item from the cart
//     const handleRemoveItem = (index) => {
//         setCart(prevCart => prevCart.filter((_, i) => i !== index));
//     };

//     // Handle placing an order
//     const placeOrderHandler = () => {
//         console.log("Placing order with items:", cart);

//         fetch("http://localhost:3000/createOrder", {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(cart)
//         })
//         .then(() => {
//             setCart([]);
//             localStorage.removeItem("cartItems");
//             alert("Order Successfully placed!");
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             alert("Order Failed");
//         });
//     };

//     // Calculate subtotal and total price
//     const subtotal = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
//     const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0).toFixed(2);

//     return (
//         <>
//             <h3 style={{margin:"100px",fontWeight:"bold"}}>Your Cart Items</h3>
//             {cart.length > 0 ? (
//                 cart.map((item, index) => {
//                     const quantity = item.quantity || 1;
//                     const totalPriceForItem = (item.price * quantity).toFixed(2);

//                     return (
//                         <div key={index} style={cartItemStyle} >
//                             <img
//                                 src={`http://localhost:3000/Uploads/${item.image}`}
//                                 alt={item.name}
//                                 style={imageStyle}
//                             />
//                             <div>
                                
//                                 <p>Name: {item.name}</p>
//                                 <p>Price: ${item.price.toFixed(2)}</p>
//                                 <p>Total Price: ${totalPriceForItem}</p>
//                             </div>
//                             <div style={controlsContainerStyle}>
//                                 <div style={quantityControlsStyle}>
//                                     <button
//                                         onClick={() => handleQuantityChange(index, -1)}
//                                         disabled={quantity <= 1}
//                                         style={buttonStyle}
//                                     >
//                                         -
//                                     </button>
//                                     <p>{quantity}</p>
//                                     <button
//                                         onClick={() => handleQuantityChange(index, 1)}
//                                         style={buttonStyle}
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                                 {/* <button
//                                     onClick={() => alert(`Proceed to buy ${item.name}`)}
//                                     style={{ ...buttonStyle, backgroundColor: "#007bff", marginBottom: "10px" }}
//                                 >
//                                     Buy Now
//                                 </button> */}
//                                 <button
//                                     onClick={() => handleRemoveItem(index)}
//                                     style={{ ...buttonStyle, backgroundColor: "#fc6486", color:"white" }}>
//                                     <i class="bi bi-trash3"></i>
//                                 </button>
//                             </div>
//                         </div>
//                     );
//                 })
//             ) : (
//                <center><p style={{margin:"60px",fontWeight:"bold",fontSize:40}}>Your cart is empty</p></center> 
//             )}
//             {cart.length > 0 && (
//                 <div id="order_summary" style={{ marginTop: "20px",padding:"50px",margin:"50px" }}>
//                     <h4>Order Summary</h4>
//                     <hr />
//                     <p>Subtotal : <span>{subtotal}(Units)</span></p>
//                     <p style={{fontWeight:"bold"}}>Total : <span>₹{totalPrice}</span></p>
//                     <hr />
//                     <button
//                         onClick={placeOrderHandler}
//                         style={{ ...buttonStyle,  backgroundColor: "#fc6486", color:"white" }}
//                     >
//                         Place Order
//                     </button>
//                 </div>
//             )}
//         </>
//     );
// }

// // Styles
// const cartItemStyle = {
//     display: "flex",
//     alignItems: "center",
//     border: "1px solid #ddd",
//     padding: "20px",
//     margin: "60px",
//     boxSizing: "border-box",
//     justifyContent: "space-between"
// };

// const imageStyle = {
//     width: "150px",
//     height: "150px",
//     objectFit: "cover",
//     marginRight: "20px",
//     borderRadius: "0",
//     // backgroundColor:"#fc6486"
// };

// const controlsContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginRight: "20px"
// };

// const quantityControlsStyle = {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "10px"
// };

// const buttonStyle = {
//     padding: "10px 20px",
//     color: "#fc6486",
//     border: "none",
//     borderRadius: "5px"
// };

// export default Cart;

import { useState, useEffect } from "react";

function Cart() {
    // Initialize the cart state from localStorage or default to an empty array
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Update localStorage whenever the cart changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }, [cart]);

    // Handle changes in quantity of items
    const handleQuantityChange = (index, delta) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity = Math.max((updatedCart[index].quantity || 1) + delta, 1);
            return updatedCart;
        });
    };

    // Handle removing an item from the cart
    const handleRemoveItem = (index) => {
        setCart(prevCart => prevCart.filter((_, i) => i !== index));
    };

    // Handle placing an order
    const placeOrderHandler = () => {
        console.log("Placing order with items:", cart);

        fetch("http://localhost:3000/createOrder", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        })
        .then(() => {
            setCart([]);
            localStorage.removeItem("cartItems");
            alert("Order Successfully placed!");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Order Failed");
        });
    };

    // Calculate subtotal and total price
    const subtotal = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0).toFixed(2);

    return (
        <div style={containerStyle}>
            <h3 style={headerStyle}>Your Cart Items</h3>
            {cart.length > 0 ? (
                cart.map((item, index) => {
                    const quantity = item.quantity || 1;
                    const totalPriceForItem = (item.price * quantity).toFixed(2);

                    return (
                        <div key={index} style={cartItemStyle} >
                            <img
                                src={`http://localhost:3000/Uploads/${item.image}`}
                                alt={item.name}
                                style={imageStyle}
                            />
                            <div style={itemInfoStyle}>
                                <p>Name: {item.name}</p>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <p>Total Price: ${totalPriceForItem}</p>
                            </div>
                            <div style={controlsContainerStyle}>
                                <div style={quantityControlsStyle}>
                                    <button
                                        onClick={() => handleQuantityChange(index, -1)}
                                        disabled={quantity <= 1}
                                        style={buttonStyle}
                                    >
                                        -
                                    </button>
                                    <p>{quantity}</p>
                                    <button
                                        onClick={() => handleQuantityChange(index, 1)}
                                        style={buttonStyle}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemoveItem(index)}
                                    style={{ ...buttonStyle, backgroundColor: "#fc6486", color:"white" }}>
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
               <center><p style={emptyCartStyle}>Your cart is empty</p></center> 
            )}
            {cart.length > 0 && (
                <div id="order_summary" style={orderSummaryStyle}>
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal : <span>{subtotal}(Units)</span></p>
                    <p style={{fontWeight:"bold"}}>Total : <span>₹{totalPrice}</span></p>
                    <hr />
                    <button
                        onClick={placeOrderHandler}
                        style={{ ...buttonStyle,  backgroundColor: "#fc6486", color:"white" }}
                    >
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
}

// Styles
const containerStyle = {
    margin: "0 auto",
    padding: "20px",
    maxWidth: "1200px"
};

const headerStyle = {
    margin: "20px 0",
    fontWeight: "bold",
    textAlign: "center"
};

const cartItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd",
    padding: "20px",
    margin: "20px",
    boxSizing: "border-box",
    justifyContent: "space-between",
    width: "100%",
    '@media (min-width: 600px)': {
        flexDirection: "row"
    }
};

const imageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginBottom: "10px",
    borderRadius: "0",
    '@media (min-width: 600px)': {
        width: "150px",
        height: "150px",
        marginBottom: "0"
    }
};

const itemInfoStyle = {
    textAlign: "center",
    '@media (min-width: 600px)': {
        textAlign: "left"
    }
};

const controlsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    '@media (min-width: 600px)': {
        flexDirection: "row",
        marginTop: "0"
    }
};

const quantityControlsStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    '@media (min-width: 600px)': {
        marginBottom: "0",
        marginRight: "10px"
    }
};

const buttonStyle = {
    padding: "10px 20px",
    color: "#fc6486",
    border: "none",
    borderRadius: "5px"
};

const emptyCartStyle = {
    margin: "60px",
    fontWeight: "bold",
    fontSize: "20px"
};

const orderSummaryStyle = {
    marginTop: "20px",
    padding: "20px",
    margin: "20px",
    '@media (min-width: 600px)': {
        padding: "50px",
        margin: "50px"
    }
};

export default Cart;
