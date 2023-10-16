import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useDegrees from "./hooks/useDegrees";

function InputArea() {
  const [input1, setInput1] = useState("Kevin bacon");
  const [input2, setInput2] = useState("Tom cruise");
  const { fetchData } = useDegrees();

  const handleSubmit = () => {
    const input1Trimmed = input1.trim();
    const input2Trimmed = input2.trim();
    fetchData(input1Trimmed, input2Trimmed);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
