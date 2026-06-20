import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs(){
  const {loading,posts,fetchdata}=useContext(AppContext);
  return(
    <div  className="w-11/12 max-w-[680px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]">
      {loading ? (<Spinner></Spinner>) :
      
      posts.map( (post) => (
        <div>
          <p className="font-bold text-lg">{post.title}</p>
          <p className="text-sm mt[4px]">
            By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
          </p>
          <p className="text-sm mt[4px]"> Posted On <span>{post.date}</span></p>
          <p className="text-md mt-[14px]">{post.content}</p>
          <div className="flex gap-x-4">
            {post.tags.map((tag)=>{
              return <span className="text-blue-700 underline font-bold text-xs">{`#${tag}`}</span>
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs;