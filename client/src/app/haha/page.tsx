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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>hi there</span>
      <p onClick={()=>{
        signOut()
      }}>logout</p>
    </main>
  )
}
