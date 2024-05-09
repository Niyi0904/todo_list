import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

  const [screenSize, setScreenSize] = useState(undefined);
  const [value, setValue] = useState('')
  const [date, setDate] = useState('');
  const [add, setAdd] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => (
    setValue(e.target.value)
  )
  const handleDate = (e) => (
    setDate(e.target.value)
  )

  const handleClick = () => {
    setIsClicked(true);

    console.log('isClicked is true')
  }

  const newTask = {
    plan: value,
    dates: date
  }

  const handleAdd = () => {

    if(newTask.plan.trim() && newTask.dates.trim() !== '') {
      setAdd([...add, newTask]);
    }
    if(newTask.plan.trim() && newTask.dates.trim() !== '') {
      setIsClicked(false);
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
      handleAdd,
      isClicked, setIsClicked,
      handleClick
    }}
  >
    {children}
  </StateContext.Provider>
)};

export const UseStateContext = () => useContext(StateContext);