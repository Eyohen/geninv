import React, { useState } from 'react';
import heroimage from '../assets/heroimage.png'
import easy from '../assets/easy.png'
import report from '../assets/report.png'
import custom from '../assets/custom.png'
import colaborate from '../assets/collaborate.png'
import FAQ from '../components/FAQ'

const Home = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">

                <span className="ml-3 text-xl text-[#003059] font-bold">Geninv</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white"
                onClick={() => setActiveTab('about')}
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white"
                onClick={() => setActiveTab('services')}
              >
                Features
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white"
                onClick={() => setActiveTab('about')}
              >
                Pricing
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white"
                onClick={() => setActiveTab('services')}
              >
                Testimonials
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white"
                onClick={() => setActiveTab('about')}
              >
                FAQ
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white"
                onClick={() => setActiveTab('services')}
              >
                Sign in
              </a>

              <button className="ml-4 px-6 py-2 rounded-md text-sm font-medium bg-[#003059] text-white">
                Get started
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white bg-[#003059]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
                onClick={() => {
                  setActiveTab('about');
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
                onClick={() => {
                  setActiveTab('about');
                  setIsMenuOpen(false);
                }}
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
                onClick={() => {
                  setActiveTab('about');
                  setIsMenuOpen(false);
                }}
              >
                Pricing
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
                onClick={() => {
                  setActiveTab('about');
                  setIsMenuOpen(false);
                }}
              >
                Testimonials
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
                onClick={() => {
                  setActiveTab('about');
                  setIsMenuOpen(false);
                }}
              >
                FAQ
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500"
                onClick={() => {
                  setActiveTab('services');
                  setIsMenuOpen(false);
                }}
              >
                Sign in
              </a>

              <button className="mt-1 w-full px-4 py-2 rounded-md text-sm font-medium bg-[#003059] text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-t from-blue-300 via-blue-100 to-white py-20">


        <div className="flex flex-col md:flex-row justify-center gap-x-32 gap-y-6 md:gap-y-0">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Take control of your</h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">inventory with</h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#003059]">Geninv</h1>
            <p className="text-lg md:text-xl text-[#003059]">No more complicated systems. Just tell us what</p>
            <p className="text-lg md:text-xl mb-8 text-[#003059]">you need, and watch us handle the rest.</p>
            <div className="flex justify-center">
              <button className="px-6 py-3 border border-[#003059] bg-white text-[#003059] font-medium rounded-lg">
                Start Your Free Trial Today
              </button>

            </div>
          </div>
          <div className="">
            <img src={heroimage} className='object-cover' />
          </div>

        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div>
          <h2 className="text-lg font-semibold mb-6 text-center">Our Features</h2>
          <h2 className="text-3xl font-semibold mb-6 text-center">Discover how our features
            can transform your inventory management.</h2>
          <p className='text-center text-lg text-gray-500'>Manage your inventory like never before. Whether you're a small business owner or a team leader.</p>

          <div className="flex justify-center mt-3">
            <button className="px-6 py-3 bg-[#003059] text-white font-medium rounded-lg">
              Get Started
            </button>
          </div>

          <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-28 mt-9'>

            <div className="bg-white rounded-lg shadow-md px-6 py-6">
              <div className='flex gap-x-3'>
                <img src={easy} className='w-16 h-16 object-contain' />
                <div>
                  <h3 className="text-xl font-semibold text-[#003059] mb-2">EASY ITEM ENTRY</h3>
                  <p className="text-gray-500 font-thin mb-4 max-w-[300px]">
                    Add items to your inventory by typing or speaking to the system. The AI understands descriptions and fills in the details for you
                  </p>
                </div>

              </div>

            </div>



            <div className="bg-white rounded-lg shadow-md px-6 py-6">
              <div className='flex gap-x-3'>
                <img src={report} className='w-16 h-16 object-contain' />
                <div>
                  <h3 className="text-xl font-semibold text-[#003059] mb-2">REPORTS GENERATION</h3>
                  <p className="text-gray-500 font-thin mb-4 max-w-[300px]">
                    Request dynamic reports with just a sentence. No complicated filters, just simple commands.
                  </p>
                </div>

              </div>
            </div>

          </div>


          <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-28 mt-9'>

            <div className="bg-white rounded-lg shadow-md px-6 py-6">
              <div className='flex gap-x-3'>
                <img src={custom} className='w-16 h-16 object-contain' />
                <div>
                  <h3 className="text-xl font-semibold text-[#003059] mb-2">CUSTOMIZABLE TABLES</h3>
                  <p className="text-gray-500 font-thin mb-4 max-w-[300px]">
                    Easily create tables for tracking expenses, sales, or any custom data with the help of AI suggestions.
                  </p>
                </div>

              </div>

            </div>



            <div className="bg-white rounded-lg shadow-md px-6 py-6">
              <div className='flex gap-x-3'>
                <img src={colaborate} className='w-16 h-16 object-contain' />
                <div>
                  <h3 className="text-xl font-semibold text-[#003059] mb-2">COLLABORATIVE ACCESS</h3>
                  <p className="text-gray-500 font-thin mb-4 max-w-[300px]">
                    Multi-user support with role-based permissions, users users can comment or update items simultaneously.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>



      {/* pricing */}
      <section className='bg-blue-50 px-4 mb-12 py-6'>

        <h2 className="text-lg font-semibold mb-6 text-center">Pricing</h2>
        <h2 className="text-3xl font-semibold mb-6 text-center">Choose the plan that fits your buisness</h2>
        <p className='text-center text-lg text-gray-500'>Choose a plan that fits your business needs. Whether you're starting small or scaling up, we have you covered.</p>

<div className='flex flex-col md:flex-row justify-center gap-x-24 gap-y-4 md:gap-y-0 mt-6'>


        <div className='bg-white shadow-lg rounded-xl px-3 py-4'>
          <p className='text-lg'>FREE</p>
          <p className='text-4xl font-semibold'>NGN 0.00 /month</p>
          <p className='text-gray-600 font-thin text-lg'>Perfect for getting started with inventory</p>

          <button className="px-12 py-3 border border-[#003059] bg-white text-[#003059] font-medium rounded-lg mt-4">
            Get Started
          </button>

          <p className='text-gray-600 font-thin text-lg mt-3'>Manage up to 50 inventory items</p>
          <p className='text-gray-600 font-thin text-lg mt-3'>Basic AI-powered item addition</p>
          <p className='text-gray-600 font-thin text-lg mt-3'>Manual inventory edits</p>
          <p className='text-gray-600 font-thin text-lg mt-3'>Generate 1 report per month</p>
          <p className='text-gray-600 font-thin text-lg mt-3'>Single-user access</p>
          <p className='text-gray-600 font-thin text-lg mt-3'>Future Updates</p>
        </div>


        <div className='bg-[#003059] shadow-lg rounded-xl px-3 py-4 text-white'>
          <p className='text-lg'>PROFESSIONAL</p>
          <p className='text-4xl font-semibold'>NGN 5000 /month</p>
          <p className=' font-thin text-lg'>Perfect for getting started with inventory</p>

          <button className="px-12 py-3 border border-[#003059] bg-white text-[#003059] font-medium rounded-lg mt-4">
            Get Started
          </button>

          <p className=' font-thin text-lg mt-3'>Manage up to 50 inventory items</p>
          <p className=' font-thin text-lg mt-3'>Basic AI-powered item addition</p>
          <p className=' font-thin text-lg mt-3'>Manual inventory edits</p>
          <p className=' font-thin text-lg mt-3'>Generate 1 report per month</p>
          <p className=' font-thin text-lg mt-3'>Single-user access</p>
          <p className=' font-thin text-lg mt-3'>Future Updates</p>
        </div>

        </div>

      </section>



      {/* ready to simplify */}
      <div className="px-4 md:px-24">
      <section className='bg-[#003059] shadow-lg rounded-xl py-12 text-white'>

        <h2 className="text-3xl font-semibold mt-6 text-center">Ready to simplify your inventory management?</h2>
        <p className='text-center text-lg mt-4'>Start with a free trial today and experience the power of Genivi</p>

        <div className="flex justify-center mt-4"><button className="bg-white text-[#003059] px-6 py-2 rounded-full">Get Started for Free</button></div>

      </section>
      </div>





      <FAQ/>

      {/* Footer */}
      <footer className="bg-[#003059] text-white py-6 px-12">

      <div className="flex justify-between">
      <p>Geninv</p>

        <p>© 2024 Genivi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;