import { useState } from "react";

const getDataEndpoint = process.env.REACT_APP_GET_DATA_ENDPOINT;

function useDegrees() {
  const [degreeData, setDegreeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [multiselect, setMultiselect] = useState(false);
  const [multiselectData, setMultiselectData] = useState([]);

  async function fetchData(input1, input2) {
    setLoading(true);
    console.log({ input1, input2 });
    try {
      const response = await fetch(getDataEndpoint, {
        method: "POST",
        body: JSON.stringify({ input1, input2 }),
      });

      const data = await response.json();
      console.log({ data });
      setDegreeData([data.message]);
      setLoading(false);
    } catch (error) {
      if (error.message === "Which one?") {
        setMultiselect(true);
        setMultiselectData(error.data);
      }
      setError(error);
      setLoading(false);
      console.error(error);
    }
  }

  return {
    degreeData,
    error,
    fetchData,
    loading,
    multiselect,
    multiselectData,
  };
}

export default useDegrees;
