import Paragraf from "../Text/Paragraf";

export default function Title() {
    return(
        <div className="px-7 pt-10">
            <Paragraf 
            text="DILLO - BANTUL"
            bold="font-bold"
            />

            <Paragraf 
            text="Telp. 0123456789"
            bold="font-semibold"
            />
        </div>
    );
}