import { CircularProgress, Typography } from "@mui/material";
import useDegrees from "./hooks/useDegrees";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function DisplayResult() {
  const { degreeData, loading } = useDegrees();

  const renderDegrees = () => {
    degreeData.map((degree) => {
      return (
        <div>
          <ul>
            <li>{degree}</li>
          </ul>
        </div>
      );
    });
  };

  if (loading) return <CircularProgress />;

  return (
    <Grid2>
      {degreeData.length > 0 ? (
        renderDegrees()
      ) : (
        <Typography>
          Enter two actors above to see how they are related
        </Typography>
      )}
    </Grid2>
  );
}

export default DisplayResult;
