import React from 'react'
import { Form, Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <h2>Sign Up</h2>
        <Form action='/createuser' method='post'>
            <input type="text" name='username' placeholder='username'/>
            <input type="text" name='email' placeholder='email'/>
            <input type="text" name='password' placeholder='password'/>
            <input type="text" name='re_password' placeholder='Reenter Password'/>
            <button>Sign Up</button>
        </Form>
        <div>Already have an account? <span><Link to="/login">Login here</Link></span></div>
    </div>
  )
}

export default Signup