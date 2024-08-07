import React, { useState, useEffect } from 'react';

function Under799() {
  const [products, setProducts] = useState([]);
  const [cart] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  useEffect(() => {
    fetch("http://localhost:3000/productcategory?category=Under799", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Fetched data:", res); // Log the fetched data
        if (res.products && Array.isArray(res.products)) {
          setProducts(res.products);
        } else {
          console.error("Fetched data does not contain a products array:", res);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addToCart = (product) => {

    const newCart = [...cart];
    newCart.push(product);
    alert("product added to cart sucessfully")
    localStorage.setItem("cartItems", JSON.stringify(newCart));
    console.log("Cart updated:", newCart);
    };

  return (
    <div className='container'>
      <div className="collection-list mt-4 row gx-0 gy-3">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4 col-xl-3 p-4 best" key={product._id}>
            <div className="collection-img position-relative text-center" style={{ width: "15rem", height: "23rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
              <a href='/'><img src={`http://localhost:3000/Uploads/${product.image}`} alt={product.name} style={{ width: "13rem", height: "16rem", padding: "13px" }} /></a>
              <span className="position-absolute bgpink text-white d-flex align-items-center justify-content-center">sale</span>
              <p className="text-capitalize my-1 fw-bold text-muted">{product.name}</p>
              <span className="fw-bold text-regal-blue">₹ {product.price}</span> <br />
              <button onClick={() => { addToCart(product) }} type="button" style={{ color: "white", backgroundColor: "#fc6486", width: "13rem", height: "2rem" }} className="btn btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Under799;
