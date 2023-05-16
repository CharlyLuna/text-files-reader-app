import { useState } from "react";
import { useFileContent } from "./hooks/useFileContent";

function App() {
  const [fileContent, setFileContent] = useState("");
  const { formattedContent } = useFileContent(fileContent);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const fileContent = e.target.result;

      setFileContent(fileContent);
    };

    reader.readAsText(file);
  };

  console.log("Formatted value>>", formattedContent);

  return (
    <>
      <div className='bg-gray-400 p-4'>
        <input type='file' onChange={handleFileInputChange} />
      </div>
      <div>
        <p>{fileContent}</p>
      </div>
    </>
  );
}

export default App;
