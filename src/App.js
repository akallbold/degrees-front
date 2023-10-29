import InputArea from './InputArea';
import DisplayResult from './DisplayResult';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';
import MultiSelect from './MultiSelect';
import useDegrees from './hooks/useDegrees';

function App() {
  const { multiSelect } = useDegrees();
  return (
    <Grid2
      sx={{
        p: 3,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Grid2 item>
        <Typography>
          This project was built to demonstrate traversing a graph database and saving the path. Here we are visiting
          six degrees of Kevin Bacon example, but truly you can use this for any graph database. Enter in two actor
          names and the app will return how those two actors are connected, through the films they star in.
        </Typography>
      </Grid2>
      <Grid2 item sx={{ p: 3, width: '100%' }}>
        <InputArea />
      </Grid2>
      <Grid2 item sx={{ p: 3 }}>
        {multiSelect && <MultiSelect />}
      </Grid2>
      <Grid2 item sx={{ p: 3 }}>
        <DisplayResult />
      </Grid2>
    </Grid2>
  );
}

export default App;
