import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={5000} />
      </Router>
    </>
  );
}

export default App;
