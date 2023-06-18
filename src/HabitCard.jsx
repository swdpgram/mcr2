import { useHabit } from "./context/habit-context";

export function HabitCard() { 

    const { habitData, archiveHandler, deleteHandler} = useHabit(); 

    return(
        <>
        { 
      habitData?.map((item,index)=> { 
        return !item.isArchive ? 
            <div key={index} className="card-container">
            <h1> {item.name} </h1>
            {/* <button onClick={()=>archiveHandler(item.id)}> {item.isArchive ? "Remove from Archive" : "Add to Archive"} </button> */}
            { item.isArchive ? "Added to Archive" : <button onClick={()=>archiveHandler(item.id)}> Add to Archive </button> } 
            <button onClick={() => deleteHandler(item.id)}> Delete </button>
            </div> 
        : 
        null
      })
      }
        </>
    ); 
}