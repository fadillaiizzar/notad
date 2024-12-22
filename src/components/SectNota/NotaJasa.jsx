import { useState } from "react";

export default function NotaJasa() {
    const [data, setData] = useState([
        { no: "1", jasa: "", harga: "", total: "" },
    ]);

    const handleChange = (index, field, value) => {
        const updatedData = [...data];
        if (field === "harga") {
            updatedData[index][field] = value;
            const harga = parseInt(updatedData[index].harga || 0);
            updatedData[index].total = isNaN(harga) ? "" : harga; // Total sama dengan harga untuk setiap baris
        } else {
            updatedData[index][field] = value;
        }
        setData(updatedData);
    };

    const addRow = () => {
        setData([
            ...data,
            { no: (data.length + 1).toString(), jasa: "", harga: "", total: "" },
        ]);
    };

    const calculateGrandTotal = () => {
        return data.reduce((acc, row) => acc + (parseInt(row.total) || 0), 0);
    };

    return (
        <div className="p-4 mx-3">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="border border-gray-300 px-2 py-2 h-12 w-[2px]">No</th>
                        <th className="border border-gray-300 px-4 py-2 h-12 w-[500px]">Jasa</th>
                        <th className="border border-gray-300 px-4 py-2 h-12 w-[200px]">Harga</th>
                        <th className="border border-gray-300 px-4 py-2 h-12 w-[200px]">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-2 py-2 h-9">
                                <input
                                    type="text"
                                    value={row.no}
                                    onChange={(e) => handleChange(index, "no", e.target.value)}
                                    className="w-full px-2 py-1 h-12 rounded text-center"
                                    disabled
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2 h-9 w-[250px]">
                                <input
                                    type="text"
                                    value={row.jasa}
                                    onChange={(e) => handleChange(index, "jasa", e.target.value)}
                                    className="w-full px-2 py-1 h-12 rounded"
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2 h-9 w-[100px]">
                                <input
                                    type="text"
                                    value={row.harga}
                                    onChange={(e) => handleChange(index, "harga", e.target.value)}
                                    className="w-full px-2 py-1 h-12 rounded text-center"
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2 h-9">
                                <input
                                    type="text"
                                    value={row.total}
                                    readOnly
                                    className="w-full px-2 py-1 h-12 rounded"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td
                            colSpan="4"
                            className="border border-gray-300 px-4 py-2 h-9 text-center font-semibold"
                        >
                            Grand Total: {calculateGrandTotal()}
                        </td>
                    </tr>
                </tfoot>
            </table>
            <button
                onClick={addRow}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hide-on-pdf"
            >
                Tambah Baris
            </button>
        </div>
    );
}
