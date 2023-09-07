"use client";
import { useSession } from 'next-auth/react';


const Admin = () => {
  const session = useSession()
  console.log(session.data);
  return <>admin</>;
};

export default Admin;
