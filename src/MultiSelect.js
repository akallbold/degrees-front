import useDegrees from "./hooks/useDegrees";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function MultiSelect() {
  const { multiselectData } = useDegrees();

  const renderOptions = () => {
    multiselectData.map((option) => {
      return (
        <div>
          <ul>
            <li>{option}</li>
          </ul>
        </div>
      );
    });
  };

  return <Grid2>{renderOptions()}</Grid2>;
}

export default MultiSelect;
