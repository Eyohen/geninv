import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AddUsersPage = () => {
     const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSendInvite = () => {
        // Handle send invite logic here
        console.log('Sending invite to:', email)
    }

    const handleGoBack = () => {
        navigate('/chat')
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="flex items-center mb-8">
                <button
                onClick={handleGoBack}
                className="p-2 rounded-md hover:bg-gray-200 mr-3">
                    <ArrowLeft size={24} className="text-gray-600" />
                </button>
                <h1 className="text-2xl font-semibold text-[#003059]">Add User</h1>
            </div>

            {/* Main Content */}
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-6">
                    <p className="text-gray-600">Add a user by sending an invite to their email</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user's email address"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter temporary password"
                        />
                    </div>

                    <button 
                        onClick={handleSendInvite}
                        className="w-full bg-[#003059] text-white py-3 rounded-lg hover:bg-[#002040] transition-colors mt-6"
                    >
                        Send Invite
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddUsersPage