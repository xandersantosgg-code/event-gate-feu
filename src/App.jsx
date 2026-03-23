
import './App.css'
import { Routes, Route } from "react-router";
import Homepage from "./pages/homepage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
