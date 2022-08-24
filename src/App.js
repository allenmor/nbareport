import "./App.css";
import FrontPage from "./components/FrontPage";
import { Route, Routes } from "react-router-dom";
import StadiumsContainer from "./components/StadiumsContainer";
import Players from "./components/Players";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<FrontPage/>} />
      <Route path="/stadiums" element={<StadiumsContainer />} />
      <Route path="/players" element={<Players/>} />
    </Routes>
    </>
  );
}

export default App;
