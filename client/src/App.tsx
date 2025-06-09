import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<Register />} />
    </Routes>
  );
}

export default App;
