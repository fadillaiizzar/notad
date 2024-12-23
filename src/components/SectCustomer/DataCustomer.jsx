import TrTable from "./TrTable";

export default function DataCustomer() {
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

            <div className="px-7 mt-2 w-full pdf">
                <div className="">
                    <table className="w-full grid grid-cols-2 text-sm"> {/* Tambahkan text-sm */}
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
                            defaultText=""
                        />
                    </table>
                </div>
            </div>
        </>
    );
}
