import React, { useEffect, useState } from 'react';
import useScoreFetch from '../../hooks/useScoreFetch';
import FileChart from '../../components/chart/FileChart';
import NonFileChart from '../../components/chart/NonFileChart';

function Chart() {
  const { scoreValue, getScoreInfo, loading, error } = useScoreFetch();
  const [refresh, setRefresh] = useState(false); // 상태 추가

  useEffect(() => {
    getScoreInfo();
  }, [refresh]); // refresh가 변경될 때마다 사용

  useEffect(() => {
    console.log(scoreValue);
  }, [scoreValue]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-screen h-screen justify-center mt-[75px]">
      {error || !scoreValue ? (
        <NonFileChart setRefresh={setRefresh} /> // refresh 상태를 NonFileChart에 전달
      ) : (
        <FileChart scoreValue={scoreValue} />
      )}
    </div>
  );
}

export default Chart;
