import { Link } from "react-router-dom"; 
import { useHabit } from "./context/habit-context";

export function Archive() { 

    const{ habitData, deleteHandler } = useHabit(); 

    return(
        <>

        <h1> Archive Page </h1>
        { 
      habitData?.map((item,index)=> { 
        return item.isArchive 
        ? 
            <div key={index} className="card-container">
            <h1> {item.name} </h1>
            <button onClick={() => deleteHandler(item.id)}> Delete </button>
            {/* <button onClick={()=>archiveHandler(item.id)}> Remove from Archive </button> */}
            </div> 
        :
        null    
         
      })
      }
        <Link to="/"> Go To Home Page </Link>
        </>
    );
}