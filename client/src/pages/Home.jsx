import folderImg from "../assets/3d-folder-img.png";

export const Home = () => {
  return (
    <div className='flex flex-col gap-6 mt-8 items-center'>
      <h1>Hello there! Choose what you want to do</h1>
      <div className='flex flex-col items-center rounded-md justify-center bg-slate-100 w-[15vw]'>
        <div className='relative'>
          <div className='absolute inset-0 bg-blue-500 backdrop-filter backdrop-blur-lg'></div>
          <img
            className='relative z-10'
            src={folderImg}
            alt='Upload file image'
          />
        </div>
        <button>Go to upload file page</button>
      </div>
    </div>
  );
};
