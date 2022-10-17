import logo from "./logo.svg";
import "./App.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);

  return (
    
      <div className="App">
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </div>
  );
}

export default App;
