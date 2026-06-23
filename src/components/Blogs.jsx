import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from './BlogDetails';

function Blogs(){
  const {loading,posts,fetchdata}=useContext(AppContext);
  return(
    <div  className="w-11/12 max-w-[680px] mx-auto py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]">
      {loading ? (<Spinner></Spinner>) :
      
      posts.map( (post) => (
        <BlogDetails post={post} ></BlogDetails>
      ))}
    </div>
  )
}

export default Blogs;