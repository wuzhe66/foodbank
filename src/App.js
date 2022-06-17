
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from './pages/LoginForm';
import Header from './components/Header'
import RegisterForm from './pages/RegisterForm';


export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },


});

//new
export const UserInContext = React.createContext({
  userInfo: '',
  setUserInfo: () => { },

});


function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];

  //new

  const [userInfo, setUserInfo] = React.useState('');

  const userValueToProvide = [userInfo, setUserInfo];


  return (
    <div >
      <LoggedInContext.Provider value={loggedInValueToProvide}>
        <UserInContext.Provider value={userValueToProvide}>

          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="LoginForm" element={<LoginForm />} />
            <Route path="RegisterForm" element={<RegisterForm />} />


            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </UserInContext.Provider>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
