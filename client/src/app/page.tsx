"use client";
import { useSession } from "next-auth/react";
import * as React from "react";
import UserInfo from "./components/userInfo/userInfo";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-2xl"> Next Auth mini project </h1>
        <h3 className="text-xl"> Everyone can see this page </h3>
        <UserInfo />
      </div>
    </>
  );
}
