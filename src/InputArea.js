import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function InputArea() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = () => {
    // trim inputs
    // validate inputs
    // call api
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Starting Name"
        variant="standard"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Kevin Bacon"
      />
      <TextField
        id="standard-basic"
        label="Ending Name"
        variant="standard"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Demi Moore"
      />
      <Button onClick={handleSubmit}>Run</Button>
    </Box>
  );
}

export default InputArea;
