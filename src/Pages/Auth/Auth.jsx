import { useState } from 'react'
import './Auth.css'
import AboutAuth from './AboutAuth'
import { signup,login } from '../../actions/auth'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Auth(){

    const [isSignup,setIsSignup] = useState(false)
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSwitch(){
        setIsSignup(!isSignup)
    }

    function handleSubmit(e){
     e.preventDefault()

     if(!email && !password){
        alert("Enter email and password")
     }
     if(isSignup){
        if(!name){
            alert("Enter a name continue")
        }
        dispatch(signup({name,email,password},navigate))
     }else{
        dispatch(login({email,password},navigate))
     }
     
    }
    

    return(
        <section className='auth-section'>
            {isSignup && <AboutAuth/>}
            <div className='auth-container-2'>
             {!isSignup && 
              <svg className='login-logo' width="189" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path xmlns="http://www.w3.org/2000/svg" 
              d="M23 34l.8-3-16.1-3.3L7 31l16 3zM9.2 23.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 26.4l2.1-2.5-12.7-10.6-2.1 2.5zM21.5 8l-2.7 2 9.9 13.3 2.7-2L21.5 8zM7 38h16v-3H7v3z" 
              fill="#F48024"/>
              </svg>}
              <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <label htmlFor='name'>
                             <h4>Display Name</h4>
                             <input type='text' id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>
                    )
                }
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type='email' name='email' id='email'  onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
                <label htmlFor='password'>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4>Password</h4>
                    {!isSignup && <h4 style={{color:'#007ac6'}}>forgot password?</h4>}
                </div>
                   
                    <input type='password' name='password' id='password'  onChange={(e)=>{setPassword(e.target.value)}}/>
                    
                    {isSignup && <p style={{color:"6666767",fontSize:"13px"}}>Password must be contain atleast 8 characters</p>}
                </label>
                {isSignup && (
                    <label htmlFor='check'>
                        <input type='checkbox' id='check'/>
                        <p style={{fontSize:"13px"}}>Opt-in to receive occasional,<br/>
                        products updates,user research invitation,<br/>
                        company announcements.
                        </p>
                    </label>
                )}
                <button type='submit' className='auth-btn'>{isSignup?'Sign Up':'Log In'}</button>
                {isSignup && (
                    <p style={{color:"6666767",fontSize:"13px"}}>
                        By clicking "Sign Up ", you agree to our 
                          <span style={{color:'#007ac6'}}> terms of<br/>service</span>,
                         <span style={{color:'#007ac6'}}> privacy policy</span> and 
                         <span style={{color:'#007ac6'}}> cookies policy</span>
                    </p>
                )}
              </form>
              <p>
                {isSignup?'already have an account?':" Don't have an account"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup?"Log In":"Sign Up"}</button>
              </p>
            </div>
        </section>
    )
}