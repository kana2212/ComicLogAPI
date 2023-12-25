import React from "react";

import { Route, Routes } from "react-router-dom";
import Top from "../component/pages/Top";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Top />} />
    </Routes>
  );
};
