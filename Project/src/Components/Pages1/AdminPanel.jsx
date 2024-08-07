import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");

  const productcreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("category", e.target.category.value);
    formData.append("price", e.target.price.value);
    formData.append("image", e.target.image.files[0]);
    setImage(e.target.image.files[0])
    console.log(e.target.image)
    
    fetch("http://localhost:3000/product/insert", {
      method: "POST",
      body: formData,
      dataType: "jsonp"
    })
      .then((product) => product.json())
      .then((product) => {
        console.log(product)
      })
  }

  return (
    <div className='signup'>
      <div className="wrapper">
        <h2>Upload Product</h2>
        <form method="POST" onSubmit={(e) => productcreate(e)}>
          <div className="input-box">
            <input type="text" name='name' placeholder="Product name" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="input-box">
            <select id="category" name='category' className="form-control form-control-lg" placeholder='category' onChange={(e) => setCategory(e.target.value)}>
              <option value="Under699">Under699</option>
              <option value="Under799">Under799</option>
              <option value="Under899">Under999</option>
              <option value="Under899">Under1800</option>
            </select>
          </div>
          <div className="input-box">
            <input type="text" name='price' placeholder="Product price" onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="input-box">
            <input type="file" name='image' placeholder="Upload Image" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
          <div className="input-box button">
            <input type="Submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminPanel;
