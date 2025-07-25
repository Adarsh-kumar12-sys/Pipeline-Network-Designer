// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Removed 'as Router' alias as it's not needed here
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider } from './context/AuthContext';
import MstEditor from './pages/MstEditor'; // Main MST UI
import Home from "./pages/Home";


function App() {
  return (
    
      <AuthProvider> {/* AuthProvider is a child of the router */}
        <div> {/* You can keep this div or remove it if not needed for layout */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/network-designer" element={<MstEditor />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </AuthProvider>
   
  );
}

export default App;
