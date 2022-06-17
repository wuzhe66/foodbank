import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import Header from "./components/Header";
import RegisterForm from "./pages/RegisterForm";
import About from "./pages/About";
import Post from "./pages/Post";
import ItemList from "./pages/ItemList";
import SidebarLayout from "./layouts/SidebarLayout";

export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

//new
export const UserInContext = React.createContext({
  userInfo: "",
  setUserInfo: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];

  //new

  const [userInfo, setUserInfo] = React.useState("");

  const userValueToProvide = [userInfo, setUserInfo];

  return (
    <div>
      <LoggedInContext.Provider value={loggedInValueToProvide}>
        <UserInContext.Provider value={userValueToProvide}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="LoginForm" element={<LoginForm />} />
              <Route path="RegisterForm" element={<RegisterForm />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route element={<SidebarLayout />}>
                <Route path="/about" element={<About />} />
                <Route path="/post" element={<Post />} />
                <Route path="/itemList" element={<ItemList />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserInContext.Provider>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
