import React, {useState} from 'react'
import MenuBar from './Icons/MenuBar'
import Logo from './Icons/Logo'
import SearchIcon from './Icons/SearchIcon'
import SearchInput from './SearchInput'
import Menu from "./Menu";




const Header = () => {
  const [nav, setNav] = useState(false)

  const handleNav = ()=>{
   setNav(!nav)
  }
  return (
    <header className='mb-10 z-10 relative'>
      {/* <Menu/> */}
      {nav && <Menu onClickClose={()=> setNav(!nav)}/> }
      
        <div className='flex flex-row lg:justify-start md:justify-between justify-between items-center '>
          <div className='flex flex-row gap-6 items-center mr-20'>
            <MenuBar className="md:hidden lg:hidden" onClick={handleNav}/>
            <Logo/>
          </div>
          <SearchInput/>
          <SearchIcon/>
        </div>
      </header>
  )
}

export default Header;