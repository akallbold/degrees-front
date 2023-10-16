import InputArea from "./InputArea";
import DisplayResult from "./DisplayResult";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import MultiSelect from "./MultiSelect";
import useDegrees from "./hooks/useDegrees";
import bg from "./graph.png";

function App() {
  const { multiSelect } = useDegrees();
  return (
    <Grid2
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundImage: { bg },
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography>
        This project was built to demonstrate traversing a graph database and
        saving the path. Here we are visiting six degrees of Kevin Bacon
        example, but truly you can use this for any graph database. Enter in two
        actor names and the app will return how those two actors are connected,
        through the films they star in.
      </Typography>
      <InputArea />
      {multiSelect && <MultiSelect />}
      <DisplayResult />
    </Grid2>
  );
}

export default App;
