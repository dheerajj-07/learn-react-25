import React, { useState,useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";


const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   //getLocalStorage()
  // },)
const [user, setUser] = useState()
const [loggedInUserData, setLoggedInUserData] = useState()
const AuthData = useContext(AuthContext) //getting data from AuthContext where all the data is kept
  // console.log(AuthData)

// useEffect(() => {
//   if(AuthData){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//     setUser(loggedInUser.role)
//   }
//   }

// }, [AuthData])
useEffect(() => {
  const loggedInUser=localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }

}, [])


const handleLogin= (email,password)=>{
  if(email=="admin@me.com"&& password=='123'){
    setUser('admin')
    
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(AuthData){
    const employee = AuthData.employees.find((e)=>email == e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
    }
  }
  else{
    alert("Invalid Credentials")
  }
}
  // handleLogin('user@me.com','123')

  return (
    <>
    {!user?<Login handleLogin={handleLogin} />:''}
    {user=='admin'?<AdminDashboard/> : (user == 'employee'?<EmployeeDashboard data={loggedInUserData}/>:null)}  
    </>
  );
};

export default App;
