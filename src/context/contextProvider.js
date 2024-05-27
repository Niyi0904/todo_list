import { createContext, useContext, useState } from "react";
import { firestore, auth } from "../firebase/firebase.utils";
import { addUserToFirestore } from "../firebase/firebase.utils";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const StateContext = createContext();

export const ContextProvider =({children}) => {

  const [screenSize, setScreenSize] = useState(undefined);
  const [value, setValue] = useState('')
  const [date, setDate] = useState('');

  // auth.onAuthStateChanged(async userAuth =>{
  //   const uid = userAuth.uid
  //   const userRef = firestore.doc(`users/${uid}`)
  //   const snapshot = await userRef.get()
  //   const result = snapshot.data()


  // })
  const [add, setAdd] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const [currentUser, setCurrentUser] = useState({ currentUser: null })
  const [userName, setUserName] = useState({
    Name: '',
    email: ''
  });

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

    // if(newTask.plan.trim() && newTask.dates.trim() !== '') {
    //   setAdd([...add, newTask]);
    // }
    // if(newTask.plan.trim() && newTask.dates.trim() !== '') {
    //   setIsClicked(false);
    // }

    const stateChange = auth.onAuthStateChanged(async userAuth => {
      // const uid = userAuth.uid

      // addUserToFirestore(uid, newTask)

      if (userAuth) {
        const uid = userAuth.uid
        const update = await addUserToFirestore(uid, newTask)

        const tas = update.get()

        const result = (await tas).data()

        setAdd(result.newTasks)

        console.log(add)
      } else{
        alert('You have to login First')
      } 
    });
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
      handleClick,
      currentUser, setCurrentUser,
      userName, setUserName
    }}
  >
    {children}
  </StateContext.Provider>
)};

export const UseStateContext = () => useContext(StateContext);