import { useContext, createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const initialHabitDetailsState = {
    name: "",
    repeat: "",
    goal: "",
    timeofDay: "",
    startDate: "",
  };

  const [habit, setHabit] = useState(initialHabitDetailsState);

  const habitHandler = (event) => {
    const habitFormDetailName = event.target.name;
    console.log("detail name", habitFormDetailName);

    switch (habitFormDetailName) {
      case "habit-name":
        setHabit({ ...habit, name: event.target.value });
        break;

      case "repeat":
        setHabit({ ...habit, repeat: event.target.value });
        break;

      case "goal":
        setHabit({ ...habit, goal: event.target.value });
        break;

      case "time-of-day":
        setHabit({ ...habit, timeofDay: event.target.value });
        break;

      case "start-date":
        setHabit({ ...habit, startDate: event.target.value });
        break;

      default:
        console.log("end of switch");
        break;
    }
  };

  return (
    <DataContext.Provider
      value={{ habit, setHabit, habitHandler, initialHabitDetailsState }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
