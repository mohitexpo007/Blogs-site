import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination(){
  const{page,pagechangehandler,totalpages}=useContext(AppContext);
  return(
    <div>
      <div>
        {
          page>1 &&
          <button onClick={()=>(pagechangehandler(page-1))}>Previous</button>
        }
        {
          page<totalpages &&
          <button onClick={()=>(pagechangehandler(page+1))}>Next</button>
        }

        <div>
          <p>Page {page} of {totalpages}</p>
        </div>
      </div>
    </div>
  )
}

export default Pagination;