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
        setBarangData(data); 
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

            <div className="pt-0 pb-1 pdf">
                <h2 className="font-bold text-md mb-3">BIAYA SPARE PART</h2>
                <table className="w-full border-collapse border border-black">
                    <thead className="my-auto">
                        <tr className="h-6">
                            <th className="border border-black px-2 w-[30px] pb-3">No</th>
                            <th className="border border-black px-4 w-[400px] text-center pb-3">Spare Part</th>
                            <th className="border border-black px-4 w-[100px] text-center pb-3">Qty</th>
                            <th className="border border-black px-4 w-[200px] text-center pb-3">Harga</th>
                            <th className="border border-black px-4 w-[200px] text-center pb-3">Jumlah</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="border-r border-black px-2 h-8">
                                    <input
                                        type="text"
                                        value={row.no}
                                        onChange={(e) => handleChange(index, "no", e.target.value)}
                                        className="w-full h-full rounded text-center"
                                        disabled
                                    />
                                </td>
                                <td className="border-r border-black px-2 h-8 w-[250px] border-b-0">
                                    <input
                                        type="text"
                                        value={row.sparepart}
                                        onChange={(e) => handleChange(index, "sparepart", e.target.value)}
                                        className="w-full h-full px-2 rounded"
                                    />
                                </td>
                                <td className="border-r border-black px-4 h-8 w-[100px]">
                                    <input
                                        type="text"
                                        value={row.jumlah}
                                        onChange={(e) => handleChange(index, "jumlah", e.target.value)}
                                        className="w-full px-2 h-full rounded text-center"
                                    />
                                </td>
                                <td className="border-r border-black px-4 h-8">
                                    <input
                                        type="text"
                                        value={row.harga}
                                        onChange={(e) => handleChange(index, "harga", e.target.value)}
                                        className="w-full px-2 h-full rounded text-center"
                                    />
                                </td>
                                <td className="px-4 h-8">
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
                        <tr className="h-3">
                            <td
                                colSpan="5"
                                className="border border-black px-4 py-2 h-9 text-center font-semibold pb-3"> Total : Rp. <span>{calculateGrandTotal()}</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <button
                    onClick={addRow}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hide-on-pdf"> Tambah Baris
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
        <div className="pt-0 pb-1">
            <h2 className="font-bold text-md mb-3">BIAYA JASA</h2>

            <table className="w-full border-collapse border border-black">
                <thead className="my-auto">
                    <tr className="h-6">
                        <th className="border border-black px-2 w-[30px] pb-3 text-center">No</th>
                        <th className="border border-black px-4 w-[400px] text-center pb-3">Jasa</th>
                        <th className="border border-black px-4 w-[200px] text-center pb-3">Biaya</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="border-r border-black px-2 h-8">
                                <input
                                    type="text"
                                    value={row.no}
                                    onChange={(e) => handleChange(index, "no", e.target.value)}
                                    className="w-full h-full rounded text-center"
                                    disabled
                                />
                            </td>
                            <td className="border-r border-black px-2 h-8 w-[250px] border-b-0">
                                <input
                                    type="text"
                                    value={row.jasa}
                                    onChange={(e) => handleChange(index, "jasa", e.target.value)}
                                    className="w-full px-2 h-full rounded"
                                />
                            </td>
                            <td className="border-r border-black px-4 h-8 w-[100px]">
                                <input
                                    type="text"
                                    value={row.harga}
                                    onChange={(e) => handleChange(index, "harga", e.target.value)}
                                    className="w-full px-2 h-full rounded text-center"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className="h-3">
                        <td
                        colSpan="5"
                        className="border border-black px-4 py-2 h-9 text-center font-semibold pb-3"> Total : Rp. <span>{calculateGrandTotal()}</span>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <button
                onClick={addRow}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hide-on-pdf">Tambah Baris
            </button>
        </div>
    );
}

function BarangJasa() {
    const [barangData, setBarangData] = useState([]);
    const [jasaData, setJasaData] = useState([]);
    const [data, setData] = useState([
        { no: "1", keterangan: "Biaya Spare Part", biaya: 0 },
        { no: "2", keterangan: "Biaya Jasa", biaya: 0 },
    ]);

    const calculateGrandTotalBarang = () => {
        return barangData.reduce((acc, row) => acc + (parseInt(row.total) || 0), 0);
    };

    const calculateGrandTotalJasa = () => {
        return jasaData.reduce((acc, row) => acc + (parseInt(row.total) || 0), 0);
    };

    useEffect(() => {
        const updatedData = [...data];
        updatedData[0].biaya = calculateGrandTotalBarang();
        updatedData[1].biaya = calculateGrandTotalJasa();
        setData(updatedData);
    }, [barangData, jasaData]);

    const calculateTotalBiaya = () => {
        return data.reduce((acc, row) => acc + row.biaya, 0);
    };

    return (
        <div className="pb-1">
            <div className="mt-0">
                <NotaBarang setBarangData={setBarangData} />
                <NotaJasa setJasaData={setJasaData} />
            </div>

            <h2 className="font-bold text-md mb-3">JUMLAH TOTAL BIAYA</h2>
            <table className="w-full border-collapse border border-black">
                <thead className="my-auto">
                    <tr className="h-6">
                        <th className="border border-black px-2 w-[30px] pb-3">No</th>
                        <th className="border border-black px-4 w-[400px] text-center pb-3">Keterangan</th>
                        <th className="border border-black px-4 w-[200px] text-center pb-3">Biaya</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="border-r border-black px-2 h-8 text-center">{row.no}</td>
                            <td className="border-r border-black px-2 h-8 w-[250px] border-b-0">{row.keterangan}</td>
                            <td className="border-r border-black px-4 h-8 w-[100px] text-center">{row.biaya}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="h-3">
                        <td
                            colSpan="3"
                            className="border border-black px-4 py-2 h-9 text-center font-semibold pb-3"> Jumlah Total : Rp. {calculateTotalBiaya()}
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div className="mt-3 border border-black px-3 py-1">
                <h3 className="font-semibold mb-2">Catatan</h3>
                <textarea
                    className="w-full h-8 pr-2 pb-1"
                    placeholder="Masukkan catatan dengan batas karakter 70..."
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
        <div className="p-4 pt-0 mx-3">
            <BarangJasa />

            <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="text-center">
                    <h3 className="font-semibold">Customer</h3>
                    <div className="mt-10 w-48 mx-auto"></div>
                    <input
                        type="text"
                        placeholder="Nama Customer"
                        className="mt-2 w-48 h-8 mx-auto text-center" />
                </div>
                
                <div className="text-center">
                    <h3 className="font-semibold">Admin</h3>
                    <div className="mt-10 w-48 mx-auto"></div>
                    <input
                        type="text"
                        placeholder="Nama Admin"
                        className="mt-2 w-48 h-8 mx-auto text-center" />
                </div>
            </div>

        </div>
    );
}