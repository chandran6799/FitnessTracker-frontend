import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Schedule from "./Pages/Schedule";
import Header from "./Components/Header";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Foot from "./Components/Foot";
import PrivateRoute from "./Components/PrivateRoute";
import MyDashboard from "./Pages/MyDashboard";
import Dashboard from "./Pages/Dashboard";
import Workouts from "./Pages/Workouts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/mydashboard" element={<MyDashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/workouts" element={<Workouts /> } />
          </Route>          
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
};

export default App;
