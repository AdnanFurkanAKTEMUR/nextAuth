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

const EditUser = () => {
  const [createUserMutation, { data, loading, error }] = useMutation(CREATE_USER);

  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl text-blue-500 mb-3">Register User</h1>
      <form
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
            <FormControl fullWidth sx={{margin:"1rem"}}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput
                name="name"
                id="name"
                label="Name"
              />
            </FormControl>
            <FormControl fullWidth sx={{margin:"1rem"}}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                name="email"
                id="email"
                label="Email"
              />
            </FormControl>
            <FormControl fullWidth sx={{margin:"1rem"}}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                name="password"
                id="password"
                label="Password"
                type="password"
              />
            </FormControl>
            <FormControl fullWidth sx={{margin:"1rem"}}>
              <TextField
                id="outlined-select-currency"
                select
                label="Role"
                defaultValue=""
                helperText="Please select your role"
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
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditUser;
