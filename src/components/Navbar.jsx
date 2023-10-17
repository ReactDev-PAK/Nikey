// import React from 'react'\
import { hamburger } from "../assets/icons"
import {headerLogo} from "../assets/images"
import  {navLinks} from "../constants"

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {
            navLinks.map((link_item) => {
              return (
                <li key={link_item.id}>
                  <a href={link_item.url} className="font-montserrat leading-normal text-lg text-slate-gray
                  hover:text-white-400 hover:cursor-pointer hover:bg-slate-600 hover:py-2 px-2 hover ">
                    {link_item.label}
                    </a>
                </li>
              )
            })
          }
        </ul>
         <div className="hidden max-lg:block"> 
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
      </div>
      </nav>
    </header>
  )
}

export default Navbar;
