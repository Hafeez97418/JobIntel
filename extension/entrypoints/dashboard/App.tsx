
import { MemoryRouter, Routes, Route } from "react-router";
import { Home } from "@/components/Home";
import { Register } from "@/components/Register";


export default function App() {
  return (
    <div>
      <MemoryRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>,
    </div>
  );
}
