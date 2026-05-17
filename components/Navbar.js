"use client"
import React , {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)
 
    return (
        <nav className='bg-blue-950 text-white flex justify-between items-center px-4 md:h-16  flex-col md:flex-row'>
  
                <Link  className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
                <img className='invertImg' src="tea.gif" width={44} alt="" />
                <span className='text-xl md:text-base my-3 md:my-0'>Get me A Chai!</span>
                </Link>
               
            {/* <ul classNameName='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}
            <div className='relative flex flex-col md:block gap-4 '>
                
                {session && <><button onClick={()=> setShowdropdown(!showdropdown)} onBlur={()=> {setTimeout(() => {
                     setShowdropdown(false)
                }, 100); }}
                 id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex mx-4 items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-blue-500 rounded-lg" type="button">
                    Welcome {session.user.email}
                    <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                </button>

                    <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px]
        bg-gray-700 rounded-lg 
                       bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}>
                        <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded hover:bg-slate-500">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded hover:bg-slate-500">Your Page</Link>
                            </li>
                            <li>
                                <Link onClick={()=> signOut()} href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded hover:bg-slate-500">Sign out</Link>
                            </li>
                        </ul>
                    </div></>
                }

              


                {session && <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut() }} >Logout</button>}
                {!session &&

                    <Link href={"/login"}>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}
            </div>

        </nav>
    )
}

export default Navbar
