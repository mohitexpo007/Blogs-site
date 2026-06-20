import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination(){
  const{page,pagechangehandler,totalpages}=useContext(AppContext);
  return(
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
      <div className="gap-x-2">
        {
          page>1 &&
          <button onClick={()=>(pagechangehandler(page-1))}
          className="rounded-md border px-2 py-1"
          >Previous</button>
        }
        {
          page<totalpages &&
          <button onClick={()=>(pagechangehandler(page+1))}
          className="rounded-md border px-2 py-1">Next</button>
        }

      </div>
        

        <div>
          <p>Page {page} of {totalpages}</p>
        </div>
      </div>
    </div>
  )
}

export default Pagination;