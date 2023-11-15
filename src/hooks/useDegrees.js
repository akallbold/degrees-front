import { useState } from 'react';

const getDataEndpoint = process.env.REACT_APP_GET_DATA_ENDPOINT;

function useDegrees() {
  const [degreeData, setDegreeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [multiselect, setMultiselect] = useState(false);
  const [multiselectData, setMultiselectData] = useState([]);

  const fetchData = async (input1, input2) => {
    setLoading(true);
    try {
      const response = await fetch(getDataEndpoint, {
        method: 'POST',
        body: JSON.stringify({ input1, input2 }),
      });

      const data = await response.json();
      const newDegreeData = data.message;
      setDegreeData(newDegreeData);
    } catch (error) {
      if (error.message === 'Which one?') {
        setMultiselect(true);
        setMultiselectData(error.data);
      }
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
