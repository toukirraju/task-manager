import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import Home from "./pages/Home";
import "./styles/main.css";

function App() {
  return (
    <div className="text-[#111827]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={<CreateTask />} />
        <Route path="/edit/:editId" element={<EditTask />} />
      </Routes>
    </div>
  );
}

export default App;
