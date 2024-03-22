import "./App.css";
import Home from "./Page/Home";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
