import { useState } from "react";
import { useFileContent } from "../hooks/useFileContent";
import folderImg from "../assets/3d-folder-img.png";

export const UploadFile = () => {
  const [file, setFile] = useState({
    name: "",
    content: "",
  });
  const { formattedContent } = useFileContent(file.content);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const fileContent = e.target.result;

      setFile({
        name: file.name,
        content: fileContent,
      });
    };
    if (file) {
      reader.readAsText(file);
    }
  };

  const handleFileUpload = () => {
    if (formattedContent.length > 0) {
      fetch("http://localhost:8080/api/v1/file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: file.name, content: formattedContent }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  console.log("Formatted value>>", formattedContent);

  return (
    <div>
      <div className='flex justify-center items-center'>
        <img
          className='w-[40vw] md:w-[30vw]'
          src={folderImg}
          alt='Folder image'
        />
      </div>
      <h1 className='text-center mb-8'>
        Select the file, we take care of the format ;D
      </h1>
      <div
        className='bg-gray-400 p-4 w-[90vw] sm:w-[50vw] text-center flex justify-center items-center m-auto mt-4
      '
      >
        <input type='file' onChange={handleFileInputChange} />
      </div>
      <div className='text-center my-8'>
        <button
          className='border border-black bg-slate-400 px-4 py-2'
          onClick={handleFileUpload}
        >
          Send file
        </button>
      </div>
    </div>
  );
};
