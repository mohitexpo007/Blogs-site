import { useState } from "react";
import { createContext } from "react";
import {baseUrl} from "../baseUrl";

export const AppContext=createContext();

function AppContextProvider({children}){
  const[loading,setloading]=useState(false);
  const[page,setpage]=useState(1);
  const[posts,setpost]=useState([]);
  const[totalpages,settotalpages]=useState(null);

  async function fetchdata(page=1){
    let url=`${baseUrl}?page=${page}`;
    setloading(true);
    try{
      const res=await fetch(url);
      const output=await res.json();
      setpage(output.page);
      setpost(output.posts);
      settotalpages(output.totalPages);
      console.log(output);
    }
    catch(error){
      setpage(1);
      setpost([]);
      settotalpages(null);
      console.log(error);
    }
    setloading(false);
  }

  function pagechangehandler(page){
    setpage(page);
    fetchdata(page);
  }

  const value={
    loading,
    setloading,
    page,
    setloading,
    posts,
    setpost,
    totalpages,
    settotalpages,
    fetchdata,
    pagechangehandler
  };

  return( <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>)
}

export default AppContextProvider;