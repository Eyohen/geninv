import React from 'react'
import { ArrowLeft, Download } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { useNavigate } from 'react-router-dom'

const GenerateReportPage = () => {
      const navigate = useNavigate()
    // Sample data for bar chart
    const salesData = [
        { month: 'Jan', sales: 4000 },
        { month: 'Feb', sales: 3000 },
        { month: 'Mar', sales: 5000 },
        { month: 'Apr', sales: 4500 },
        { month: 'May', sales: 6000 },
        { month: 'Jun', sales: 5500 }
    ]

    // Sample data for pie chart
    const categoryData = [
        { name: 'Electronics', value: 400, color: '#003059' },
        { name: 'Clothing', value: 300, color: '#0066CC' },
        { name: 'Home & Garden', value: 200, color: '#66B2FF' },
        { name: 'Sports', value: 100, color: '#B3D9FF' }
    ]

    const handleExport = () => {
        console.log('Exporting report...')
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
                <h1 className="text-2xl font-semibold text-[#003059]">Generate Report</h1>
            </div>

            {/* Charts Container */}
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Bar Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Comparison by Month</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="sales" fill="#003059" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales by Category</h2>
                    <div className="flex justify-center">
                        <ResponsiveContainer width={400} height={300}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Export Button */}
                <div className="text-center">
                    <button 
                        onClick={handleExport}
                        className="bg-[#003059] text-white px-8 py-3 rounded-lg hover:bg-[#002040] transition-colors flex items-center space-x-2 mx-auto"
                    >
                        <Download size={20} />
                        <span>Export Report</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GenerateReportPage