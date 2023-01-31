import React, { useState } from 'react';
import Link, { BrowserRouter, redirect } from 'react-router-dom';

export default function signinScreen() {
    const [email, setEmail]= useState('');
    const [Password, setPassword] = useState('');
    const submitHandler=(e)=>{
      e.preventDefault();
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        {/* // </div>
        // {loading && <LoadingBox></LoadingBox>}
        // {error && <MessageBox variant="danger">{error}</MessageBox>}
        // <div> */}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer?{" "}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}}
