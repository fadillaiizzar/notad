import TrTable from "./TrTable";

export default function DataCustomer() {
    return(
        <>
            <div className="px-7 mt-6 grid grid-cols-3">
                <div>
                    <table>
                        <TrTable 
                        text="No. Faktur"
                        defaultText=""
                        />

                        <TrTable 
                        text="Pembayaran"
                        defaultText=""
                        />

                        <TrTable 
                        text="KM Kendaraan"
                        defaultText=""
                        />

                        <TrTable 
                        text="No. SPK"
                        defaultText=""
                        />
                    </table>
                </div>

                <div>
                    <table>
                        <TrTable 
                        text="Customer"
                        defaultText=""
                        />

                        <TrTable 
                        text="No. Polisi"
                        defaultText=""
                        />

                        <TrTable 
                        text="Est. Selesai"
                        defaultText=""
                        /> 
                        
                        <TrTable 
                        text="Teknisi"
                        defaultText=""
                        />
                    </table>
                </div>

                <div>
                    <table>
                        <TrTable 
                        text="Tanggal"
                        defaultText=""
                        />

                        <TrTable 
                        text="Operator"
                        defaultText=""
                        />

                        <TrTable
                        text="Selesai"
                        defaultText=""
                        />
                    </table>
                </div>
            </div>
        </>
    );
}

