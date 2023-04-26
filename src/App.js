import "./App.css";
<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Client from "./layout/Client.jsx";
import RouterAdmin from "./router/RouterAdmin";
import { Route, Routes } from "react-router-dom";
=======
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Client from "./layout/Client.jsx"
>>>>>>> 1e2c2b772c998088db6bed524f55c4e979225c6d

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Client />} />
        <Route path="/admin/*" element={<RouterAdmin />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
