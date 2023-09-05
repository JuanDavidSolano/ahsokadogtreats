import { Route, Navigate, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
