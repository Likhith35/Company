import React, { useState,useEffect} from 'react'
import axiosInstance from './helpers/AxiosInstance';
import { useNavigate } from 'react-router';

const Signup = () => {
const navigate = useNavigate();
  const initialvalues={username:"", email:"",password:"",dob:"",phone:"",gender:""}
  const[formvalues,setFormvalues]=useState(initialvalues)
  const [formerrors,setFormerrors]=useState({})
  const [issubmit,setissubmit]=useState(false)

  let handleChange=(e)=>{
    const{name,value}=e.target
    setFormvalues({ ...formvalues,[name]:value})
    setissubmit(true)
  }

  let handleSubmit=async(e)=>{
    e.preventDefault()
    setFormerrors(validate(formvalues))
   let data=await axiosInstance.post("/signup",formvalues)
   console.log(data)
  navigate("/")
  }

  useEffect(()=>{
    console.log(formerrors)
    if(Object.keys(formerrors).length === 0 && issubmit){
      console.log(formvalues)
    }
  },[])

  let validate=(values)=>{
    const errors={}
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username="username is required"
    }
    if(!values.email){
      errors.email="email is required"
    }else if(!regex.test(values.email)){
      errors.email="this is not valid format"
    }
    if(!values.password){
      errors.password="password is required"
    }else if(values.password.length < 4){
      errors.password="password must be at least 4 characters"
    }else if(values.password.length > 10){
      errors.password="password cannot exceed more than 10 characters"
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(values.password)) {
      errors.password ="Password is not valid";
    }else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }
    if(!values.dob){
      errors.dob="please provide date"
    }
    if(!values.phone){
      errors.phone="phone number is required"
    }
    if(!values.gender){
      errors.gender="mention the gender"
    }
    return errors
  }
  return (
    <div id='login'>
       <h2>Sign up</h2>
       <form action='' onSubmit={handleSubmit} >
         <div id='last'>
         <label htmlFor=''>Name</label>
           <input type="text" name="username" value={formvalues.username} onChange={handleChange}  />
         <p>{formerrors.username}</p>
         </div>
         <div id='last'>
         <label htmlFor=''>Email</label>
           <input type="email" name="email" value={formvalues.email} onChange={handleChange} />
         <p>{formerrors.email}</p>
         </div>
         <div id='last'>
           <label htmlFor=''>Password</label>
           <input type="password" name="password" value={formvalues.password} onChange={handleChange} />
         <p>{formerrors.password}</p>
         </div>
         <div id='last'>
           <label htmlFor=''>DOB</label>
        <input type="date" name="dob" onChange={handleChange} />
        <p>{formerrors.dob}</p>
         </div>
         <div id='last'>
           <label htmlFor=''>Phone</label>
        <input type="number" name="phone" onChange={handleChange}   />
        <p>{formerrors.phone}</p>
         </div>
         <div id='gen'>
           <label htmlFor="">Gender:</label>
           <input type="radio" name="gender" value="male" id="" onChange={handleChange} />Male<input type="radio" name="gender" value="female" onChange={handleChange} />Female
           <p>{formerrors.gender}</p>
         </div>
         <div id='last'>
          <button>Signup</button>
         </div>
       </form>
    </div>
  )
}

export default Signup