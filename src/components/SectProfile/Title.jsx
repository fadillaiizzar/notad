import Paragraf from "../Text/Paragraf";

export default function Title() {
    return(
        <div className="px-7">
            <Paragraf 
            text="BERLIANTIGA"
            bold="font-bold"
            textsize="text-xl"
            />

            <Paragraf 
            text="Telp. 081904019631"
            bold="font-semibold"
            />
        </div>
    );
}