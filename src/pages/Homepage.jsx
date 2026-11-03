
import React from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <>
      <Navbar />

      {/* Advertisement Section */}
      <div className="ad">
        <img src="https://in.static.webuy.com/product_images/Phones/Phones%20iPhone/SAPPI13PM256GAGUNLC_l.jpg" alt="iPhone" />
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/AL/UD/JC/41759568/71lmwq4-5ql-sl1500--500x500.jpg" alt="Product" />
        <img src="https://png.pngtree.com/png-clipart/20240626/original/pngtree-wireless-headphones-on-neon-green-colour-png-image_15415087.png" alt="Headphones" />
        <img src="https://m.media-amazon.com/images/I/61GMGn+iGGL._AC_UY1000_.jpg" alt="Product" />
        <img src="https://m.media-amazon.com/images/I/51M24HKlZqL._AC_UY1000_.jpg" alt="Product" />
        <img src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410293943005/otCHsX9_O-000000410293943005_1.jpg" alt="Product" />
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Cartify</h1>
        <button>Shop Now</button>
      </div>

      {/* Products Section */}
      <h1 className="section-title">Products</h1>

      <div className="products">
        <img src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/apple/494423049/0/V1Vh56D2zz-RIH7BqGevd-Apple-iPhone-16-Pro-494423049-i-1-1200Wx1200H.jpeg" alt="iPhone 16 Pro" />

        <img src="https://vlebazaar.in/image/cache/catalog/boAt-Rockerz-450-Bluetooth-Wireless-On-Ear-Headphone-with-Mic-Aqua-Blue-/boAt-Rockerz-450-Bluetooth-Wireless-On-Ear-Headphone-with-Mic-Aqua-Blue-Rockerz--1500x1500.jpg" alt="Headphones" />

        <img src="https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000)/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg" alt="Ice Cream" />
      </div>

      <div className="products">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOPMiTCuRF7sumM0kuyan2-Xh0Jr1AUYfng&s" alt="Product" />

        <img src="https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg" alt="Snacks" />

        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha" alt="Laptop" />
      </div>
    </>
  )
}

export default Homepage
