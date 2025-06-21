import React, { useState } from 'react'
import { ArrowLeft, Search, Plus, Table } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ActiveTablesPage = () => {
      const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    const tables = [
        { id: 1, name: 'Sales Table', description: 'Track all sales transactions and revenue data' },
        { id: 2, name: 'Product Table', description: 'Manage product inventory and specifications' },
        { id: 3, name: 'Customer Table', description: 'Store customer information and contact details' }
    ]

    const handleCreateTable = () => {
        console.log('Creating new table...')
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
                <h1 className="text-2xl font-semibold text-[#003059]">Active Tables</h1>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Search Bar */}
                <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search tables..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Create Table Button */}
                <button 
                    onClick={handleCreateTable}
                    className="bg-[#003059] text-white px-6 py-3 rounded-lg hover:bg-[#002040] transition-colors flex items-center space-x-2"
                >
                    <Plus size={20} />
                    <span>Create Table</span>
                </button>

                {/* Active Tables Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Tables</h2>
                    
                    {/* Table Cards */}
                    <div className="space-y-4">
                        {tables.map((table) => (
                            <div 
                                key={table.id}
                                className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Table size={24} className="text-[#003059]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{table.name}</h3>
                                        <p className="text-gray-600 mt-1">{table.description}</p>
                                    </div>
                                    <div className="text-gray-400">
                                        <ArrowLeft size={20} className="rotate-180" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveTablesPage