
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'
import './UserSignup.css'

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()

    axios.get("http://localhost:3000/users")
      .then((res) => {
        const users = res.data

        const result = users.find((y) => {
          return y.email === email && y.password === password
        })

        if (result) {
          toast.success("Login success")

          localStorage.setItem("id", result.id)
          localStorage.setItem("email", result.email)
          localStorage.setItem("loggedIn", "true")

          setEmail("")
          setPassword("")

          navigate("/userdashboard")
        } else {
          toast.error("Invalid credentials")
        }
      })
      .catch((err) => {
        console.log("Login Error:", err)
        toast.error("Unable to connect to server")
      })
  }

  return (
    <div className="form-container">
      <h1>Login Page</h1>

      <form onSubmit={login}>
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

      <p>
        New User? <Link to="/usersignup">Signup</Link>
      </p>
    </div>
  )
}

export default UserLogin
