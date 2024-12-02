import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constant'
import kk from '../assets/kk.png'
import { close, menu } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
   <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link to='/' className='flex items-center gap-2' onClick={() => {
        setActive("")
        window.scrollTo(0,0)
      }}>
        <img src={kk} alt='logo' className ="w-20 h-20 object-contain" />
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>
          Keshav &nbsp;
         <span className='sm:block hidden'> | Software Engineer </span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((nav) =>(
          <li onClick={()=> setActive(nav.title)} key={nav.id} className={`${active === nav.title ? 'text-white' :'text-secondary'}`}>
            <a href={`#${nav.id}`}> {nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden  flex flex-1 justify-end items-center'>
        <img 
        src={toggle ? close : menu}
         alt="menu" 
         className='w-[28px] h-[28-px] object-contain'
          onClick={()=>setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 black-gradient right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className='list-none flex flex-col justify-end items-center  gap-4'>
        {navLinks.map((nav) =>(
          <li onClick={()=>{ 
            setToggle(!toggle)
            setActive(nav.title);
            }} key={nav.id} className={`${active === nav.title ? 'text-white' :'text-secondary'}`}>
            <a href={`#${nav.id}`}> {nav.title}</a>
          </li>
        ))}
      </ul>
          </div>

      </div>
    </div>
   </nav>

  )
}

export default Navbar