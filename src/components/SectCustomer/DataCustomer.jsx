import TrTable from "./TrTable";

export default function DataCustomer() {
    return(
        <>
            <div className="px-7 mt-6 w-full">
                <div className="mb-3">
                    <table className="">
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

