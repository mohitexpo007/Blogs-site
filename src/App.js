import "./App.css";
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";


export default function App() {
  const {loading,posts,fetchdata}=useContext(AppContext);

  useEffect(()=>{
    fetchdata();
  },[])
  
  return (

    <div className="w-full h-full flex flex-col gap y-1 justify-center items-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>  
  );
}
