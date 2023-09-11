"use client";
import { useSession } from "next-auth/react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-2xl"> Next Auth mini project </h1>
        <h3 className="text-xl"> Everyone can see this page </h3>
        {session.status == "authenticated" ? (
          <>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="h3"
                    color="text.secondary"
                    gutterBottom
                  >
                    User Information
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                  >
                     <p><span className="text-red-500">id:</span> { session.data.user?._id }</p>
                    <p><span className="text-red-500">Name:</span> { session.data.user?.name }</p>
                    <p><span className="text-red-500">Email:</span> { session.data.user?.email }</p>
                    <p><span className="text-red-500">Role:</span> { session.data.user?.role }</p>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </>
        ) : (
          <>not logged in</>
        )}
      </div>
    </>
  );
}
