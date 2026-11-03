
import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [ratings, setRatings] = useState("")

  const inputRef = useRef(null)
  const navigate = useNavigate()

  function handleImage(e) {
    let file = e.target.files[0]

    if (!file) return

    if (file.size > 100000) {
      toast.error("Choose file size less than 100KB")
      e.target.value = ""
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
    }

    reader.readAsDataURL(file)
  }

  function addProduct(e) {
    e.preventDefault()

    const products = { id, name, price, category, description, image, ratings }

    axios.post("http://localhost:3000/products", products)
      .then(() => {
        toast.success("Product Added")
        setId("")
        setName("")
        setPrice("")
        setCategory("")
        setDescription("")
        setImage("")
        setRatings("")
        inputRef.current.value = ""
      })
      .catch(err => toast.error("Failed to Add"))
  }

  return (
    <div className="admin-dashboard">

      <div className="admin-header">
        <Link to="/">Back to Home page</Link>
        <button onClick={() => navigate("/addedproducts")}>
          View Added Products
        </button>
      </div>

      <h1>Welcome to Dashboard</h1>

      <div className="product-form">
        <h2>Add Products</h2>

        <form onSubmit={addProduct}>

          <input
            type="text"
            placeholder="Enter Product ID"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Product Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <textarea
            placeholder="Enter Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <input
            type="file"
            accept="image/*"
            required
            onChange={handleImage}
            ref={inputRef}
          />

          <input
            type="number"
            placeholder="Enter Rating"
            required
            min="0"
            max="5"
            step="0.1"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
          />

          <button type="submit">Add Product</button>

        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
