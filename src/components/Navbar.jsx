import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Tooltip } from 'react-tooltip'
import Swal from "sweetalert2";


const Navbar = () => {
    const [theme, setTheme] = useState("theme")
    const {user, signOutUser} = useAuth()
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
    return (
        <div className="max-w-[1920px] mx-auto">
            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container  flex justify-between items-center h-16 mx-auto">
		<Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
			<h1 className="text-xl font-bold"><span className="text-[#FA7436]">Tropi</span>Tour</h1>
		</Link>
		<nav className="header-links md:contents font-medium text-base  hidden ">
          <ul className="flex gap-8 md:gap-4 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FA7436] border-b-2 border-[#FA7436]"
                    : "hover:text-[#FA7436]"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-tourist-spot"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FA7436] border-b-2 border-[#FA7436]"
                    : "hover:text-[#FA7436]"
                }
              >
                <span>All Tourists Spot</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-tourist-spot"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FA7436] border-b-2 border-[#FA7436]"
                    : "hover:text-[#FA7436]"
                }
              >
                <span>Add Tourists Spot</span>
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/myList"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FA7436] border-b-2 border-[#FA7436]"
                    : "hover:text-[#FA7436]"
                }
              >
                <span>My List</span>
              </NavLink>
              
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-3 navbar-end">
        <div className="items-center flex-shrink-0 ml-4  md:flex lg:flex">
        <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" onChange={handleTheme}  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 "/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

		</div>
    <div className="flex justify-center items-center ">
{
  user ? 
  <div className="dropdown dropdown-end relative ">
    
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-warning   tooltip-top ml-14 md:ml-0"    data-tip={user?.displayName} onClick={handleIsOpen}>
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
    </div>
  </div>
  <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-40 absolute top-full  ${
      isOpen ? '' : 'hidden'
    }`}>

      <div className="flex flex-col   items-center md:gap-3 lg:gap-3 md:pb-8 lg:pb-8">
        
        <div>
        <h3 className="md:text-[18px] lg:text-[18px] text-center font-medium   w-full ">{user?.displayName || "Name not found"}</h3>
        </div>

        <ul className="mt-6">
          <li>
            <Link>
            <button onClick={handleSignOut} className="btn bg-[#FA7436] text-white">Sign Out</button>
            </Link>
          </li>
        </ul>
      </div>
   
   
    

    
    
    
    
  </ul>
</div>
  
   : <Link to="/login">
               
                 <button  className="btn bg-[#FA7436] text-white">Sign in</button>
              
     
</Link>
}
</div>
        </div>
		


   
   <button className=" p-4 md:hidden lg:hidden">
			
    <div className="dropdown dropdown-bottom dropdown-end">
<div tabIndex={0} role="button" className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg></div>
<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
<li>
<NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#FA7436] "
            : "hover:text-[#FA7436]"
        }
      >
        <span>Home</span>
      </NavLink> 
<NavLink
        to="/all-tourist-spot"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#FA7436] "
            : "hover:text-[#FA7436]"
        }
      >
        <span>All Tourists Spot</span>
      </NavLink> 
<NavLink
        to="/add-tourist-spot"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#FA7436] "
            : "hover:text-[#FA7436]"
        }
      >
        <span>Add Tourists Spot</span>
      </NavLink> 
<NavLink
        to="/my-list"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#FA7436] "
            : "hover:text-[#FA7436]"
        }
      >
        <span>My List</span>
      </NavLink> 
</li>

</ul>
</div>
</button>
   
		
	</div>
</header>
        </div>
    );
};

export default Navbar;