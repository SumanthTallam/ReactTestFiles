import { useState } from "react";
import CountryChange from "./Dropdown/CountryChange";
import "./App.css";
import CountryChangeTwo from "./Dropdown/CountryChangeTwo";
import Carosel from "./ImageSlider/Carosel";
import Accordian from "./Accordian/Accordian";
import FetchUsers from "./Users/FetchUsers";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./SignupPage/Signup";
import Menu from "./Menu/Menu";
import FetchDropdown from "./FetchDropdown/FetchDropdown";
import Canvas from "./Canvas/Canvas";
import Pdf from "./PDFComponent/Pdf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dropdown } from "bootstrap";
import Navbar from "./NavBar/Navbar";
import Home from "./Home";
import Test from "./Example/test";
import TypeSearch from "./TypeSearch/TypeSearch";
import BoxDelete from "./BoxDelete/BoxDelete";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route path={"/home"} element={<Home />} />
            <Route path={"/accordian"} element={<Accordian />} />
            <Route path={"/canvas"} element={<Canvas />} />
            <Route path={"/dropdown"} element={<CountryChange />} />
            <Route path={"/dropdown"} element={<CountryChangeTwo />} />
            <Route path={"/fetchdropdown"} element={<FetchDropdown />} />
            <Route path={"/menu"} element={<Menu />} />
            <Route path={"/pdf"} element={<Pdf />} />
            <Route path={"/carosel"} element={<Carosel />} />
            <Route path={"/registration"} element={<Signup />} />
            <Route path={"/users"} element={<FetchUsers />} />
            <Route path={"/typesearch"} element={<TypeSearch/>} />
            <Route path={'/boxdelete'} element = {<BoxDelete/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
