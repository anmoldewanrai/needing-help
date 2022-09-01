import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizSelect from './components/QuizSelect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizSelect/>} />
      </Routes>
    </Router>
  );
}

export default App;
