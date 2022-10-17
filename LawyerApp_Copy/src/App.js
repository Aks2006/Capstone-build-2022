import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Index";
// import About from "./components/Home/About";
import Dropdown from "./components/Home/Dropdown"
import References from "./components/Home/References";
import ChooseYourAdvocate from "./components/Home/ChooseYourAdvocate";
import Sections from "./components/Home/Sections";

import ContactUs from "./components/Home/ContactUs";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import './App.css'
import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/Home" element={<Home name={userName} />} />
          <Route path="/Dropdown" element={<Dropdown name={userName} />} />

          <Route path="/References" element={<References name={userName} />} />
          <Route path="/ChooseYourAdvocate" element={<ChooseYourAdvocate name={userName} />} />
          <Route path="/Sections" element={<Sections name={userName} />} />
          <Route path="/ContactUs" element={<ContactUs name={userName} />} />
         

        </Routes>
      </Router>
    </div>
  );
}

export default App;



// <Router>
//   <Route signin />
//   <Route signup />
//   <Route landingpage />
//   <Route path="/advocate" element={
//     <PrivateRoute>
//       <Advote />
//     </PrivateRoute>
//   }/>
//   <Route path="/references" element={
//     <PrivateRoute>
//       <Reference />
//     </PrivateRoute>
//   }/>

// </Router>


// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route contactavocate />
//         <Route references />
//         <Route referlearningences />
//       </Routes>
//     </div>
//   )
// }