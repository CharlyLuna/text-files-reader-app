import { useEffect, useState } from "react";

export const useFileContent = (fileContent) => {
  const [formattedContent, setFormattedContent] = useState({});

  useEffect(() => {
    if (fileContent !== "") {
      formatContent(fileContent);
    }
  }, [fileContent]);

  console.log("File content>>", fileContent);

  const formatContent = (content) => {
    console.log(content);
    const separateValues = content.split("|");
    const data = {};
    for (let i in separateValues) {
      separateValues[i] = separateValues[i].split(" ");
      data[separateValues[i][0]] = Number(separateValues[i][1]);
    }
    setFormattedContent(data);
  };

  return {
    formattedContent,
  };
};
