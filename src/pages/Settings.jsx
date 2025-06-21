import React from 'react'
import { ArrowLeft, User, CreditCard, Users, Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SettingsPage = () => {
      const navigate = useNavigate()




    const handleGoBack = () => {
        navigate('/chat')
    }

    const settingsOptions = [
        {
            id: 1,
            name: 'Edit Profile',
            description: 'Update your personal information and preferences',
            icon: User
        },
        {
            id: 2,
            name: 'Payment Settings',
            description: 'Manage billing information and payment methods',
            icon: CreditCard
        },
        {
            id: 3,
            name: 'Team Members',
            description: 'Add, remove, and manage team member access',
            icon: Users
        },
        {
            id: 4,
            name: 'View Pricing Plans',
            description: 'Explore different subscription plans and features',
            icon: Eye
        }
    ]

    const handleSettingClick = (settingName) => {
        console.log(`Navigating to ${settingName}...`)
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
                <h1 className="text-2xl font-semibold text-[#003059]">Settings</h1>
            </div>

            {/* Settings Cards */}
            <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                    {settingsOptions.map((setting) => {
                        const IconComponent = setting.icon
                        return (
                            <div
                                key={setting.id}
                                onClick={() => handleSettingClick(setting.name)}
                                className="bg-gray-200 rounded-lg shadow-sm p-6 border hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-250"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-white rounded-lg shadow-sm">
                                        <IconComponent size={24} className="text-[#003059]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{setting.name}</h3>
                                        <p className="text-gray-600 mt-1">{setting.description}</p>
                                    </div>
                                    <div className="text-gray-400">
                                        <ArrowLeft size={20} className="rotate-180" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SettingsPage