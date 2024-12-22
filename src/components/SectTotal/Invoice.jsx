import NotaBarang from "../SectNota/NotaBarang";
import NotaJasa from "../SectNota/NotaJasa";
import Total from "./Total";

export default function Invoice() {
    const [barangData, setBarangData] = useState([]);
    const [jasaData, setJasaData] = useState([]);

    return (
        <div>
            <NotaBarang setData={setBarangData} />
            <NotaJasa setData={setJasaData} />
            <Total barangData={barangData} jasaData={jasaData} />
        </div>
    );
}
