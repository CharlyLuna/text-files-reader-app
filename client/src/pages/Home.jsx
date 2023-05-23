import { useNavigate } from "react-router-dom";
import folderImg from "../assets/3d-folder-img.png";
import graphImg from "../assets/graph-3d.png";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-6 mt-8 items-center'>
      <h1 className='text-lg md:text-2xl font-semibold'>
        Hello there! Choose what you want to do
      </h1>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='flex flex-col items-center rounded-md justify-center p-6 bg-slate-100 w-[60vw] md:w-[30vw]'>
          <div className='relative'>
            <img className='h-[10vw]' src={folderImg} alt='Upload file image' />
          </div>
          <button
            className='bg-slate-600 text-white px-4 py-2 rounded-md mt-2 text-sm'
            onClick={() => navigate("/upload")}
          >
            Go to upload file page
          </button>
        </div>
        <div className='flex flex-col items-center rounded-md justify-center p-6 bg-slate-100 w-[60vw] md:w-[30vw]'>
          <img className='h-[10vw]' src={graphImg} alt='Upload file image' />
          <button
            className='bg-slate-600 text-white px-4 py-2 rounded-md mt-2 text-sm'
            onClick={() => navigate("/graphic")}
          >
            Go to see graphic page
          </button>
        </div>
      </div>
    </div>
  );
};
