import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";


function CategoryPage(){

  const location=useLocation();
  const navigate=useNavigate();
  const category=location.pathname.split("/").at(-1);

  return(
    <div>
      <Header></Header>
      <div>
        <button onClick={()=>{navigate(-1)}}>
          Back
        </button>
        <h2>
          Blogs On
          <span>{category}</span>
        </h2>
      </div>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage;