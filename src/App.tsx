import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WorkoutHistory from "./pages/WorkoutHistory";
import PersonalRecords from "./pages/PersonalRecords";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="history" element={<WorkoutHistory />} />
          <Route path="records" element={<PersonalRecords />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;