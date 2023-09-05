'use client';

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


export default function Home() {
  const session = useSession()
  const router = useRouter()
  if(!session.data){
    router.replace("/auth")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => {signIn()}}>login</button>
    </main>
  )
}
