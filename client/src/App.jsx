import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { UploadFile } from "./pages/UploadFile";
import { Home } from "./pages/Home";
import { FilesGraphic } from "./pages/FilesGraphic";

function App() {
  return (
    <BrowserRouter>
      <header
        className='w-full flex justify-between items-center bg-white sm:px-8
      px-4 py-4 border-b border-b-[#e6ebf4]'
      >
        <Link to='/'>Home</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<UploadFile />} />
          <Route path='/graphic' element={<FilesGraphic />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
