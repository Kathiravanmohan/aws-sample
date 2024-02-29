import React from "react";

import SignIn from "./Login/SignIn";
import Signup from "./Login/Signup";

import Dashboard from "./Login/Dashboard";

import { BrowserRouter,Route,Routes, Switch } from "react-router-dom";
import Workspace from "./Workspace";
import Allapp from "./Workspace_components/Allapp";


function App() {
  
  return <>
    

    <BrowserRouter>
    <Routes>
     
    
     <Route path="/auth/login" element={<SignIn/>}/>
     <Route path="/auth/register" element={<Signup/>}/>
     <Route path="/workspace" element={<Workspace/>}/>
     <Route path="/" element={<Dashboard/>}/>
    
     <Route path="/workspace/allapp" Component={Allapp} />
     
    </Routes>
    
    </BrowserRouter>
  </>
}

export default App;
