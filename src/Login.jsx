import {React,useState} from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from './helpers/AxiosInstance';
import { useNavigate } from 'react-router';

const Login = () => {
const navigate = useNavigate();
  let [data,setdata]=useState({userEmail:"", password:""})
  let {userEmail,password}=data
  let handleChange=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setdata({...data,[name]:value})
  }
    // let handleSubmit= async(e)=>{
    //   e.preventDefault()
    //   let payload={userEmail,password}
    //   let { data }= await axiosInstance.post("/login",payload)
    //   console.log(data)
    //   alert("sucessfully logged in")
    //   navigate("/home")
    // }
    const handleSubmit= async(e)=> {
      e.preventDefault();
      let payload = { userEmail, password }
      try {
        const response = await axiosInstance.post("/login", payload);
        console.log('Server Response:', response);
        alert("Successfully logged in");
        navigate("/home");
       }
      catch (error) {
        console.error("Login failed:", error.message);
        alert(`Login failed: ${error.message}`);
      }
    }

  return (
    <div id='login1'>
    {/* <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1689967398~exp=1689967998~hmac=ca7ea215d94e7ab0152f08f180330f76fd738f6f06b5221cf8178f06f4879ffc" alt="" id='img1'/> */}
    <h1 id="main">Welcome</h1>
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
        <div id='last'>
           <label htmlFor=''>Email</label>
         <input type="text" name="userEmail" value={userEmail} onChange={handleChange} />
         </div>
         <div id='last'>
           <label htmlFor=''>Password</label>
           <input type="password" name="password" value={password} onChange={handleChange} />
         </div>
         <div id='last'>
          <button>Login</button>
         </div>
         <div id='last'>
            <h4>Click here to <Link to="/signup">signup</Link> </h4>
         </div>
        </form>
    </div>
  )
}

export default Login