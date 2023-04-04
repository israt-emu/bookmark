import {Box, TextField} from "@mui/material";
import React from "react";

const InputField = () => {
  return (
    <Box style={{width: "50%", margin: "auto"}}>
      <TextField fullWidth sx={{mt: 3}} id="outlined-basic" label="Title" variant="outlined" size="large" style={{display: "block"}} />
      <TextField fullWidth sx={{mt: 3}} id="outlined-basic" label="Title" variant="outlined" size="large" style={{display: "block"}} />
    </Box>
  );
};

export default InputField;
