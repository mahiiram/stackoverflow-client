import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { fetchAllQuestions } from './actions/question';
import Root from './Root';
import { fetchAllUsers } from './actions/users';



function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
      <Navbar/>
     <Root/>
     
      </Router>
     
    </div>
  );
}

export default App;