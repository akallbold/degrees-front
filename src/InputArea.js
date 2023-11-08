import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useDegrees from './hooks/useDegrees';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function InputArea() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const { fetchData } = useDegrees();

  const handleSubmit = () => {
    const input1Trimmed = input1.trim();
    const input2Trimmed = input2.trim();
    fetchData(input1Trimmed, input2Trimmed);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Grid2 flexDirection="column" display="flex">
      <Grid2 flexDirection="row" display="flex" sx={{ width: '100%' }} alignItems="center" justifyContent="center">
        <Grid2 item p={3} sx={{ width: '40%' }}>
          <TextField
            id="standard-basic"
            label="Starting Name"
            variant="standard"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Kevin Bacon"
          />
        </Grid2>
        <Grid2 item p={3} sx={{ width: '40%' }}>
          <TextField
            id="standard-basic"
            label="Ending Name"
            variant="standard"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Demi Moore"
          />
        </Grid2>
      </Grid2>
      <Grid2 item p={3} sx={{ width: '100%' }}>
        <Button variant="contained" onClick={handleSubmit} sx={{ width: '100%' }}>
          Run
        </Button>
      </Grid2>
    </Grid2>
  );
}

export default InputArea;
