import { useContext, createContext, useState } from "react";

export const HabitContext = createContext();

export function HabitProvider({ children }) {
  const initialHabitData = [
    { name: "Meditate", repeat: "", goal: "", startDate: "", timeofDay: "" },
  ];

  const [habitData, setHabitData] = useState(initialHabitData);

  return (
    <HabitContext.Provider value={{ habitData, setHabitData }}>
      {children}
    </HabitContext.Provider>
  );
}

export const useHabit = () => useContext(HabitContext);
