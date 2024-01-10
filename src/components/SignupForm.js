import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const[formData,setformData]=useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmpassword:""
        }
    )
    const [accountType, setAccountType] = useState("student");
    const[showPassword,setPassword]=useState(false);
    const[showConfirmPassword,setConfirmPassword]=useState(false);
    function changeHandler(event)
    {
        setformData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event)
    {
        event.preventDefault();
        console.log("Hey");
       if(formData.password!==formData.confirmpassword)
       {
           toast.error("Password do not match");
           return;
       }
       setIsLoggedIn(true);
       toast.success("Account created");
       console.log(formData);
       navigate("/dashboard");

    }
 
  return (
    <div>
        {/* Student and Instructor button */}
        <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
            <button 
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
          onClick={() => setAccountType("student")}
            >
            Student
            </button>
            <button
            
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
          onClick={() => setAccountType("instructor")}
          >
          Instructor
          </button>
        </div>
        <form onSubmit={submitHandler}>
        <div className='flex gap-x-4 mt-[20px] '>
        <label className='w-full'>
           <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" >
                First Name <sup className="text-pink-200">*</sup>
           </p>
           <input
               required
                type="text"
                    name='firstname'
                    value={formData.firstname}
                    onChange={changeHandler}
                    placeholder='Enter your First Name '
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                
       </label>

       <label className='w-full '>
           <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Last Name <sup className="text-pink-200">*</sup>
           </p>
           <input
           
               required
                type="text"
                    name='lastname'
                    value={formData.lastname}
                    onChange={changeHandler}
                    placeholder='Enter your Last Name '
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                
       </label>
        </div>
        <div >
        <label className='w-full'>
           <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Email <sup className="text-pink-200">*</sup>
           </p>
           <input
               required
                type="email"
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter your Email'
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                
       </label>
     </div>
      
       
        
       
    
       <div className='flex gap-x-4 mt-[20px]'>
       <label className=' w-full relative'>
           <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Create password <sup className="text-pink-200">*</sup>
           </p>
           <input
               required
                type= {showPassword ? ("text") : ("password")}
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter your password'
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                <span onClick={() => setPassword((prev) => !prev)}  className="absolute right-3 top-[38px] cursor-pointer ">
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
               
       </label>
       <label className=' w-full relative'>
           <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Confirm password <sup className="text-pink-200">*</sup>
           </p>
           <input
               required
                type= {showConfirmPassword ? ("text") : ("password")}
                    name='confirmpassword'
                    value={formData.confirmpassword}
                    onChange={changeHandler}
                    placeholder='Enter your password'
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                <span onClick={() => setConfirmPassword((prev) => !prev)}  className="absolute right-3 top-[38px] cursor-pointer ">
                    {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                
       </label>
       </div>
       <button className="w-full bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Create  Account </button>
        </form>
    </div>
  )
}

export default SignupForm