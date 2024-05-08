import Header from "./Header";
import { useState } from "react";
const Login = () => {
        const [isLoginPage, setLoginPage]  = useState(true);
        const toggleLoginPage = () => {
            setLoginPage(!isLoginPage);
        }
        return (
            <div>
                <Header />
                <div className="absolute">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
                </div>
                    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 opacity-100">
                        <h1 className="text-white mb-2"><strong>{isLoginPage ? "Sign In" : "Sign up"}</strong></h1>
                        {!isLoginPage && <div className="mb-2">
                        <input className="bg-gray-700 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Enter full name"/>
                        </div>}
                        <div className="mb-2">
                        <input className="bg-gray-700 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Enter email"/>
                        </div>
                        <div className="mb-2">
                        <input className="bg-gray-700 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder="Enter password" />
                        </div>
                        <button className="w-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center mb-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{isLoginPage ? "Sign In" : "Sign up"}</button>
                        <div>
                         <p className="text-white cursor-pointer" onClick={()=>{toggleLoginPage()}}>{isLoginPage ? "New to Netflix? Sign up now" : "Already registered? Sign In"}</p>
                        </div>
                    </form>
            </div>
        )
}

export default Login;