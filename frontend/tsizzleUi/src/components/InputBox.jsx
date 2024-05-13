import { useEffect, useState } from "react"

export default function InputBox ({boxText, bottomText, onChange, inputValue}) {
    const [pText, setPText] = useState("");
    const [input, setInput] = useState(inputValue);

    function handleBlur(){
        if(!inputValue.trim()){
            setPText(bottomText);
        } else {
            setPText("");
        }
    }
    return(
        <div className="mt-2 w-full">
            <div className=" flex flex-col w-full border border-gray-400 h-11 font-light focus-within:border-black">
                            <label className="w-full text-sm pl-1">{boxText}</label>
                            <input type="text" onChange={onChange} onBlur={handleBlur} className="h-2/5 w-full border-0 outline-0 pl-1"></input>
                            {pText && <p className="pt-2 font-light text-xs text-red-600 px-1">{pText}</p>}
                            
            </div>
        </div>
    )
}