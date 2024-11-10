import React from 'react'
import Label from '../components/Label'
import Input from '../components/Input'
import googleIcon from '../assets/icons/Google.svg'
import divider from '../assets/images/Dividers.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useForm } from "react-hook-form"


function Login() {

    const { register, handleSubmit, formState: {errors}} = useForm();
    const [data, setData] = useState("");

    // let isError = false
    // const [emailError, setEmailError] = useState("");
    // const [passError, setPassError] = useState("");
    // localStorage.setItem('isAutorized', false)
  
  
    
    // const navigate = useNavigate(); 
  
  
  
  
    const onSubmit = (formData) => {
      setData(JSON.stringify(formData));
      console.log(data)
  
      // const storedEmail = localStorage.getItem('email'); 
      // const storedPass = localStorage.getItem('pass'); 
  
  
      // if (storedEmail !== formData.email) {
      //   setEmailError("Invalid email"); 
      // } else {
      //   setEmailError(""); 
      //   if(storedPass !== formData.pass){
      //     setPassError('Invalid password')
      //   }else{
      //     setPassError('')
      //     localStorage.setItem('isAutorized', true)
      //     setIsAutorized(true);
      //     console.log('all succes')
      //     navigate('/');
      //   }
      // }
    }
    

    return (
      <section className="flex justify-center items-center p-9 pb-40 my-20">
          <form className='max-w-80' onSubmit={handleSubmit(onSubmit)} >
              <button className='flex justify-center items-center border border-[#B6B7BC] py-3 px-6 rounded-[4px] gap-2 font-inter font-medium leading-6 w-full'><img src={googleIcon} alt="google icon" />Continue with Google</button>
              <img className='mt-8 mb-10' src={divider} alt="divider" />
  
              {/* email input */}
              <Label value={'Email'} For={'email'} />
              <Input type={'email'} id={'email'} />
              {/* <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.email?.message || emailError}</p> */}
  
              {/* password input */}
              <Label value={'Password'} For={'pass'} />
              <Input type={'password'} id={'pass'} />
              {/* <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.pass?.message || passError}</p> */}
  
              <p className='font-inter font-medium text-[12px] text-darkBlue text-right mb-7 hover:underline cursor-pointer'>Forgot Password?</p>

              <Button bgColor={'bg-darkBlue'} width={'w-full'} textColor={'text-white'} radius={'rounded'} value={'Login'} font={'font-inter'} y={'py-3'} />
              {/* <Button bgColor={'bg-darkBlue'} width={'w-full'} textColor={'text-white'} radius={'rounded'} value={'Login'} font={'font-inter'} y={'py-3'} /> */}
  
              <p className='font-inter font-normal text-sm text-darkBlue text-center mt-6'>Don't have an account?<Link to='/register'><span className='hover:underline cursor-pointer'> Sign up</span></Link>
              </p>
  
          </form>
      </section>
    )
  }
  

export default Login