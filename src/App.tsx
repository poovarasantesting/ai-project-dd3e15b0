import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { useAuthStore } from "./store/authStore";

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/chat" /> : <Login />} />
        <Route 
          path="/chat" 
          element={isAuthenticated ? <Chat /> : <Navigate to="/" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;