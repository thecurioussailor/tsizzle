import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Profile (){

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {

         async function fetchProfile () {

            try{

                const response = await axios.get("https://tsizzle.onrender.com/user/profile",{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })
            setFirstName(response.data.user.firstName);
            setLasttName(response.data.user.lastName);
            setGender(response.data.user.gender);
            setAge(response.data.user.age);
            setPhone(response.data.user.phone);
            setDob(new Date(response.data.user.dateOfBirth).toISOString().split('T')[0]);
            setUsername(response.data.user.username);
            console.log(response.data.user);
            } catch( error) {
                console.log(error);
            }
        }
        fetchProfile();
        
    }, [])
    function logoutHandler(e){
        e.preventDefault();
        localStorage.clear();
        navigate("/");
    }
    return(
        <div className="mt-16">
        
            <div className="mx-auto my-0 max-w-4xl">
                <div className="px-10 py-8 w-full min-h-40">
                    <h6 className="mx-auto text-center text-base font-medium">My account</h6>
                    <p className="text-center text-xs">Hello, Here you can view your purchases, eidt your details or manage your returns.</p>
                </div>
                <div>
                    <div className="flex flex-col px-32">
                        <div className="text-sm font-medium">Profile Details</div>
                        <table className="my-2 px-[24px] text-sm">
                            <tbody>
                                <tr className="h-11">
                                    <td className="w-48">First name</td>
                                    <td>{firstName}</td>
                                </tr>
                                <tr className="h-11">
                                    <td className="w-48">Last name</td>
                                    <td>{lastName}</td>
                                </tr>
                                <tr className="h-11">
                                    <td className="w-48">Gender</td>
                                    <td>{gender}</td>
                                </tr>
                                <tr className="h-11">
                                    <td className="w-48">Age</td>
                                    <td>{age}</td>
                                </tr>
                                <tr className="h-11">
                                    <td className="w-48">Phone</td>
                                    <td>{phone}</td>
                                </tr>
                                <tr className="h-11">
                                    <td className="w-48">Date Of birth</td>
                                    <td>{dob}</td>
                                </tr>
                                <tr className="h-11">
                                    <td className="w-48">Username</td>
                                    <td>{username}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex justify-center ">
                    <button onClick={logoutHandler} className="bg-black text-white px-3 py-2 text-xs">Logout</button>
                </div>
                
            </div>
        </div>
    )

}