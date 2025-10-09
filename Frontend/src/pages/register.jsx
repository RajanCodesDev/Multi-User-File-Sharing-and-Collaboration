import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    console.log('Signing up with:', { email, password })
    // Make your API call here
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Register</h2>

      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm flex flex-col space-y-6"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-md transition"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-orange-500 hover:underline font-medium">
          Log in
        </Link>
      </p>
    </div>
  )
}

export default Register
