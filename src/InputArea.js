import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import { Button, Typography } from '@mui/material';
import useDegrees from './hooks/useDegrees';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
// import names from './names';

function InputArea() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const { fetchData, degreeData } = useDegrees();

  const handleSubmit = () => {
    const input1Trimmed = input1.trim();
    const input2Trimmed = input2.trim();
    fetchData(input1Trimmed, input2Trimmed);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const renderDegrees = () => {
    let output = [];

    output.push(
      <Typography variant="h3">{`${degreeData.length} ${
        degreeData.length > 1 ? 'degrees' : 'degree'
      } of separation`}</Typography>
    );
    degreeData.map((degree, i) => {
      let cleanString = degree.toString().replace(/\d+:\s/, '');
      output.push(<Typography key={i}>{cleanString}</Typography>);
    });

    return output;
  };

  return (
    <Grid2 flexDirection="column" display="flex" container>
      <Grid2
        flexDirection="row"
        display="flex"
        sx={{ width: '100%' }}
        alignItems="center"
        justifyContent="center"
        container
      >
        <Grid2 p={3} sx={{ width: '40%' }}>
          <TextField
            label="Starting Name"
            variant="standard"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Demi Moore"
          />
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={names}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          /> */}
        </Grid2>
        <Grid2 p={3} sx={{ width: '40%' }}>
          <TextField
            label="Ending Name"
            variant="standard"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Kevin Bacon"
          />
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={names}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          /> */}
        </Grid2>
      </Grid2>
      <Grid2 p={3} sx={{ width: '100%' }}>
        <Button variant="contained" onClick={handleSubmit} sx={{ width: '100%' }}>
          Run
        </Button>
      </Grid2>
      {/* <Grid2 p={3} sx={{ width: '100%' }}>
        {loading && <CircularProgress />}
      </Grid2> */}
      <Grid2 sx={{ p: 3 }}>
        {degreeData ? (
          <Grid2 justifyContent="center" alignItems="center">
            {renderDegrees()}
          </Grid2>
        ) : (
          <Typography>Enter two actors above to see how they are related</Typography>
        )}
      </Grid2>
    </Grid2>
  );
}

export default InputArea;
