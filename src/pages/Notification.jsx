import React from 'react'
import { ArrowLeft, Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NotificationsPage = () => {
    const navigate = useNavigate()


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
            <h1 className="text-2xl font-semibold text-[#003059]">Notifications</h1>
        </div>

            {/* Centered Bell Icon */ }
    <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <Bell size={48} className="text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No new notifications</p>
        </div>
    </div>
        </div >
    )
}

export default NotificationsPage