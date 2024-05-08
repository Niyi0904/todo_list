import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

  const [screenSize, setScreenSize] = useState(undefined);
  const [value, setValue] = useState('')
  const [date, setDate] = useState('');
  const [add, setAdd] = useState([]);

  const handleChange = (e) => (
    setValue(e.target.value)
  )
  const handleDate = (e) => (
    setDate(e.target.value)
  )

  const newTask = {
    plan: value,
    dates: date
  }

  const handleAdd = () => {

    if(newTask.plan.trim() && newTask.dates.trim() !== '') {
      setAdd([...add, newTask]);
    }
  }

  return (
  <StateContext.Provider
    value={{
      screenSize,
      setScreenSize,
      value,
      setValue,
      date,
      setDate,
      add,
      setAdd,
      handleChange,
      handleDate, 
      handleAdd
    }}
  >
    {children}
  </StateContext.Provider>
)};

export const UseStateContext = () => useContext(StateContext);