import { useEffect, useState } from "react";
import { useFetchFile } from "../hooks/useFetchFile";
import { calculateScoreAverages } from "../utils/functions";
import { BarChart } from "../components/BarChart";

export const FilesGraphic = () => {
  const { fileContent } = useFetchFile();
  const [averages, setAverages] = useState(null);

  useEffect(() => {
    if (fileContent) {
      const averageValues = calculateScoreAverages(fileContent);
      setAverages(averageValues);
    }
  }, [fileContent]);

  return (
    <div>
      {averages !== null ? (
        <BarChart
          data={{
            labels: Object.keys(averages),
            datasets: [
              {
                label: "Score values",
                data: Object.values(averages),
              },
            ],
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
