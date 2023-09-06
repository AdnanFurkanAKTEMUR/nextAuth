'use client';
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER } from "@/app/apolloConfig/resolvers";
import { signIn } from "next-auth/react";
import { FormEventHandler, useEffect, useState } from "react";

export default function SignIn() {
  const [login, {data,error,loading}] = useMutation(LOGIN_USER)
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    })
    console.log(res)

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={userInfo.email}
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, email: target.value });
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={userInfo.password}
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, password: target.value });
          }}
        />
        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
}
