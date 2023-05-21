import { useEffect, useState } from "react";
import { useFileContent } from "../hooks/useFileContent";

export const UploadFile = () => {
  const [file, setFile] = useState({
    name: "",
    content: "",
  });
  const { formattedContent } = useFileContent(file.content);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setSuccess(null);
  }, [file]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file?.type === "text/plain") {
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
    } else {
      setError("The file must be a text file");
    }
  };
  console.log(file);

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
        .then((data) => {
          setSuccess(data.success);
          console.log(data);
        })
        .catch(() => setSuccess(false));
    } else {
      setSuccess(false);
    }
  };

  return (
    <div>
      <h1 className='text-center mb-8'>
        Select the file, we take care of the format ;D
      </h1>
      <div
        className='bg-gray-400 p-4 w-[90vw] sm:w-[50vw] text-center flex justify-center items-center m-auto mt-4
      '
      >
        <input
          data-testid='file-input'
          type='file'
          onChange={handleFileInputChange}
        />
      </div>
      <div className='text-center my-8'>
        <button
          id='send-button'
          className='border border-black bg-slate-400 px-4 py-2'
          onClick={handleFileUpload}
        >
          Send file
        </button>
      </div>
      {success !== null &&
        (success === true ? (
          <div className='text-center text-green-500'>
            <p>File uploaded successfully</p>
          </div>
        ) : (
          <div className='text-center text-red-500'>
            <p>The file couldnt be uploaded</p>
          </div>
        ))}
      {error && (
        <div className='text-center text-red-500'>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
