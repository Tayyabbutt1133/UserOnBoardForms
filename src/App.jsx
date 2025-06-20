import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./(Pages)/Home";
import Onboarding from "./(Pages)/Onboarding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </>
  );
}

export default App;
