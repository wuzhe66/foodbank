import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import SignOut from "./pages/SignOut";
import Home from "./pages/Home";
import Kids from "./pages/Kids";

import Nutrition from "./pages/Nutrition";
import Development from "./pages/Development";
import Volunteers from "./pages/Volunteers";
import Help from "./pages/Help";

import "./App.css";
import { ThemeContext } from "./context";
import Post from "./pages/Post";
import ItemList from "./pages/ItemList";
import SidebarLayout from "./layouts/SidebarLayout";
import Update from "./pages/Update";
import DashboardLayout from "./layouts/DashboardLayout";

// tingting
import GrabberPortal from "./pages/GrabberPortal";
import Details from "./pages/Details";
import GetFoodList from "./pages/GetFoodList";

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
});

export const UserInContext = React.createContext({
  userInfo: "",
  setUserInfo: () => { },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];

  const [userInfo, setUserInfo] = React.useState("");
  const userValueToProvide = [userInfo, setUserInfo];

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#595959" : "white",
        color: darkMode && "white",
      }}
    >
      <LoggedInContext.Provider value={loggedInValueToProvide}>
        <UserInContext.Provider value={userValueToProvide}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="sign-up" element={<RegisterForm />} />
              <Route path="signout" element={<SignOut />} />
              <Route path="kids" element={<Kids />} />

              <Route path="nutrition" element={<Nutrition />} />
              <Route path="development" element={<Development />} />
              <Route path="volunteers" element={<Volunteers />} />
              <Route path="help" element={<Help />} />

              {/* tingting */}
              <Route path="details/:id" element={isLoggedIn ? <Details /> : <LoginForm />} />
              <Route path='/getfood' element={<GetFoodList />} />
              <Route path='grabberportal' element={isLoggedIn ? <GrabberPortal /> : <LoginForm />} />

              <Route path="*" element={<Navigate to="/" />} />

              <Route element={<SidebarLayout />}>
                <Route path="/post" element={<Post />} />
                <Route path="/itemList" element={ isLoggedIn ? <ItemList /> : <LoginForm/>} />
                <Route path="/edit/:id" element={<Update />} />

                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Route>
          </Routes>
        </UserInContext.Provider>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
