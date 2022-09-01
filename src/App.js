import {Route, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import QuizSelect from './components/QuizSelect'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={QuizSelect}></Route>
      </Routes>
    </Router>

  );
}

export default App;
