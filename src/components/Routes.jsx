import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "./Search";
import { Results } from "./Results";

export const Routed = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Search />}></Route>
        <Route exact path="/search" element={<Results />}></Route>
        <Route exact path="/images" element={<Results />}></Route>
        <Route exact path="/videos" element={<Results />}></Route>
        <Route exact path="/news" element={<Results />}></Route>
      </Routes>
    </div>
  );
};
