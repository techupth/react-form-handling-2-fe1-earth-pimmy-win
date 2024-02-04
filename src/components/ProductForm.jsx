import { useState } from "react"

function ProductForm() {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")  

  const handleSubmit = (event) => {
    event.preventDefault();

    //สร้างJSON objectด้วยข้อมูลที่ผู้ใช้ป้อน
    const productData = {
      name: name,
      price: parseFloat(price), // Convert to float if needed
      image: image,
      description: description,
    };

    // แสดง Alert ด้วยข้อมูลที่จัดรูปแบบเป็น JSON
    alert(JSON.stringify(productData, null, 2)); 
    // The third parameter (2) is for 
    //  จัด formatting with an indentation of 2 spaces
  };    
     

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(event) => {
              setImage(event.target.value)
            }}
            
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value)  
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value)               
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
