"use client";
import { useSession } from "next-auth/react";

export default function Denied (){
  const session = useSession()
  return(
    <div className="text-center mt-5">
     <h2 className="text-2xl text-red-500">Access Denied. Only "Admins" can see this page.</h2>
     <h5 className="text-xl">Your role is <span className="text-red-500">{session?.data?.user?.role}</span></h5>
    </div>
  )
}