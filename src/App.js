import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Client from "./layout/Client.jsx";
import RouterAdmin from "./router/RouterAdmin";
import { Route, Routes } from "react-router-dom";

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
