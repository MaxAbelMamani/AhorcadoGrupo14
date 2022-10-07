import Home from "./components/Home";
import Game from "./components/Game";
import Team from "./components/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Team" element={ <Team/> } />
        <Route path="/Game" element={ <Game/>} />
      </Routes>
    </BrowserRouter>
  );
}