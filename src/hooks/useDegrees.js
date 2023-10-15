import { useState, useEffect } from "react";

const getDataEndpoint = process.env.REACT_APP_GET_DATA_ENDPOINT;

function useDegrees() {
  const [degreeData, setDegreeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [multiselect, setMultiselect] = useState(false);
  const [multiselectData, setMultiselectData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(getDataEndpoint);
        const data = await response.json();
        console.log({ data });
        setDegreeData([data.message]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return { degreeData, error, loading, multiselect, multiselectData };
}

export default useDegrees;
