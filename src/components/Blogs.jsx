import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs(){
  const {loading,posts,fetchdata}=useContext(AppContext);
  return(
    <div>
      {loading ? (<Spinner></Spinner>) :
      
      posts.map( (post) => (
        <div>
          <p className="font-bold">{post.title}</p>
          <p>
            By <span>{post.author}</span> on <span>{post.category}</span>
          </p>
          <p> Posted On <span>{post.date}</span></p>
          <p>{post.content}</p>
          <div>
            {post.tags.map((tag)=>{
              return <span>{`#${tag}`}</span>
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs;