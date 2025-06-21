// import React, { useState } from 'react'
// import { IoArrowUp } from "react-icons/io5";
// import { Menu, X, Table, FileText, Plus, Users, Bell, Settings, LogOut } from 'lucide-react'

// const ChatDashboard = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false)

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen)
//     }

//     const menuItems = [
//         { icon: Table, label: 'Active Tables', color: 'text-gray-700' },
//         { icon: FileText, label: 'Generate Report', color: 'text-gray-700' },
//         { icon: Plus, label: 'Create Table', color: 'text-gray-700' },
//         { icon: Users, label: 'Add Users', color: 'text-gray-700' },
//         { icon: Bell, label: 'Notifications', color: 'text-gray-700' },
//         { icon: Settings, label: 'Settings', color: 'text-gray-700' },
//         { icon: LogOut, label: 'Logout', color: 'text-red-500' }
//     ]

//     return (
//         <div className="flex h-screen bg-white">
//             {/* Main Content */}
//             <div className="flex-1 flex flex-col">
//                 {/* Header */}
//                 <header className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
//                     <h1 className="text-2xl font-semibold text-[#003059]">Geninv</h1>
                    
//                     {/* Mobile Hamburger Menu */}
//                     <button 
//                         onClick={toggleSidebar}
//                         className="lg:hidden p-2 rounded-md hover:bg-gray-100"
//                     >
//                         <Menu size={24} className="text-gray-600" />
//                     </button>
//                 </header>

//                 {/* Chat Area */}
//                 <div className="flex-1 flex flex-col p-12">
//                     {/* Welcome Message */}
//                     <div className="flex-1 flex items-center justify-center">
//                         <div className="text-center max-w-2xl">
//                             <h2 className="text-4xl font-bold text-[#003059] mb-4">
//                                 Welcome to Geninv
//                             </h2>
//                             <p className="text-xl text-gray-600 mb-8">
//                                 How can we help you today?
//                             </p>
//                         </div>
//                     </div>

//                     {/* Input Field */}
//                     <div className="border border-[#003059] rounded-lg shadow-sm  px-4 py-12 mb-24 ">
//                         <div className="flex items-center space-x-3">
//                             <textarea
//                                 type="text"
//                                 placeholder="Ask me anything about your inventory..."
//                                 className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             />
//                             <button className="bg-gray-200 text-white px-3 py-3 rounded-lg hover:bg-[#002040] transition-colors">
//                                 <IoArrowUp color='#003059'/>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Desktop Sidebar */}
//             <aside className="hidden lg:block w-64 bg-white border-l shadow-sm">
//                 <div className="p-6">
//                     <nav className="space-y-2">
//                         {menuItems.map((item, index) => {
//                             const IconComponent = item.icon
//                             return (
//                                 <button
//                                     key={index}
//                                     className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left ${item.color}`}
//                                 >
//                                     <IconComponent size={20} />
//                                     <span className="font-medium">{item.label}</span>
//                                 </button>
//                             )
//                         })}
//                     </nav>
//                 </div>
//             </aside>

//             {/* Mobile Sidebar Overlay */}
//             {isSidebarOpen && (
//                 <div className="lg:hidden fixed inset-0 z-50">
//                     {/* Backdrop */}
//                     <div 
//                         className="absolute inset-0 bg-black bg-opacity-50"
//                         onClick={toggleSidebar}
//                     ></div>
                    
//                     {/* Sidebar */}
//                     <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform">
//                         {/* Header */}
//                         <div className="flex items-center justify-between p-4 border-b">
//                             <h3 className="text-lg font-semibold text-[#003059]">Menu</h3>
//                             <button 
//                                 onClick={toggleSidebar}
//                                 className="p-2 rounded-md hover:bg-gray-100"
//                             >
//                                 <X size={20} className="text-gray-600" />
//                             </button>
//                         </div>
                        
//                         {/* Menu Items */}
//                         <nav className="p-4 space-y-2">
//                             {menuItems.map((item, index) => {
//                                 const IconComponent = item.icon
//                                 return (
//                                     <button
//                                         key={index}
//                                         className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left ${item.color}`}
//                                         onClick={toggleSidebar}
//                                     >
//                                         <IconComponent size={20} />
//                                         <span className="font-medium">{item.label}</span>
//                                     </button>
//                                 )
//                             })}
//                         </nav>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default ChatDashboard



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowUp } from "react-icons/io5";
import { Menu, X, Table, FileText, Plus, Users, Bell, Settings, LogOut } from 'lucide-react'

const ChatDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const navigate = useNavigate()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleMenuClick = (label) => {
        // Close sidebar on mobile after click
        setIsSidebarOpen(false)
        
        // Navigate based on menu item
        switch(label) {
            case 'Active Tables':
                navigate('/tables')
                break
            case 'Generate Report':
                navigate('/report')
                break
            case 'Create Table':
                // You can create a separate route for this or handle differently
                navigate('/tables')
                break
            case 'Add Users':
                navigate('/add-user')
                break
            case 'Notifications':
                navigate('/notification')
                break
            case 'Settings':
                navigate('/settings')
                break
            case 'Logout':
                // Handle logout logic here
                navigate('/login')
                break
            default:
                break
        }
    }

    const menuItems = [
        { icon: Table, label: 'Active Tables', color: 'text-gray-700' },
        { icon: FileText, label: 'Generate Report', color: 'text-gray-700' },
        { icon: Plus, label: 'Create Table', color: 'text-gray-700' },
        { icon: Users, label: 'Add Users', color: 'text-gray-700' },
        { icon: Bell, label: 'Notifications', color: 'text-gray-700' },
        { icon: Settings, label: 'Settings', color: 'text-gray-700' },
        { icon: LogOut, label: 'Logout', color: 'text-red-500' }
    ]

    return (
        <div className="flex h-screen bg-white">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-[#003059]">Geninv</h1>
                    
                    {/* Mobile Hamburger Menu */}
                    <button 
                        onClick={toggleSidebar}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                    >
                        <Menu size={24} className="text-gray-600" />
                    </button>
                </header>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col p-12">
                    {/* Welcome Message */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center max-w-2xl">
                            <h2 className="text-4xl font-bold text-[#003059] mb-4">
                                Welcome to Geninv
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                How can we help you today?
                            </p>
                        </div>
                    </div>

                    {/* Input Field */}
                    <div className="border border-[#003059] rounded-lg shadow-sm px-4 py-12 mb-24">
                        <div className="flex items-center space-x-3">
                            <textarea
                                type="text"
                                placeholder="Ask me anything about your inventory..."
                                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="bg-gray-200 text-white px-3 py-3 rounded-lg hover:bg-[#002040] transition-colors">
                                <IoArrowUp color='#003059'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 bg-white border-l shadow-sm">
                <div className="p-6">
                    <nav className="space-y-2">
                        {menuItems.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleMenuClick(item.label)}
                                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left ${item.color}`}
                                >
                                    <IconComponent size={20} />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="lg:hidden fixed inset-0 z-50">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={toggleSidebar}
                    ></div>
                    
                    {/* Sidebar */}
                    <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold text-[#003059]">Menu</h3>
                            <button 
                                onClick={toggleSidebar}
                                className="p-2 rounded-md hover:bg-gray-100"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        </div>
                        
                        {/* Menu Items */}
                        <nav className="p-4 space-y-2">
                            {menuItems.map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleMenuClick(item.label)}
                                        className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left ${item.color}`}
                                    >
                                        <IconComponent size={20} />
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatDashboard