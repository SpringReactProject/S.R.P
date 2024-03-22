import "./App.css";
import Home from "./Page/Home";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);


  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>

        백엔드 데이터 : {hello}
    </div>
  );
}

export default App;
