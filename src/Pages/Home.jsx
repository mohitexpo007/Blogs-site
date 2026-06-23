import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

function Home(){
  return(
    <div>
      <Header/>
      <div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home;