import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import registerationApi from '../../api/registerationApi.js'
import Notiflix from 'notiflix';

function Signup() {
    const {signup} = registerationApi()
    const [fullname, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')


    const handleSignup = async () => {
        try {
            const payload = {
                fullName: fullname,
                username: username,
                password: password,
                email: email
            }
            if (password == confirmPassword){
                const response = await signup(payload)
                if (response.statusCode === 201){
                    setFullName('')
                    setUsername('')
                    setPassword('')
                    setConfirmPassword('')
                    setEmail('')

                    Notiflix.Notify.success('Registration successful!');
                }
            } else {
                alert("Password and confirm password not correct")
            }
        } catch (error) {
            console.log("Signup failed:", error);
            alert("Registeration not completed due to some internal error")
            
        }
    }
    

    return (
        <>
        {/* <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
            <source src="12471033-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video> */}
        <div className="bg-amber-50 mt-50 ml-150 pl-15 pr-15 w-130 h-150 border-4 shadow-xl/20">
            <h1 className='text-center p-10 text-4xl'>Signup</h1>
            <input 
            className="w-100 border-4 text-xl p-1" 
            type="text" 
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Fullname'/>
            <input 
            className="w-100 border-4 mt-4 text-xl p-1" 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Username'/>
            <input 
            className="w-100 border-4 mt-4 text-xl p-1" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'/>
            <input className="w-100 border-4 mt-4 text-xl p-1" 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'/>
            <input className="w-100 border-4 mt-4 text-xl p-1" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'/>
            <button 
            className='w-100 p-1 text-xl border-4 mt-15 bg-pink-400'
            onClick={handleSignup}
            >Submit</button>
        </div>
        <div className='flex ml-185 text-center gap-1'>
            <p>Already have an account?</p>
            <Link to='/login'>
                <button className='text-green-600 font-bold'>Login now</button>
            </Link>
        </div>

        </>
    )
}

export default Signup
