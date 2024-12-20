export default function Button({downloadPDF}) {
    return(
        <button
            onClick={downloadPDF}
            className="mt-10 ml-7 p-2 bg-blue-500 text-white rounded hide-on-pdf" > Download as PDF
        </button>
    );
}