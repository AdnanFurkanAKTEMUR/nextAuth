"use client";

import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit} autoComplete="off">
              <h2>Login</h2>
              <div className="inputbox">
                <input
                  type="email"
                  required
                  name="email"
                  value={userInfo.email}
                  onChange={({ target }) => {
                    setUserInfo({ ...userInfo, email: target.value });
                  }}
                />
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  required
                  name="password"
                  value={userInfo.password}
                  onChange={({ target }) => {
                    setUserInfo({ ...userInfo, password: target.value });
                  }}
                />
                <label htmlFor="">Password</label>
              </div>
              <div className="forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember Me <a href="#">Forget Password</a>
                </label>
              </div>
              <button>Log in</button>
              <div className="register">
                <p>
                  Don't have a account <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
