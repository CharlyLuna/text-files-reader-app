import { useEffect, useState } from "react";

export const useFileContent = (fileContent) => {
  const [formattedContent, setFormattedContent] = useState([]);

  useEffect(() => {
    if (fileContent !== "") {
      formatContent(fileContent);
    }
  }, [fileContent]);

  const formatContent = (content) => {
    const separateValues = content.split("|");
    const data = [];
    for (let i in separateValues) {
      separateValues[i] = separateValues[i].split(" ");
      data.push(separateValues[i]);
    }
    setFormattedContent([...data]);
  };

  return {
    formattedContent,
  };
};
