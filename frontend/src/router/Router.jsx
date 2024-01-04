import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogPage } from "../component/pages/LogPage";
import Login from "../component/pages/Login";
import Top from "../component/pages/Top";
import { CreateComicInput } from "../hooks/CreateComicInput";
import { DeleteComicLog } from "../hooks/DeleteComicLog";
import { EditComicLog } from "../hooks/EditComicLog";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Top />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/logpage" element={<LogPage />} />
      <Route path="/logpage/create" element={<CreateComicInput />} />
      <Route path="/logpage/delete" element={<DeleteComicLog />} />
      <Route
        path="/EditComicLog/:id"
        element={
          <LogPage>
            <EditComicLog />
          </LogPage>
        }
      />
    </Routes>
  );
};
