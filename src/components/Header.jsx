import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../styles/header.css'
import { useAuth } from '../hooks/useAuth'
import { logoutUser } from '../services/auth-service'
import { CgMenuHotdog } from 'react-icons/cg'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import avatar from '../assets/avatar.jpg'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IoTv, IoHome, IoFilm, IoBookmarks } from "react-icons/io5";
import { Logo } from './Logo'

/*
  the website header
**/
const Header = () => {
  const [open, setOpen] = useState(false)
  const [navFixed, setNavFixed] = useState(false)
  const { currentUser } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setNavFixed(window.pageYOffset > 300)
    )
  }, [])

  useEffect(() => {
    if (currentUser) {
      if (location.pathname === '/login' || location.pathname === '/signup') {
        navigate('/')
      }
    }
  }, [currentUser, location, navigate])

  return (
    <header className={`header ${navFixed ? 'fixednav' : ''}`}>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        className='container'>
        <h1>
          <Link to='/'> <Logo width="10vw" height='auto' /> </Link>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
          <nav className={`nav ${open ? 'open' : ''}`}>
            <ul className='nav-list'>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(!open)}>
                  <IoHome />
                  <span>home</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/movies'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(!open)}>
                  <IoFilm />
                  <span>movies</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/tvshows'
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(!open)}>
                  <IoTv />
                  <span>series</span>
                </NavLink>
              </li>
              {currentUser && (
                <li>
                  <NavLink
                    to='/watchlist'
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => setOpen(!open)}>
                    <IoBookmarks />
                    <span>watchlist</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          <ul className={`btn-container ${open ? 'open' : ''}`}>
            {!currentUser && (
              <li>
                <NavLink
                  to={{ pathname: '/login', state: { from: location } }}
                  className='btn log-in'
                  onClick={() => setOpen(!open)}>
                  <span>Login</span>
                </NavLink>
              </li>
            )}

            {!currentUser && (
              <li>
                <NavLink
                  to='/signup'
                  className='btn sign-up'
                  onClick={() => setOpen(!open)}>
                  <span>Register</span>
                </NavLink>
              </li>
            )}

            {currentUser && (
              <li onClick={() => setOpen(!open)}>
                <button className='btn sign-up' onClick={logoutUser}>
                  <span>Log out</span>
                </button>
              </li>
            )}

            {currentUser && (
              <li>
                <img src={avatar} alt='popcorn' className='avatar' />
              </li>
            )}
          </ul>
        </div>

        <div className='hamburger' onClick={() => setOpen(!open)}>
          {!open ? (
            <CgMenuHotdog style={{ fontSize: '25px' }} />
          ) : (
            <MdOutlineRestaurantMenu style={{ fontSize: '25px' }} />
          )}
        </div>
      </motion.div>
    </header>
  )
}

export default Header
