import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <div className='max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-md'>
                <div className='text-center'>
                    <p className='font-semibold text-3xl mb-2'>Geninv</p>
                    <p className='text-gray-600'>Create an Account</p>
                </div>
                
                <div className='space-y-4'>
                    <div>
                        <p className='mb-2 text-sm font-medium text-gray-700'>Business name</p>
                        <input 
                            className='border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            placeholder='Enter your business name'
                        />
                    </div>
                    
                    <div>
                        <p className='mb-2 text-sm font-medium text-gray-700'>Email Address</p>
                        <input 
                            className='border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            placeholder='Enter your email address'
                        />
                    </div>
                    
                    <div>
                        <p className='mb-2 text-sm font-medium text-gray-700'>Create Password</p>
                        <input 
                            type='password'
                            className='border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            placeholder='Enter your password'
                        />
                    </div>
                    
                    <div>
                        <p className='mb-2 text-sm font-medium text-gray-700'>Confirm Password</p>
                        <input 
                            type='password'
                            className='border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            placeholder='Confirm your password'
                        />
                    </div>
                    
                    <button className='bg-[#003059] text-white px-9 py-3 rounded-md mt-6 w-full hover:bg-[#002040] transition-colors'>
                        Create Account
                    </button>
                    
                    <div className='text-center text-sm text-gray-600'>
                        Already have an account? 
                        <span 
                            className='text-blue-500 cursor-pointer hover:text-blue-700 ml-1' 
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp