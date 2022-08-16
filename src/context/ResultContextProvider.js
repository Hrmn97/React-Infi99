import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JS Mastery");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      methods: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "4d18bb4d53mshce01f87b603e0f6p1d0933jsn97f40ef3b4ce",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });
    const data = await response.json();

    console.log(data);

    setResults(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isloading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
