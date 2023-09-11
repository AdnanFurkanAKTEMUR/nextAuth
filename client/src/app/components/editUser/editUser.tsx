"use client";

import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
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
import { EDIT_USER } from "@/app/apolloConfig/resolvers";

interface User {
  name: string;
  role: string;
  email: string;
}

const EditUser = (props: any) => {
  const [editUserMutation, { data, loading, error }] = useMutation(EDIT_USER);
const session = useSession()
  const [user, setUser] = useState<User>({ name: props.user.name, email: props.user.email, role: props.user.role });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
console.log(session.update);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await editUserMutation({
      variables: {
        input: {
          _id: props.user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  };
  if (data){
    console.log(data.editUser)
    

    return( <>update başarılı</>);
  } 
  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-2xl text-blue-500 mb-3">Edit User</h1>
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
    </>
  );
};

export default EditUser;
