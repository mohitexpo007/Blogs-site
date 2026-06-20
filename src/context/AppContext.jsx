import { useState } from "react";
import { createContext } from "react";

export const AppContext=createContext();

function AppContextProvider({children}){
  const[loading,setloading]=useState(false);
  const[page,setpage]=useState(1);
  const[posts,setpost]=useState([]);
  const[totalpages,settotalpages]=useState(null);
}