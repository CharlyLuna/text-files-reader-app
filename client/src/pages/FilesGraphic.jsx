import { useFetchFile } from "../hooks/useFetchFile";

export const FilesGraphic = () => {
  const { fileContent } = useFetchFile();

  console.log(fileContent);
  return <div>FilesGraphic</div>;
};
