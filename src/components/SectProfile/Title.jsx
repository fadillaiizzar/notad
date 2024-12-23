import Paragraf from "../Text/Paragraf";

export default function Title() {
    return(
        <div className="px-7">
            <Paragraf 
            text="BERLIAN TIGA"
            bold="font-bold"
            textsize="text-xl"
            />

            <Paragraf 
            text="Telp. 0123456789"
            bold="font-semibold"
            />
        </div>
    );
}