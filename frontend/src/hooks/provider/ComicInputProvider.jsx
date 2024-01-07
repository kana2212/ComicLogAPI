import React, { createContext, useContext, useState } from "react";

const ComicInputContext = createContext();

export const ComicInputProvider = ({ children }) => {
  const [inputData, setInputData] = useState({
    comicServiceName: "",
    comicTitle: "",
    volumes: "",
  });
  const [comicList, setComicList] = useState([]);

  return (
    <ComicInputContext.Provider
      value={{ inputData, setInputData, comicList, setComicList }}
    >
      {children}
    </ComicInputContext.Provider>
  );
};

export const useComicInput = () => {
  return useContext(ComicInputContext);
};
