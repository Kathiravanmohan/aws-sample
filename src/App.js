import React from "react";

import SignIn from "./Login/SignIn";
import Signup from "./Login/Signup";

import Dashboard from "./Login/Dashboard";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Workspace from "./Workspace";



function App() {
  
  return <>
    

    <BrowserRouter>
    <Routes>
     
     <Route path="/auth/login" element={<SignIn/>}/>
     <Route path="/auth/register" element={<Signup/>}/>
     <Route path="/workspace" element={<Workspace/>}/>
     <Route path="/" element={<Dashboard/>}/>
     
    </Routes>
    
    </BrowserRouter>
  </>
}

export default App;
