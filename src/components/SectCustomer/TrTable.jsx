import { useState } from "react";

export default function TrTable(props) {
    const { text , defaultText } = props;
    const [ hasiltext , setHasiltext ] = useState(defaultText);

    return(
        <tr>
            <td className="w-2/5 pl-0 pr-4">
                <label className="cursor-pointer" htmlFor={text}>{text}</label>
            </td>
            <td className="w-[5px]">:</td>
            <td className="w-3/5 px-4">
                <input 
                    type="text"
                    id={text}
                    value={hasiltext}
                    onChange={(e) => setHasiltext(e.target.value)}
                    className="rounded px-2 py-1 w-full">
                </input>
            </td>
        </tr>
    );
}