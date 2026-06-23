import "./App.css";
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";
import { Routes,Route, useSearchParams, useLocation } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";


export default function App() {
  const {loading,posts,fetchdata}=useContext(AppContext);

  const[searchParams,setsearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{
    
    const page=searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchdata(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchdata(Number(page),null,category);
    }
    else{
      fetchdata(Number(page));
    }
    ;
  },[location.pathname,location.search]);

  //jb path name change ho rha hai tb chlana hai and jb page number change hoga tb(location.search)
  
  return (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
      <Route path='/tags/:tag' element={<TagPage/>}></Route>
      <Route path='/categories/:category' element={<CategoryPage/>}></Route>
    </Routes>
  );
}
