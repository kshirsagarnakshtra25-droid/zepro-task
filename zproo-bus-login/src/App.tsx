import { Routes, Route, Navigate } from "react-router-dom";

import Login3 from "./pages/Login3";
import Register3 from "./pages/Register3";

function App() {
  return (
    <Routes>
      <Route path="/login3" element={<Login3 />} />
      <Route path="/register3" element={<Register3 />} />

      <Route
        path="*"
        element={<Navigate to="/login3" replace />}
      />
    </Routes>
  );
}

export default App;