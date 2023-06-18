import { useContext, createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const HabitContext = createContext();

export function HabitProvider({ children }) {
  const initialHabitData = [
    { id:uuidv4() , name: "Meditate", repeat: "", goal: "", startDate: "", timeofDay: "", isArchive: false },
  ];

  const [habitData, setHabitData] = useState(initialHabitData);

  const archiveHandler = (id) => { 
      const archivedData =  habitData.map((item)=> item.id===id ? {...item, isArchive: !item.isArchive} : item )
      setHabitData([...archivedData]); 
  }

  const deleteHandler = (id) => { 
    const deletedData = habitData.filter((item) => item.id!==id )
    setHabitData([...deletedData]); 
  }

  return (
    <HabitContext.Provider value={{ habitData, setHabitData,archiveHandler,deleteHandler }}>
      {children}
    </HabitContext.Provider>
  );
}

export const useHabit = () => useContext(HabitContext);
