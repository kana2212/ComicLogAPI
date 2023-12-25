import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogPage } from "../components/pages/LogPage";
import Login from "../components/pages/Login";
import Top from "../components/pages/Top";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Top />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/logpage" element={<LogPage />} />
    </Routes>
  );
};
