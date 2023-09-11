"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";

const Admin = () => {
  const session = useSession();

  return (
    <div className="text-center mt-5">
      <h2 className="text-2xl text-green-500">Admin Page. Only admins can see this page.</h2>
      <h5 className="text-xl">
        Your role is <span className="text-green-500">{session?.data?.user?.role}</span>
      </h5>
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

export default Admin;
