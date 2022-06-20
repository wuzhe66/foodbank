import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import SignOut from "./pages/SignOut";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
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
  setIsLoggedIn: () => {},
});

export const UserInContext = React.createContext({
  userInfo: "",
  setUserInfo: () => {},
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

              {/* tingting */}
              <Route path="details/:id" element={<Details />} />
              <Route path="/getfood" element={<GetFoodList />} />
              <Route path="grabberportal" element={<GrabberPortal />} />

              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route element={<DashboardLayout />}>
              <Route element={<SidebarLayout />}>
                <Route path="/post" element={<Post />} />
                <Route
                  path="/itemList"
                  element={isLoggedIn ? <ItemList /> : <LoginForm />}
                />
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
