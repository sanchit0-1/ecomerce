import { useEffect, useState } from "react";
import axios from "./api/AxiosConfig"
import Nav from "./pages/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {

  return (
    <div className="h-screen w-screen bg-gray-600 px-[5%] ">
      <Nav/>
    <Mainroutes/>
    
    </div>
  )
}

export default App