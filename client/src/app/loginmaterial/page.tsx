"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';

interface register {
  name: string;
  surname: string;
  email:string;
  password: string;
}

const LoginMaterial: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerInfo, setRegisterInfo] = useState<register>({name:"", surname:"", email:"", password:""})

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
/*    background: url('../../public/background6.jpg')no-repeat;
    background-position: center;
    background-size: cover; */
  const onSubmit = (e:any) => {
    e.preventDefault()
  }
  return (
    <div className="materailregister">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        paddingTop={{ xs: "1rem", md: "10rem" }}
      >
        <Grid
          item
          xs={11}
          md={3}
        >
          <form onSubmit={onSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            alignItems="center"
            sx={{ border: "2px solid rgba(255,255,255,0.1)", padding: "1rem"}}
            className="opback"
          >
            
              {/* row 1 */}
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
              >
                <h3 style={{color:"white", textAlign:"center"}}> Register User</h3>
              </Grid>
              {/* row 2 */}
              <Grid
                item
                xs={12}

              >
                <FormControl
                  fullWidth
                  variant="outlined"
                  
                >
                  <InputLabel htmlFor="name"><span style={{color:"white"}}> İsim</span> </InputLabel>
                  <OutlinedInput
                    id="name"
                    type="text"
                    name="name"
                    endAdornment={
                      <InputAdornment position="end" >
                        <AccountCircleIcon htmlColor="white" />
                      </InputAdornment>
                    }
                    label="name"
                    value={registerInfo.name}
                    onChange={({ target }) => {
                      setRegisterInfo({ ...registerInfo, name: target.value });
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}

              >
                <FormControl
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="surname"><span style={{color:"white"}}> Soyisim</span></InputLabel>
                  <OutlinedInput
                    id="surname"
                    name="surname"
                    type={"text"}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountCircleIcon  htmlColor="white" />
                      </InputAdornment>
                    }
                    label="surname"
                    value={registerInfo.surname}
                    onChange={({ target }) => {
                      setRegisterInfo({ ...registerInfo, surname: target.value });
                    }}
                  />
                </FormControl>
              </Grid>
              {/* row 3 */}
              <Grid
                item
                xs={12}

              >
                <FormControl
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="email"><span style={{color:"white"}}> Email</span></InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    type={"email"}
                    endAdornment={
                      <InputAdornment position="end">
                        <MailIcon  htmlColor="white" />
                      </InputAdornment>
                    }
                    label="email"
                    value={registerInfo.email}
                    onChange={({ target }) => {
                      setRegisterInfo({ ...registerInfo, email: target.value });
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}

              >
                <FormControl
                  fullWidth
                  variant="outlined"
                >
                  <InputLabel htmlFor="password"><span style={{color:"white"}}> Password</span></InputLabel>
                  <OutlinedInput
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff  htmlColor="white"/> : <Visibility  htmlColor="white"/>}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    value={registerInfo.password}
                    onChange={({ target }) => {
                      setRegisterInfo({ ...registerInfo, password: target.value });
                    }}
                  />
                </FormControl>
              </Grid>
              {/* row 4 */}
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
              >
                <Button
                  type="submit"
                  variant="contained"
                >
                  Kayıt Ol!
                </Button>
              </Grid>
           
          </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginMaterial;
