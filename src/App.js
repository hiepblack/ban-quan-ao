import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Client from "./layout/Client.jsx"

function App() {
  return (
    <div className="App">
      <Client/>
      <ToastContainer />
    </div>
  );
}

export default App;
