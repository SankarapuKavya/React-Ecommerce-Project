
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddedProducts = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((x) => setProducts(x.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="added-products">

      <div className="products-header">
        <h1>Products List</h1>
        <button onClick={() => navigate("/admindashboard")}>
          Dashboard
        </button>
      </div>

      <div className="products-container">
        {products.map((x) => {
          return (
            <div className="product-card" key={x.id}>
              <img
                src={x.image}
                alt={x.name}
              />

              <h3>{x.name}</h3>
              <p>Product ID: {x.id}</p>
              <p>Category: {x.category}</p>
              <p>Price: ₹{x.price}</p>
              <p>Rating: ⭐ {x.ratings}</p>
              <p>{x.description}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default AddedProducts
