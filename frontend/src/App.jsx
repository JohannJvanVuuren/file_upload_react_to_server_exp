import {Header} from "./components/Header.jsx";
import {LandingPage} from "./components/LandingPage.jsx";
import {Route, Routes} from "react-router-dom";
import {FileUpload} from "./components/FileUpload.jsx";

export const App = () => {

  return (
    <div className={'wrapper'}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path={"upload-file"} element={<FileUpload />} />
        </Routes>
    </div>
  )
}


