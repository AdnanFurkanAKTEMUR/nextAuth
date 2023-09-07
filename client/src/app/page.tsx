"use client";

import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div>
        <p>Ana sayfa</p>
        { session.data ? "giriş yapılmış" : "giriş yapılmamış "}
        <p onClick={() => signOut()}>logout</p>
      </div>
    </>
  );
}
