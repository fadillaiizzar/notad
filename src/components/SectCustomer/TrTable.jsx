import { useState } from "react";

export default function TrTable(props) {
    const { text, defaultText } = props;
    const [hasiltext, setHasiltext] = useState(defaultText);

    return (
        <tr className="flex items-center w-full text-sm"> {/* Tambahkan text-sm */}
            <td id="customer-name" className="w-[280px] h-9 flex justify-start items-center pb-2">
                <label className="cursor-pointer" htmlFor={text}>{text}</label>
            </td>
            <td className="w-[10px] h-9 flex justify-center items-center pb-2">:</td>
            <td className="w-[440px] px-4 flex justify-end items-end pt-1">
                <input
                    type="text"
                    id={text}
                    value={hasiltext}
                    onChange={(e) => setHasiltext(e.target.value)}
                    className="px-2 w-full h-9 text-sm">
                </input> {/* Tambahkan text-sm */}
            </td>
        </tr>
    );
}
