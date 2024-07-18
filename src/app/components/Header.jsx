import Link from "next/link"
import {
    UserButton,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs/server'
import { ClerkProvider } from "@clerk/nextjs";


const Header = () => {
    //destructure the userId from auth
    // const { userId } = auth();  


  return (
    <>
        <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
            <div className="flex items-center">
                <Link href='/'>
                    <div className="text-lg uppercase font-bold text-white">
                       Snitch
                    </div>
                </Link>
                <Link href='/dashboard'>
                    <div className="text-lg uppercase font-bold text-white ml-10">
                       Dashboard 
                    </div>
                </Link>
            </div>
            <div className="text-white">

            {/* authentication navigation */}
            <SignedIn>
                <UserButton />
            </SignedIn>

            <SignedOut>
                <SignUpButton className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Sign Up</SignUpButton>
                <SignInButton className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</SignInButton>
            </SignedOut>
            </div>
        </nav>
    </>
  )
}

export default Header