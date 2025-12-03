import "./app.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/components/Home";
import { Register } from "@/components/Register";
import DenseAppBar from "@/components/ui/AppBar";
import { Login } from "@/components/Login";
import JobsPage from "@/components/Jobs";


export default function App() {
  return (
    <div className="dashboard">
      <HashRouter>
        <DenseAppBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
