import axios from "./api/AxiosConfig"
import Nav from "./pages/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {

  return (
    <div className="h-full w-full bg-gray-600 px-[5%] ">
    <Nav/>
    <Mainroutes/>
    
    </div>
  )
}

export default App