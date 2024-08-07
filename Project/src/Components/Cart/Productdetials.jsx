import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";
import'./Productdetials.css'

function Productdetails() {
  const [product, setProduct] = useState({});
  const [QT, setQT] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/productdetails/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  function addToCart() {
    if (sessionStorage.getItem("isUserLogged")) {
      let cartItems = localStorage.getItem("cart-items");
      cartItems = cartItems ? JSON.parse(cartItems) : [];

      const productToAdd = { ...product, quantity: QT };
      localStorage.setItem("cart-items", JSON.stringify([...cartItems, productToAdd]));

      toast.success("Cart item added successfully!");
    } else {
      alert("You must login to add products to the cart!");
    }
  }

  function increaseQT() {
    setQT((prevQT) => prevQT + 1);
  }

  function decreaseQT() {
    setQT((prevQT) => (prevQT > 1 ? prevQT - 1 : 1));
  }

  return (
    <>
      {product && (
        <Container>
          <Row>
            <Col sm={6} key={product._id} className="imageanddetails">
              <img
                src={`http://localhost:3000/Uploads/${product.image}`}
                alt={product.name}
                style={{ width: 500 }}
              />
              <hr />
              <div>
                <h5>Details:</h5>
                Update your wardrobe to the season's most trendy fashion tops for women in amazing styles, fresh prints, hottest hues and everything else you are currently wishing for. The most exclusive collection of stylish tops in modern, contemporary designs that range from everyday wear and high street fashion to festive wear. Either be office, casual or for a party, festival or beach wear- our wide range of designer tops for ladies is always in fashion.
              </div>
            </Col>
            <Col sm={6} className="productviewdetails">
              <p>{product.name}</p>
              <div className="price">
                PRICE : ₹<span> </span>
                {product.price}
              </div>
              <div className="pricedetails">
                <label>QUANTITY:</label>
                <div className="weightdetails">
                  <button
                    type="button"
                    style={{ fontWeight: "bold",backgroundColor:"#fc6486",color: "white",width:"1rem",height:"2rem" }}
                    className="QTbtn"
                    onClick={increaseQT}
                  >
                    +
                  </button>
                  <input
                    type="number"
                    style={{ width: "120px",height:"2rem" }}
                    className="form-control count d-inline"
                    value={QT}
                    readOnly
                  />
                  <button
                    type="button"
                    style={{ fontWeight: "bold",backgroundColor:"#fc6486",color: "white",width:"1rem",height:"2rem" }}
                    className="QTbtn"
                    onClick={decreaseQT}
                  >
                    -
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={addToCart}
                  id="cart_btn"
                  style={{color: "white",fontWeight:"",backgroundColor:"#fc6486",width:"12rem",height:"2rem",borderRadius:"10px"}}
                  className="addtocartbtn"
                >
                  Add to Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Productdetails;
