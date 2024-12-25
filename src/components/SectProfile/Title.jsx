import Paragraf from "../Text/Paragraf";

export default function Title() {
    return(
        <div className="px-7">
            <Paragraf 
            text="Jl Rajawali Priyan Trirenggo Bantul 55714"
            bold="font-bold"
            textsize="text-md"
            />

            <Paragraf 
            text="Telp. 081904019631"
            bold="font-semibold"
            />
        </div>
    );
}