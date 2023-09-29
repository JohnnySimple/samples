import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { getCookieDetails, setCookie } from "../utils/CookieManager";

function Home() {

    const [showCookiePopup, setShowCookiePopup] = useState(false)
    const [cookieDetails, setCookieDetails] = useState(null)

    useEffect(() => {
        let cookieObject = getCookieDetails()
        setCookieDetails(cookieObject)

        if(cookieObject.action == "no" || cookieObject.consent == "no") {
            const delayCookiePopup = setTimeout(() => {
                setShowCookiePopup(true)
                clearTimeout(delayCookiePopup)
            }, 2000)
    
            return () => clearTimeout(delayCookiePopup)
        }
        
    }, [])

    const acceptAllCookies = () => {
        let cookieParams = {
            action: "yes",
            consent: "yes"
        }
        setCookie(cookieParams)
        setShowCookiePopup(false)
    }

    const rejectAllCookies = () => {
        let cookieParams = {
            action: "yes",
            consent: "no"
        }
        setCookie(cookieParams)
    }

    /**
     * cookie params
     * id
     * action
     * consent
     * analytics
     * advertisements
     */

    return (
        <div className="Home">
            <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-40 backdrop-blur-md pt-3 pb-3">
                <ul className="flex justify-center">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/newsletter">Newsletter</Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-10">
                <Outlet />
            </div>

            <div className={`h-[15em] bg-gray-200 border w-full fixed bottom-0 
            transition-transform duration-500 ease-in-out ${showCookiePopup ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="">
                    <div className="flex justify-end pr-[2rem] cursor-pointer">
                        <span className="text-2xl transition-all hover:scale-150 p-1">
                            x
                        </span>
                    </div>
                    <div className="flex justify-center text-center">
                        <p>
                            Our website uses cookies to distinguish you from other users and provide you with a 
                            good experience when you browse our website.
                            <br></br>
                            You can allow all or manage them individually. You can get more detials about our cookies
                            here.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="border bg-white p-2 m-2 hover:border-black transition-all 
                    hover:bg-blue-300 hover:text-white">
                        Manage My Preferences
                    </button>
                    <button className="border bg-white p-2 m-2 hover:border-black transition-all 
                    hover:bg-blue-300 hover:text-white" onClick={rejectAllCookies}>
                        Reject All Cookies
                    </button>
                    <button className="border bg-white p-2 m-2 hover:border-black transition-all 
                    hover:bg-blue-300 hover:text-white" onClick={acceptAllCookies}>
                        Accept All Cookies
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;