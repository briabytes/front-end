// Dependencies Imports
import React, { useState, useEffect, Component } from 'react';
import { Route, Link, Switch, useHistory, } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';


// File Imports
import './App.css';
import logo from './Anywhere Fitness.svg';
// import arrows from './data/constants';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LoginForm from './components/InstructorSignUpLogIn/InstructorLogIn';
import SignUpForm from './components/InstructorSignUpLogIn/InstructorSignUp';
import Home from './components/Home';
import StudentHome from './components/StudentComponents/StudentHome';
import InstructorHome from './components/InstructorComponents/InstructorHome';
import CreateAClass from './components/InstructorComponents/CreateAClass';
import EditClass from './components/InstructorComponents/EditClass';
import Course from './components/InstructorComponents/InstructorClass';
import { axiosWithAuth } from './utils/axiosWithAuth';

export default function App() {
  const { push } = useHistory();

  const [classList, setClassList] = useState([]);

  const getClassList = () => {
    axios
      .get('https://back-end-active-fitness.herokuapp.com/api/classes')
      .then(res => {
        console.log('setClassList', res.data)
        setClassList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getClassList()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo' />
      </header>
        <Switch>
          <Route path='/student_login'>
            <Login />
          </Route>
          <Route path='/student_signup'>
            <SignUp />
          </Route>
          <Route path='/instructor_login'>
            <LoginForm />
          </Route>
          <Route path='/instructor_signup'>
            <SignUpForm />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/student_home'>
            <StudentHome/>
          </Route>
          <Route exact path='/instructor_home'>
            <Link to='/create' component={CreateAClass}>
              <button onClick={() => push('/create')}>Create a Class</button>
            </Link>
            <br></br>
            <InstructorHome/>
          </Route>
          <Route path ='/classes/:id'>
            <Course/>
          </Route>
          <Route path='/edit-class/:id'>
            <EditClass classList={classList} setClassList={setClassList}/>
          </Route>
        </Switch>
      </div>
  );
}


