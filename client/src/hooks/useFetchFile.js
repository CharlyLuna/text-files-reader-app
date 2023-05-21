import { useEffect, useState } from "react";

export const useFetchFile = () => {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    fetchFile();
  }, []);

  const fetchFile = async () => {
    try {
      const file = await fetch("http://localhost:8080/api/v1/file", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await file.json();
      setFileContent(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { fileContent };
};
