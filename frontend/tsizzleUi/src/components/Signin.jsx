import { useNavigate } from "react-router-dom"
import InputBox from "./InputBox";
import { useState } from "react";
import axios from 'axios'

export default function Signin(){

        const navigate = useNavigate();
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [isChecked, setIsChecked] =useState(false);
        const handlesSignin = async (e) => {
            e.preventDefault();
            try{
                const response = await axios.post("http://localhost:3000/admin/signin", {
                username,
                password,
            });
            console.log(response.data);
           // localStorage.removeItem('token');
            localStorage.setItem('token', response.data.token)
          //  isChecked === 'true' ? localStorage.setItem('token', response.data.token) : null;
            navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 h-auto p-6">
                <h2 className="mb-4 text-xl">Sign in</h2>
                <form onSubmit={handlesSignin}>
                    <div className="w-full mt-6">
                        <InputBox onChange={(e) =>{
                            setUsername(e.target.value)
                        }} boxText="Email" bottomText="Complete this field to continue"/>
                        
                    </div>
                    <div className="w-full mt-6">
                        <InputBox onChange={(e) =>{
                            setPassword(e.target.value)
                        }} boxText="Password" bottomText="Complete this field to continue"/>
                    </div>
                    <div className="w-full mt-4">
                        <label>
                            <input checked={isChecked} onChange={(e) =>{
                                setIsChecked(e.target.checked);
                                console.log(e.target.checked)
                            }} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded-none border-gray-300" type="checkbox"></input>
                            <span className="text-slate-900 text-sm">Stay logged in</span>
                        </label>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="w-full border bg-slate-950 h-11 text-white">
                            <span className="text-sm font-medium">Sign in</span>
                        </button>
                    </div>
                </form>
                <button onClick={() =>{ navigate("/createaccount")}} className="flex justify-center w-full h-11 items-center mt-3.5 border border-black text-sm text-slate-950">
                    <span className="font-medium">Create account</span>
                </button>
                <p className="text-xs text-center mt-4">
                    <a className="underline decoration-1 underline-offset-4">
                        Forgotten your password?
                    </a>
                </p>
            </div>
        </div>
    )
}