import React,{useEffect} from 'react';
import Navbar from './components/Navigation/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './pages/HomePage/LandingPage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Signup/Login';
import WelcomePage from './pages/Dashboard/WelcomePage';
import ViewAllStudents from './pages/Dashboard/ViewAllStudents';
import ViewAllExamPapers from './pages/Dashboard/ViewAllExamPapers';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import store from "./store";
import { Provider } from 'react-redux';
import { SetAuthToken } from './utils/SetAuthToken';
import { LoadUser } from './actions/auth';

const App = () => {
  useEffect(()=>{
    if(localStorage.token){
      SetAuthToken(localStorage.token);
    }
    store.dispatch(LoadUser());
  },[]);
  
  return (
    <Provider store = {store}>
    <Router>  
    <Navbar/>
      <Routes>
        <Route exact path="/Dashboard" element = { <Dashboard/> }/>
        <Route exact path="/" element = { <LandingPage/> }/>
        <Route exact path="/signup" element = { <Signup/> }/>
        <Route exact path="/login" element = { <Login/> }/> 
        <Route exact path = "/WelcomePage" element={<WelcomePage/>}/>
        <Route exact path="/viewAllStudents" element={<ViewAllStudents/>}/>
        <Route exact path="/previousYearPapers" element={<ViewAllExamPapers/>}/>
      </Routes>
      
    </Router>

    
    
    </Provider>
  )
}

export default App 