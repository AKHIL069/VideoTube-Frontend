import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import authApi from '../../api/authApi'
import Notiflix from 'notiflix'
import { useDispatch } from 'react-redux' 
import {setUserId, setFullName} from '../../redux/slices/authSlice.js'

function Login() {
    const {login} = authApi()
    const [emailorUsername, setEmailorUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async () => {
        console.log('handlelogin');
        
        try {
            const payload = {
                username: emailorUsername,
                password: password
            }
            const response = await login(payload)
            const status = response?.statusCode
            const accessToken = response?.data.accessToken

           if (status === 200 && accessToken) {
            console.log('if status');
            Notiflix.Notify.success('Login successful');
            dispatch(setUserId(response?.data.user._id))
            dispatch(setFullName(response?.data.user.fullName))
            navigate("/");
        } else {
            Notiflix.Notify.failure(response.message);
        }
        } catch (error) {
            console.error("Login Failed:", error)
            Notiflix.Notify.failure('Something went wrong. Please try again.');
        }
    }

    return (
        <>
        {/* <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
            <source src="uhd_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video> */}
        <div className="bg-amber-50 mt-50 ml-150 pl-15 pr-15 w-130 h-150 border-4 shadow-xl/20">

                <p className='text-center p-10 text-4xl'>Log In</p>
                <input 
                className="w-100 border-4 text-xl mt-20 p-1" 
                type="text" 
                value={emailorUsername}
                onChange={(e) => setEmailorUsername(e.target.value)}
                placeholder='Username or Email'
                />
                <input 
                className="w-100 border-4 mt-4 text-xl p-1" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'/>
                <div className='flex items-center gap-3 mt-35'>
                    <button 
                    className='w-50 p-1 text-xl border-4 bg-blue-400'
                    onClick={handleLogin}
                    >Login</button>
                    <button className='w-50 p-1 text-xl border-4 bg-yellow-300'>Forget Password</button>
                </div>
            </div>
            <div className='flex ml-185 text-center gap-1'>
            <p>Need to create Account?</p>
            <Link to='/signup'>
                <button className='text-green-600 font-bold'>Signup now</button>
            </Link>
        </div>
    </>
    )
}

export default Login
