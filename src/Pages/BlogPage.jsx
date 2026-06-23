import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails"


function BlogPage(){

  const[blog,setblog]=useState(null);
  const[relatedblog,setrelatedblog]=useState([]);
  const location=useLocation();
  const navigation=useNavigate();
  const{setloading,loading}=useContext(AppContext)

  const blogId=location.pathname.split("/").at(-1);

  //api give the current blog as well as all the relatedblogs when url gets the blog id so that data is what we are fetching through below function
  
  async function fetchrelatedblog(){
     setloading(true);
     let url=`${baseUrl}?blogId=${blogId}`
     try{
      const res=await fetch(url);
      const data=await res.json();
      setblog(data.blog);
      setrelatedblog(data.posts);
      console.log(data);
     }
     catch(error){
      console.log(error);
      setblog(null);
      setrelatedblog([]);
     }
     setloading(false);
  }

  useEffect( ()=>{
    if(blogId){
      fetchrelatedblog();
      console.log("Called");
    }
  },[location.pathname]);

  //kb call hoga jb url change hoga

  return(
    <div>
      <Header/>
      <div>
        <button onClick={()=>{navigation(-1)}}>
          Back
        </button>
        
      </div>
      {loading ? (<Spinner></Spinner>) :
      (blog ? (
        <div className="w-11/12 max-w-[680px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center h-screen">
          <BlogDetails post={blog}/>
          <h2>Related Blogs</h2>
          {
            relatedblog.map( (post) =>(
              <div key={post.id}>
                <BlogDetails post={post}/>
              </div>
            ))
          }
        </div>
      ) :
      (<div>No Blog Found</div>)
      
      )
      }
    </div>
  )
}

export default BlogPage;