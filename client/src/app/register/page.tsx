"use client";
import * as React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../apolloConfig/resolvers";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const EditUser = () => {
  const [createUserMutation, { data, loading, error }] = useMutation(CREATE_USER);
  const [user, setUser] = useState({ name: "", email: "", password: "", role: "" });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  console.log(user);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createUserMutation({
      variables: {
        input: {
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        },
      },
    });
  };
  if (loading)
    return (
      <>
        {" "}
        <p className="mt-2 text-green-500">Signing up</p>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "3rem" }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  if (error) return <>Error</>;
  if (data)
    return (
      <div className="text-center mt-5">
        <p className="text-green-500 mb-2">Registration successful, please log in</p>
        <Link href={"/login"} className="bg-green-700 text-white p-2 mt-2 rounded"> Go login page </Link>
      </div>
    );
  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl text-blue-500 mb-3">Register User</h1>
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={3}
          >
            <FormControl
              fullWidth
              sx={{ margin: "1rem" }}
            >
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput
                name="name"
                id="name"
                label="Name"
                value={user.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "1rem" }}
            >
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                name="email"
                id="email"
                label="Email"
                type="email"
                value={user.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "1rem" }}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                name="password"
                id="password"
                label="Password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl
              fullWidth
              sx={{ margin: "1rem" }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Role"
                defaultValue=""
                helperText="Please select your role"
                value={user.role}
                name="role"
                onChange={handleChange}
              >
                <MenuItem
                  key={"admin"}
                  value={"admin"}
                >
                  {"Admin"}
                </MenuItem>
                <MenuItem
                  key={"user"}
                  value={"user"}
                >
                  {"User"}
                </MenuItem>
              </TextField>
            </FormControl>
            <FormControl>
              <Button
                type="submit"
                variant="contained"
                className="bg-blue-500"
              >
                Save me!
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditUser;
