import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Tooltip } from 'react-tooltip'
import Swal from "sweetalert2";


const Navbar = () => {
    const [theme, setTheme] = useState("theme")
    const {user, signOutUser, loading} = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    
    const handleIsOpen = ()=>{
      setIsOpen(!isOpen)
    }

    const handleTheme = event =>{
        if(event.target.checked){
            setTheme('dark')
            localStorage.setItem("theme", "dark")
        }
        else{
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
    }

    useEffect(()=>{
        const localTheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleSignOut = ()=>{
      signOutUser()
      .then(()=>{
        Swal.fire({
          title: "Congratulations!",
          text: "Sign Out Successful",
          icon: "success"
        });
      })
     }


     const navLinks = <>
     <NavLink className={({isActive})=> isActive ? "text-[#FA7436] font-bold " : ""  }  to="/">Home</NavLink>
 
    
       <NavLink to="/all-tourist-spot"  className={({isActive})=> isActive ? "text-[#FA7436] font-bold" : ""  }>All Tourists Spot</NavLink>
       <NavLink to="/add-tourist-spot"  className={({isActive})=> isActive ? "text-[#FA7436] font-bold" : ""  }>Add Tourists Spot</NavLink>
       
      <NavLink  to="/myList"  className={({isActive})=> isActive ? "text-[#FA7436] font-bold" : ""  }>My List</NavLink> 
   
     </>
    return (
      <div className="navbar font-poppins bg-base-200 lg:py-6 lg:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
          <label className="btn btn-circle swap swap-rotate">
      
    
      <input type="checkbox" />
      
      <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
      
      <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
      
    </label>
          </div>
          <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-40">
           {navLinks}
            
          </nav>
        </div>
        <Link to="/" className="btn btn-ghost text-xl md:text-2xl lg:text-3xl">
           
            <span className="text-black"><span className="text-[#FA7436]">Tropi</span>Tour</span>
    
        </Link>
      </div>
      <div className="navbar-center md:ml-12 hidden md:flex lg:flex">
        <nav className="menu menu-horizontal gap-3 px-1 text-[17px]">
          {navLinks}
        </nav>
      </div>
      <div>
        
      </div>
      <div className="navbar-end ">
      <label className="cursor-pointer mr-2 md:mr-4 grid place-items-center">
  <input type="checkbox" onChange={handleTheme}  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 "/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
     {loading ? <div><span className="loading loading-ring loading-lg"></span></div> : (user ) ? <div className="dropdown dropdown-end relative">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-warning   tooltip-left"    data-tip={user?.displayName} onClick={handleIsOpen}>
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
            </div>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-40 md:w-60 lg:w-60 absolute top-full  ${
              isOpen ? '' : 'hidden'
            }`}>
    
              <div className="flex flex-col lg:flex-row md:flex-row  items-center md:gap-3 lg:gap-3 md:pb-8 lg:pb-8">
                <div className="w-12 rounded-full">
                <img src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" className="" />
                </div>
                <div>
                <h3 className="md:text-[18px] lg:text-[18px] font-medium   w-full ">{user?.displayName || "Name not found"}</h3>
                </div>
              
              </div>
           
           
            
    
            
           
            
            <li className="text-[17px] border-t-2 border-[#0000000d] ">
            <Link onClick={handleSignOut} className="btn  bg-[#FA7436] text-white" >  Sign Out</Link>
            </li>
            
          </ul>
        </div> :
        (!loading ) ? 
        <Link to="/login" className="btn  bg-[#FA7436] text-white" > Sign In</Link> : "" }
    
       
      
      
        
        
      </div>
    </div>
    );
};

export default Navbar;