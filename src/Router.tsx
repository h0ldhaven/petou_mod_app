import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage/HomePage.tsx";
//import ErrorPage from './pages/ErrorPage';

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
