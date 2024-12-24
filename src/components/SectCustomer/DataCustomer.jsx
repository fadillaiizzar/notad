import TrTable from "./TrTable";

export default function DataCustomer() {
    // Ambil tanggal dan waktu hari ini
    const today = new Date();
    const date = today.toLocaleDateString('id-ID'); // Format tanggal sesuai dengan Indonesia
    const time = today.toLocaleTimeString('id-ID'); // Format waktu sesuai dengan Indonesia

    const fullDateTime = `${date} ${time}`; // Gabungkan tanggal dan waktu

    return (
        <>
            <style>
                {`
                @media print {
                    .pdf {
                        font-size: 0.875rem; /* Set ukuran sama dengan text-sm Tailwind */
                    }
                }
                `}
            </style>

            <div className="px-7 mt-0 w-full pdf">
                <div className="">
                    <table className="w-full grid grid-cols-2 text-sm"> 
                        <TrTable 
                            text="KM Kendaraan"
                            defaultText=""
                        />
                        <TrTable 
                            text="Customer"
                            defaultText=""
                        />
                        <TrTable 
                            text="No. Polisi"
                            defaultText=""
                        />
                        <TrTable 
                            text="Tanggal"
                            defaultText={fullDateTime}  
                        />
                    </table>
                </div>
            </div>
        </>
    );
}
