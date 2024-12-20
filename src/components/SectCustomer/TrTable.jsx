import { useState } from "react";

export default function TrTable(props) {
    const { text , defaultText } = props;
    const [ hasiltext , setHasiltext ] = useState(defaultText);

    return(
        <tr className="flex items-center">
            <td className="w-[180px] h-9 flex justify-start items-center">
                <label className="cursor-pointer" htmlFor={text}>{text}</label>
            </td>
            <td className="w-[10px] h-9 flex justify-center items-center pb-3">:</td>
            <td className="w-[320px] px-4 flex justify-end items-end">
                <input 
                    type="text"
                    id={text}
                    value={hasiltext}
                    onChange={(e) => setHasiltext(e.target.value)}
                    className="px-2 w-full h-9">
                </input>
            </td>
        </tr>
    );
}