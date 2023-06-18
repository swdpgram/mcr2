import { useHabit } from "./context/habit-context";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useData } from "./context/data-context";

export function HabitCard() { 

    const { habitData, archiveHandler, deleteHandler} = useHabit(); 
    const { habit, habitHandler, initialHabitDetailsState, setHabit } = useData(); 

    return(
        <>
        { 
      habitData?.map((item,index)=> { 
        return !item.isArchive ? 
            <div key={index} className="card-container">
            <h1> {item.name} </h1>
            
{/* starts */}

<Popup
        trigger={<button className="button"> Show Details </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
      
            <div className="header"> Add your Habit </div>
            <div className="content">
              {/* Habit Title  */}
              <div className="habit-title">
                <label htmlFor="habit-name">
                  Name:
                  <input
                    type="text"
                    name="habit-name"
                    value={item.name}
                    className="habit-name-field"
                    onChange={habitHandler}
                    contentEditable="true"
                  />
                </label>
              </div>
              <div className="goal-repeat-container">
                <label htmlFor="repeat">
                  {" "}
                  Repeat:
                  <select name="repeat" onChange={habitHandler}>
                  <option> Select </option>
                    <option value="daily">
                      Daily
                    </option>
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </label>

                {/* goal */}

                <label htmlFor="goal">
                  {" "}
                  Goal:
                  <select name="goal" onChange={habitHandler}>
                  <option> Select </option>
                    <option value="once-daily">
                      Once daily
                    </option>
                    <option value="twice-daily">Twice Daily</option>
                    <option value="thrice-daily">Thrice Daily</option>
                  </select>
                </label>
              </div>

              <div className="time-startof-day-container">
                {/* time of day */}
                <label htmlFor="time-of-day">
                  {" "}
                  Time of Day:
                  <select name="time-of-day" onChange={habitHandler}>
                  <option> Select </option>
                    <option value="6:00am">6:00 AM</option>
                    <option value="6:30am">
                      6:30AM
                    </option>
                    <option value="7:00am">7:00 AM</option>
                  </select>
                </label>

                {/* start-date  */}

                <label htmlFor="start-date">
                  {" "}
                  Start Date:
                  <select name="start-date" onChange={habitHandler}>
                    <option> Select </option>
                    <option value="today">Today</option>
                    <option value="tomorrow">
                      Tomorrow
                    </option>
                    <option value="dayafter-tom">Day after tomorrow</option>
                  </select>
                </label>
              </div>
            </div>




           
            {/* {item.name} */}
           
            <div className="actions">
            
              <button
                className="button"
                onClick={() => {
                  console.log("details saved ");
                  close();
                }}
              >
                Edit and Save Details
              </button>
            </div>

          </div>
        )}
      </Popup>












{/* ends  */}

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


// 
/*
// <Popup
//         trigger={<button className="button"> Add a habit </button>}
//         modal
//         nested
//       >
//         {(close) => (
//           <div className="modal">
//             <button className="close" onClick={close}>
//               &times;
//             </button>
//             <div className="header"> Add your Habit </div>
//             <div className="content">
//               {/* Habit Title  */
//               <div className="habit-title">
//                 <label htmlFor="habit-name">
//                   Name:
//                   <input
//                     type="text"
//                     name="habit-name"
//                     value={habit.name}
//                     className="habit-name-field"
//                     onChange={habitHandler}
//                   />
//                 </label>
//               </div>
//               <div className="goal-repeat-container">
//                 <label htmlFor="repeat">
//                   {" "}
//                   Repeat:
//                   <select name="repeat" onChange={habitHandler}>
//                   <option> Select </option>
//                     <option value="daily">
//                       Daily
//                     </option>
//                     <option value="monthly">Monthly</option>
//                     <option value="weekly">Weekly</option>
//                   </select>
//                 </label>

//                 {/* goal */}

//                 <label htmlFor="goal">
//                   {" "}
//                   Goal:
//                   <select name="goal" onChange={habitHandler}>
//                   <option> Select </option>
//                     <option value="once-daily">
//                       Once daily
//                     </option>
//                     <option value="twice-daily">Twice Daily</option>
//                     <option value="thrice-daily">Thrice Daily</option>
//                   </select>
//                 </label>
//               </div>

//               <div className="time-startof-day-container">
//                 {/* time of day */}
//                 <label htmlFor="time-of-day">
//                   {" "}
//                   Time of Day:
//                   <select name="time-of-day" onChange={habitHandler}>
//                   <option> Select </option>
//                     <option value="6:00am">6:00 AM</option>
//                     <option value="6:30am">
//                       6:30AM
//                     </option>
//                     <option value="7:00am">7:00 AM</option>
//                   </select>
//                 </label>

//                 {/* start-date  */}

//                 <label htmlFor="start-date">
//                   {" "}
//                   Start Date:
//                   <select name="start-date" onChange={habitHandler}>
//                     <option> Select </option>
//                     <option value="today">Today</option>
//                     <option value="tomorrow">
//                       Tomorrow
//                     </option>
//                     <option value="dayafter-tom">Day after tomorrow</option>
//                   </select>
//                 </label>
//               </div>
//             </div>

//             {/* Close modal options  */}
//             <div className="actions">
//               {/* <Popup
//                 trigger={<button className="button"> Trigger </button>}
//                 position="top center"
//                 nested
//               >
//                 <span>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Beatae magni omnis delectus nemo, maxime molestiae dolorem
//                   numquam mollitia, voluptate ea, accusamus excepturi deleniti
//                   ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
//                 </span>
//               </Popup> */}

//               <button
//                 className="button"
//                 onClick={() => {
//                   console.log("details saved ", {...habit, id:uuidv4()});
//                   setHabitData([...habitData,{...habit, id:uuidv4()}])
//                   setHabit(initialHabitDetailsState)
//                   close();
//                 }}
//               >
//                 Save Habit details
//               </button>
//             </div>

//           </div>
//         )}
//       </Popup>
// */