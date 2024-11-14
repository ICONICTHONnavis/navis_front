import React, { useEffect } from 'react';
import useScoreFetch from '../../hooks/useScoreFetch';
import FileChart from '../../components/chart/FileChart';
import NonFileChart from '../../components/chart/NonFileChart';

function Chart() {
  const { scoreValue, getScoreInfo, loading, error } = useScoreFetch();

  useEffect(() => {
    getScoreInfo();
  }, []);

  useEffect(() => {
    console.log(scoreValue);
  }, [scoreValue]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-screen h-screen justify-center ">
      {error ? <NonFileChart /> : <FileChart scoreValue={scoreValue} />}
    </div>
  );
}

export default Chart;
