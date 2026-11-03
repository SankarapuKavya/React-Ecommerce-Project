
import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserSignup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const [loading, setLoading] = useState(false)

  const inputRef = useRef(null)

  function handleImage(e) {
    const file = e.target.files[0]

    if (!file) {
      setProfilePic("")
      return
    }

    if (!file.type.startsWith("image/")) {
      toast.error("Please choose a valid image")
      e.target.value = ""
      setProfilePic("")
      return
    }

    if (file.size > 100000) {
      toast.error("Choose an image smaller than 100KB")
      e.target.value = ""
      setProfilePic("")
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      setProfilePic(reader.result)
    }

    reader.onerror = () => {
      toast.error("Unable to read image")
    }

    reader.readAsDataURL(file)
  }

  function signup(e) {
    e.preventDefault()

    if (!profilePic) {
      toast.error("Please select a profile picture")
      return
    }

    if (loading) return

    const user = {
      name,
      email,
      phone,
      password,
      profilePic
    }

    setLoading(true)

    axios.post("http://localhost:3000/users", user)
      .then((res) => {
        console.log("Signup Response:", res.data)

        toast.success("Signup success")

        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setProfilePic("")

        if (inputRef.current) {
          inputRef.current.value = ""
        }
      })
      .catch((err) => {
        console.log("Signup Error:", err)
        console.log("Error Message:", err.message)
        console.log("Server Response:", err.response?.data)

        if (err.response) {
          toast.error("Registration failed: " + err.response.status)
        } else {
          toast.error("Cannot connect to server. Check JSON Server.")
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="form-container">
      <h1>Signup Page</h1>

      <form onSubmit={signup}>
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          required
          onChange={handleImage}
          ref={inputRef}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Signup"}
        </button>
      </form>

      <p>
        Are you Existing User? <Link to="/userlogin">Login</Link>
      </p>
    </div>
  )
}

export default UserSignup
