import React, { useState } from 'react'  
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-transparent'>

      {/* Logo */}
      <Link to='/' className='max-md:flex-1'>
        <img src={assets.logo} alt="Logo" className='w-36 h-auto' />
      </Link> 

      {/* Navigation Links */}
      <div
        className={`
          z-50 flex flex-col md:flex-row items-center gap-8
          max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:justify-center
          max-md:font-medium md:text-lg px-6 md:px-8 py-8 md:py-0
          backdrop-blur bg-black/70 md:bg-transparent md:border-0
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-md:w-full' : 'max-md:w-0 overflow-hidden'}
        `}
      >
        {/* Close icon for mobile */}
        <XIcon
          className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white'
          onClick={() => setIsOpen(false)}
        />

        <Link
          to="/"
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="hover:text-pink-400 transition"
        >
          Home
        </Link>
        <Link
          to="/movies"
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="hover:text-pink-400 transition"
        >
          Movies
        </Link>
        <Link
          to="/"
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="hover:text-pink-400 transition"
        >
          Theaters
        </Link>
        <Link
          to="/"
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="hover:text-pink-400 transition"
        >
          Releases
        </Link>
        <Link
          to="/favorite"
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="hover:text-pink-400 transition"
        >
          Favorites
        </Link>
      </div>

      {/* Search and Login/User */}
      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />

        {!user ? (
          <button
            onClick={openSignIn}
            className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <MenuIcon
        className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer text-white'
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  )
}

export default Navbar
