import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount(){

    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    return(
        <div className="flex justify-center items-center w-full py-8"> 
            <div className="max-w-xs mb-14 mt-0 mr-auto text-black mx-auto">
                <h2 className="m-0 text-lg font-normal tracking-wide px-2">Create your account</h2>
                <form className="min-h-72 px-2 ">
                    <div className="mt-6 w-full">
                        <div className="flex h-11 py-0.5 px-2 border border-black">
                            <label className="top-2 mt-2">E-mail</label>
                            <input className="h-full outline-0 text-sm font-light ml-2"></input>
                        </div>
                        <p className="font-light text-xs text-red-600 px-1">Check your e-mail format (e.g. name@email.com)</p>
                    </div>
                    <div className="mt-4 w-full">
                        <div className="border border-black flex h-11 py-0.5 px-2">
                            <label className="top-2 mt-2">Password</label>
                            <input className="h-full outline-0 text-sm font-light ml-2"></input>
                        </div>
                        <p className="font-light text-xs text-red-600 px-1">Between 10 and 30 characters, with at least 1 letter and 1 number</p>
                        <p className="font-light text-xs text-red-600 px-1">Use between 10 and 30 characters, with at least 1 letter and 1 number</p>
                    </div>
                    <div className="flex mt-4">
                        <div className="mr-4 min-w-28 w-28">+91</div>
                        <div>7542098120</div>
                    </div>
                    <div className="mt-4">
                        <label className="flex">
                            {/* in below Input isChecked is not working and tick is not showing on clicking the box */}
                            <input className="appearance-none border border-black rounded-none h-4 w-9 my-1 mr-2" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
                            <span className="text-sm">I would like 10% off on my next purchase, plus personalised offers, news and the latest trends</span>
                        </label>
                    </div>
                    <div className="mt-4 text-white">
                        <button className="flex items-center justify-center h-11 w-full border text-sm font-medium bg-black">
                            <span>Create account</span>
                        </button>
                    </div>
                </form>
                <p className="mt-4 px-2 text-sm">
                    Already have an account?
                    <a onClick={() =>{ navigate("/signin")}} className="font-medium hover:underline">Sign in</a>
                </p>
                <div className="mt-4 px-2">
                    <p className="text-xs"> 
                        By creating an account, you confirm that you have read the <a className="underline font-medium">Privacy Policy</a> and accept the <a className="underline font-medium">Terms & Conditions</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}