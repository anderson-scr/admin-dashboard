import React, { useState } from "react";

// MUI imports
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// CSS
import "./loginStyle.css";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleClickShowPassword = () => setPasswordVisibility(!passwordVisibility);

  return (
    <form>
      <Box className="containerText">
        <Typography variant="h5" color="primary">
          Login with your account.
        </Typography>
        <hr/>
        <Typography className="createAccountMsg">
          If you don't have one, <span id="spCreateAccount">click here</span> to create a new account.
        </Typography>
      </Box>

      <Box>
        <FormControl sx={{ m: 1, width: '60%' }} variant="outlined">
          <TextField
            id="iptUserName"
            type="text"
            label="User Name"
            required="true"
            focused
          >
          </TextField>
        </FormControl>

        <FormControl sx={{ m: 1, width: '60%' }} variant="outlined">
          <InputLabel htmlFor="iptUserPassword">Password</InputLabel>
          <OutlinedInput
            id="iptUserPassword"
            type={passwordVisibility ? 'text' : 'password'}
            required="true"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>

      <Box className="containerButtons">
        <Button variant="contained" id="btnLogin">
          Login
        </Button>
      </Box>
    </form>
  )
}

export default Login;