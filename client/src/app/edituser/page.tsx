"use client";

import { useSession } from "next-auth/react";
import EditUser from "../components/editUser/editUser";

const EditUserPage = () => {
  const session = useSession();
  if (session.status == "loading")
    return (
      <div className="text-center mt-5">
        <h1 className="text-green-500">Receiving Personal Data</h1>
      </div>
    );
  if (session.status == "unauthenticated")
    return (
      <div className="text-center mt-5">
        <h1 className="text-red-500">you must sign in</h1>
      </div>
    );
  return (
    <>{
      session.data?.user ? <EditUser user={session.data.user}/> : ""
    }
     
    </>
  );
};

export default EditUserPage;
