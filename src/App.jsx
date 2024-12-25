import React from "react";
import "jspdf-autotable";
import html2pdf from "html2pdf.js"; 
import DataCustomer from "./components/SectCustomer/DataCustomer";
import Logo from "./components/SectProfile/Logo";
import Title from "./components/SectProfile/Title";
import Button from "./components/Text/Button";
import Total from "./components/SectTotal/Total";

export default function App() {
  const downloadPDF = () => {
    const element = document.getElementById("pageToExport");

    const buttons = document.querySelectorAll(".hide-on-pdf");
    buttons.forEach((btn) => (btn.style.display = "none"));

    const opt = {
      margin: [10, 10, 10, 10],  // Sesuaikan margin untuk mencocokkan halaman
      filename: "data_customer.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2, // Atur kualitas render
        useCORS: true, // Hindari masalah CORS untuk elemen gambar
      },
      jsPDF: {
        unit: "mm", 
        format: "a4", 
        orientation: "portrait",
        autoPaging: true, // Otomatis tambahkan halaman baru saat konten terlalu panjang
        pageBreak: "auto", // Otomatis tentukan dimana harus memutus halaman
      },
    };

    const contentHeight = element.offsetHeight;

    if (contentHeight > 1000) {
      opt.jsPDF.autoPaging = false;
      opt.jsPDF.pageBreak = "always"; 
    }

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .finally(() => {
        buttons.forEach((btn) => (btn.style.display = ""));
      });
  };

  return(
    <div id="pageToExport" className="mb-10 text-sm relative">
      <Logo />
      <Title />
      <DataCustomer />
      <Total />
      <Button downloadPDF={downloadPDF} />

      <div className="absolute inset-0 flex items-center justify-center text-[200px] font-bold text-gray-500 opacity-15 pointer-events-none top-1/2 left-0 transform -translate-y-1/2 -rotate-[15deg]">
        ASLI
      </div>       
    </div>
  );
}