import { useState, useEffect } from "react";

function NotaBarang({ setBarangData }) {
    const [data, setData] = useState([
        { no: "1", sparepart: "", jumlah: "", harga: "", total: "" },
    ]);

    const handleChange = (index, field, value) => {
        const updatedData = [...data];
        if (field === "jumlah" || field === "harga") {
            updatedData[index][field] = value;
            const jumlah = parseInt(updatedData[index].jumlah || 0);
            const harga = parseInt(updatedData[index].harga || 0);
            updatedData[index].total = isNaN(jumlah * harga) ? "" : jumlah * harga;
        } else {
            updatedData[index][field] = value;
        }
        setData(updatedData);
    };

    const addRow = () => {
        setData([
            ...data,
            { no: (data.length + 1).toString(), sparepart: "", jumlah: "", harga: "", total: "" },
        ]);
    };

    useEffect(() => {
        setBarangData(data); // Send the data to Total component
    }, [data, setBarangData]);

    const calculateGrandTotal = () => {
        return data.reduce((acc, row) => acc + (parseInt(row.total) || 0), 0);
    };

    return (
        <div className="pt-0 pb-8">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="border border-gray-300 px-2 py-2 h-12 w-[2px]">No</th>
                        <th className="border border-gray-300 px-4 py-2 h-12 w-[500px]">Sparepart</th>
                        <th className="border border-gray-300 px-4 py-2 h-12 w-[100px]">Jumlah</th>
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
                                    value={row.sparepart}
                                    onChange={(e) => handleChange(index, "sparepart", e.target.value)}
                                    className="w-full px-2 py-1 h-12 rounded"
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2 h-9 w-[100px]">
                                <input
                                    type="text"
                                    value={row.jumlah}
                                    onChange={(e) => handleChange(index, "jumlah", e.target.value)}
                                    className="w-full px-2 py-1 h-12 rounded text-center"
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2 h-9">
                                <input
                                    type="text"
                                    value={row.harga}
                                    onChange={(e) => handleChange(index, "harga", e.target.value)}
                                    className="w-full px-2 py-1 h-12 rounded"
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
                            colSpan="5"
                            className="border border-gray-300 px-4 py-2 h-9 text-center font-semibold"
                        >
                            Grand Total : Rp. <span>{calculateGrandTotal()}</span>
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

function NotaJasa({ setJasaData }) {
    const [data, setData] = useState([
        { no: "1", jasa: "", harga: "", total: "" },
    ]);

    const handleChange = (index, field, value) => {
        const updatedData = [...data];
        if (field === "harga") {
            updatedData[index][field] = value;
            const harga = parseInt(updatedData[index].harga || 0);
            updatedData[index].total = isNaN(harga) ? "" : harga;
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

    useEffect(() => {
        setJasaData(data); // Send the data to Total component
    }, [data, setJasaData]);

    const calculateGrandTotal = () => {
        return data.reduce((acc, row) => acc + (parseInt(row.total) || 0), 0);
    };

    return (
        <div className="pb-12">
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
                            Grand Total : Rp. <span>{calculateGrandTotal()}</span>
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

export default function Total() {
    const [barangData, setBarangData] = useState([]);
    const [jasaData, setJasaData] = useState([]);

    const totalBarang = barangData.reduce((acc, row) => acc + (parseInt(row.jumlah) || 0), 0);
    const totalJasa = jasaData.length;  // Total rows in NotaJasa
    const totalItem = totalBarang + totalJasa;

    const calculateGrandTotalBarang = () => {
        return barangData.reduce((acc, row) => acc + (parseInt(row.total) || 0), 0);
    };

    const calculateGrandTotalJasa = () => {
        return jasaData.reduce((acc, row) => acc + (parseInt(row.total) || 0), 0);
    };

    const grandTotalBarang = calculateGrandTotalBarang();
    const grandTotalJasa = calculateGrandTotalJasa();
    const totalTrans = grandTotalBarang + grandTotalJasa;

    return (
        <div className="p-4 mx-3">
            <NotaBarang setBarangData={setBarangData} />
            <NotaJasa setJasaData={setJasaData} />

            <h3 className="font-semibold text-xl mb-4 mt-8">Pembayaran</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold mb-2">Total Barang</h3>
                    <p>{totalBarang}</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Total Item</h3>
                    <p>{totalItem}</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Total Jasa</h3>
                    <p>{totalJasa}</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Total Trans</h3>
                    <p>Rp. <span>{totalTrans}</span></p>
                </div>
            </div>
        </div>
    );
}
