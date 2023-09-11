"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div>
        <p style={{fontFamily:"roboto"}}>Ana sayfa</p>
        { session.data ? "giriş yapılmış" : "giriş yapılmamış "}
        <p onClick={() => signOut()}>logout</p>
      </div>
    </>
  );
}
