import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dogs from "./components/Dogs.jsx";
import Homepage from "./components/Homepage.jsx";
import EachDog from "./components/EachDog.jsx";
import UpdateDog from "./components/UpdateDog.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:dogId" element={<EachDog />} />
        <Route path="/updateDog/:dogId" element={<UpdateDog />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
