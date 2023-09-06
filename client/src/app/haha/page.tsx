'use client';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession()
  const router = useRouter()
  if(session.status === "unauthenticated"){
    router.replace("/auth")
  }
  console.log(session.data?.user)
  return (
    <main className="">
      <p>hi there</p>
      <p>Name: {session.data?.user?.name}</p>
      <p>Email: {session.data?.user?.email}</p>
      <p onClick={()=>{
        signOut({callbackUrl:"/auth"})
      }}>logout</p>
    </main>
  )
}
