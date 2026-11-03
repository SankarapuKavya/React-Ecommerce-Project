
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function adminLogin(e) {
    e.preventDefault()

    if (email === "admin@gmail.com" && password === "admin123") {
      toast.success("Login Success")
      navigate("/admindashboard")
    } else {
      toast.error("Invalid credentials")
    }
  }

  return (
    <div className="form-container">
      <h1>Admin Login</h1>

      <form onSubmit={adminLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
