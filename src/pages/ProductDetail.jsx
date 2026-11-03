
import React, { useState, useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {
  let { id } = useParams()

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [address, setAddress] = useState("")

  let navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(x => setProduct(x.data))
      .catch(err => console.log(err))
  }, [id])

  function increment() {
    setQuantity(quantity + 1)
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function placeOrder(e) {
    e.preventDefault()

    let orderData = {
      userId: localStorage.getItem("id"),
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      quantity: quantity,
      price: product.price,
      total: quantity * product.price,
      date: new Date().toLocaleDateString(),
      address: address,
      status: "Delivered"
    }

    axios.post("http://localhost:3000/orders", orderData)
      .then(() => {
        toast.success("Order placed🎉🎉")
        navigate("/userdashboard")
      })
      .catch(err => toast.error("Failed to place"))
  }

  return (
    <>
      <Navbar2 />

      <div className="product-detail">

        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <h2>₹{product.price}</h2>

          <div className="quantity-control">
            <button type="button" onClick={decrement}>-</button>
            <h3>{quantity}</h3>
            <button type="button" onClick={increment}>+</button>
          </div>

          <form onSubmit={placeOrder}>
            <textarea
              placeholder="Enter Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <button type="submit">Place Order</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default ProductDetail
