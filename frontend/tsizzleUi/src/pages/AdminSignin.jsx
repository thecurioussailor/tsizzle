import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSignin(){
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
             axios.post("https://tsizzle.onrender.com/admin/signin", {
                username,
                password
             })
                .then(
                    (response) =>{
                        console.log(response.data);
                        localStorage.clear();
                        localStorage.setItem('admintoken', response.data.token);
                        localStorage.setItem('adminusername', response.data.username);
                        navigate("/admin/productcatelog");
                    }
                )
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div>
            <div className="mt-[180px] h-auto block px-[41px] mx-auto pt-[34px] px-[14px] max-w-[400px]">
                <div className="max-w-xs">
                    <h2 className="text-xl font-medium">Admin Signin</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-6">
                            <div className="z-10 border items-start flex-col border-solid  border-black relative flex box-border h-11 px-2 py-1">
                                <label className="w-full text-xs leading-5 tracking-widest top-1.5 relative transition-[top] duration-700"></label>
                                <input onChange={(e) => {setUsername(e.target.value)}} placeholder="E-Mail" className=" bg-transparent outline-none w-full absolute h-9 box-border w-[calc(100% -.25rem)]"></input>
                            </div>
                            <p>Complete the field to continue.</p>
                        </div>
                        <div className="mt-2">
                            <div className="z-10 border items-start flex-col border-solid  border-black relative flex box-border h-11 px-2 py-1">
                                <label className="w-full text-xs leading-5 tracking-widest top-1.5 relative transition-[top] duration-700"></label>
                                <input onChange={(e) =>{setPassword(e.target.value)}} placeholder="Password" className=" bg-transparent outline-none w-full absolute h-9 box-border w-[calc(100% -.25rem)]"></input>
                            </div>
                            <p>Complete the field to continue.</p>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="w-full border bg-slate-950 h-11 text-white">
                                <span className="text-sm font-medium">Sign in</span>
                            </button>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </form>
                </div>
            </div>
        </div>
    )
}