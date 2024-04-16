import { useState } from "react"

export default function InputBox ({boxText, bottomText}) {
    const [pText, setPText] = useState("");
    return(
        <div className="mt-2">
            <div className=" flex flex-col border h-11 font-light">
                            <label className="text-sm pl-1">{boxText}</label>
                            <input onChange={(e) => {setPText(e.target.value)}} className="h-2/5 w-full border-0 outline-0 pl-1"></input>
                            {pText === '' ? (<p className="pt-2 font-light text-xs text-red-600 px-1">{bottomText}</p>) : null}
                            {/* font-light text-xs text-red-600 px-1 */}
            </div>
        </div>
    )
}