import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Index";
import Login from "../pages/Login/Index";


export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}