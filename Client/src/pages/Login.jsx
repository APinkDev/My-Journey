import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username'></input>
            <input type="password" placeholder='Password'></input>
        </form>

    </div>
  )
}

export default Login