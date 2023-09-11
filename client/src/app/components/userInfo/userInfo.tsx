"use client";

import { useSession } from "next-auth/react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const UserInfo = () => {
  const session = useSession();

  if (session.status == "loading")
    return (
      <>
        {" "}
        <p className="mt-2 text-green-500">Retrieving user information</p>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{marginTop:"3rem"}}
        >
          <CircularProgress />
        </Box>
      </>
    );
  if (session.status == "unauthenticated")
    return (
      <div className="text-center">
        <h3 className="text-2xl text-red-500">you are not login</h3>
      </div>
    );
  return (
    <div className="text-center">
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
              <p>
                <span className="text-green-500">id:</span> {session?.data?.user?._id}
              </p>
              <p>
                <span className="text-green-500">Name:</span> {session?.data?.user?.name}
              </p>
              <p>
                <span className="text-green-500">Email:</span> {session?.data?.user?.email}
              </p>
              <p>
                <span className="text-green-500">Role:</span> {session?.data?.user?.role}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default UserInfo;
