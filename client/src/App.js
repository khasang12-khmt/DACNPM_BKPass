import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemForm from "./components/pages/AddItemForm";
import InitPage from "./components/pages/initPage";
import SearchPage from "./components/pages/searchPage";
import DisplayItem from "./components/pages/DisplayItem";
import BuyHistory from "./components/pages/BuyHistory";
import SellHistory from "./components/pages/SellHistory";
import {Comment} from './components/pages/Comment'
import {DevTeam} from './components/pages/DeveloperTeam'
import {AddComment} from './components/pages/AddComment'
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="add-item" element={<AddItemForm />} />
        <Route path="demo-item" element={<DisplayItem />} />
        <Route path="/" element={<InitPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="buy-history" element={<BuyHistory />} />
        <Route path="sell-history" element={<SellHistory />} />
        <Route path="comment" element={<Comment />} />
        <Route path ="dev" element = {<DevTeam/>}/>
        <Route path = "add-comment" element = {<AddComment/>} />
        <Route path = "register" element = {<Register/>}/>
        <Route path = "login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
