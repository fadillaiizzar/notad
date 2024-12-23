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
        <>
            <style>
                {`
                @media print {
                    .pdf {
                        font-size: 0.875rem; /* Set ukuran sama dengan text-sm Tailwind */
                    }

                    .pdf table {
                    table-layout: fixed;
                    width: 100%;
                    border-collapse: collapse;
                    }

                    .pdf td, .pdf th {
                        border: 1px solid #ddd;
                        vertical-align: middle;
                        padding: 8px;
                        line-height: 1.2;
                    }
                }
                `}
            </style>

            <div className="pt-0 pb-6 pdf">
                <table className="w-full border-collapse border border-black">
                    <thead className="my-auto">
                        <tr className="bg-gray-100 h-6">
                            <th className="border border-black px-2 w-[30px] pb-3">No</th>
                            <th className="border border-black px-4 w-[400px] text-left pb-3">Sparepart</th>
                            <th className="border border-black px-4 w-[100px] text-center pb-3">Jumlah</th>
                            <th className="border border-black px-4 w-[200px] text-center pb-3">Harga</th>
                            <th className="border border-black px-4 w-[200px] text-center pb-3">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="border-r border-black px-2 h-7">
                                    <input
                                        type="text"
                                        value={row.no}
                                        onChange={(e) => handleChange(index, "no", e.target.value)}
                                        className="w-full h-full rounded text-center"
                                        disabled
                                    />
                                </td>
                                <td className="border-r border-black px-2 h-7 w-[250px] border-b-0">
                                    <input
                                        type="text"
                                        value={row.sparepart}
                                        onChange={(e) => handleChange(index, "sparepart", e.target.value)}
                                        className="w-full px-2 h-full rounded"
                                    />
                                </td>
                                <td className="border-r border-black px-4 h-7 w-[100px]">
                                    <input
                                        type="text"
                                        value={row.jumlah}
                                        onChange={(e) => handleChange(index, "jumlah", e.target.value)}
                                        className="w-full px-2 h-full rounded text-center"
                                    />
                                </td>
                                <td className="border-r border-black px-4 h-7">
                                    <input
                                        type="text"
                                        value={row.harga}
                                        onChange={(e) => handleChange(index, "harga", e.target.value)}
                                        className="w-full px-2 h-full rounded text-center"
                                    />
                                </td>
                                <td className="px-4 h-7">
                                    <input
                                        type="text"
                                        value={row.total}
                                        readOnly
                                        className="w-full px-2 h-full rounded text-center"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr className="h-4">
                            <td
                                colSpan="5"
                                className="border border-black px-4 py-2 h-9 text-center font-semibold pb-4"> Grand Total : Rp. <span>{calculateGrandTotal()}</span>
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
        </>
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
        <div className="pb-6">
            <table className="w-full border-collapse border border-black">
                <thead className="my-auto">
                    <tr className="bg-gray-100 h-6">
                        <th className="border border-black px-2 w-[30px] pb-3">No</th>
                        <th className="border border-black px-4 w-[400px] text-left pb-3">Jasa</th>
                        <th className="border border-black px-4 w-[200px] text-center pb-3">Harga</th>
                        <th className="border border-black px-4 w-[200px] text-center pb-3">Total</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border-r border-black px-2 h-7">
                                <input
                                    type="text"
                                    value={row.no}
                                    onChange={(e) => handleChange(index, "no", e.target.value)}
                                    className="w-full h-full rounded text-center"
                                    disabled
                                />
                            </td>
                            <td className="border-r border-black px-2 h-7 w-[250px] border-b-0">
                                <input
                                    type="text"
                                    value={row.jasa}
                                    onChange={(e) => handleChange(index, "jasa", e.target.value)}
                                    className="w-full px-2 h-full rounded"
                                />
                            </td>
                            <td className="border-r border-black px-4 h-7 w-[100px]">
                                <input
                                    type="text"
                                    value={row.harga}
                                    onChange={(e) => handleChange(index, "harga", e.target.value)}
                                    className="w-full px-2 h-full rounded text-center"
                                />
                            </td>
                            <td className="px-4 h-7">
                                <input
                                    type="text"
                                    value={row.total}
                                    readOnly
                                    className="w-full px-2 h-full rounded text-center"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className="h-4">
                        <td
                        colSpan="5"
                        className="border border-black px-4 py-2 h-9 text-center font-semibold pb-4"> Grand Total : Rp. <span>{calculateGrandTotal()}</span>
                        </td>
                    </tr>
                    </tfoot>
            </table>
            <button
                onClick={addRow}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hide-on-pdf">Tambah Baris
            </button>

            <div className="mt-6 border border-black rounded-lg px-3 py-1">
                <h3 className="font-semibold mb-2">Catatan</h3>
                <textarea
                    className="w-full h-11 pr-2 pb-2  rounded-lg"
                    placeholder="Masukkan catatan dengan batas karakter 80..."
                    maxLength={80}
                />
            </div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b-2 pb-3 border-black">
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
