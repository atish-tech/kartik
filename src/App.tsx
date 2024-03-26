import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./commponent/Home";
import { Team } from "./commponent/Team";
import { History } from "./commponent/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/team" element={<Team />} />

    </Routes>
  );
}

export default App;
