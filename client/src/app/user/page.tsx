"use client";
import { useSession } from "next-auth/react";
import UserInfo from "../components/userInfo/userInfo";


const User = () => {
  const session = useSession()
  return (
    <>
    <div className="text-center mt-5">
      <h2 className="text-2xl text-green-500">User Page. Admins and users can see this page.</h2>
      <h5 className="text-xl">
        Your role is <span className="text-green-500">{session?.data?.user?.role}</span>
      </h5>
      <UserInfo />
    </div>
    </>
  )
}

export default User;