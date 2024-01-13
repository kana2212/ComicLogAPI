import React from "react";
import { Route, Routes } from "react-router-dom";
import ComicLogTable from "../component/pages/ComicLogTable";
import { LogPage } from "../component/pages/LogPage";
import Login from "../component/pages/Login";
import { NotFound } from "../component/pages/NotFound";
import Top from "../component/pages/Top";
import { CreateComicInput } from "../hooks/CreateComicInput";
import { ComicInputProvider } from "../hooks/provider/ComicInputProvider";

export const Router = () => {
  return (
    <ComicInputProvider>
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/logpage" element={<LogPage />} />
        <Route path="/comic/create" element={<CreateComicInput />} />
        <Route path="/comic/logs" element={<ComicLogTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ComicInputProvider>
  );
};
