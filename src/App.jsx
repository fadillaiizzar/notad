import DataCustomer from "./components/SectCustomer/DataCustomer";
import Logo from "./components/SectProfile/Logo";
import Title from "./components/SectProfile/Title";
import Button from "./components/Text/Button";
import React from "react";
import "jspdf-autotable";
import html2pdf from "html2pdf.js"; 
import NotaBarang from "./components/SectNota/NotaBarang";
import NotaJasa from "./components/SectNota/NotaJasa";
import Total from "./components/SectTotal/Total";

export default function App() {
  const downloadPDF = () => {
    const element = document.getElementById("pageToExport");
  
    // Sembunyikan tombol selama proses PDF
    const buttons = document.querySelectorAll(".hide-on-pdf");
    buttons.forEach((btn) => (btn.style.display = "none"));
  
    const opt = {
      margin: [0, 10, 10, 10],  // Sesuaikan margin untuk mencocokkan halaman
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
        // Menambahkan halaman otomatis saat konten terlalu panjang
        autoPaging: true, 
        pageBreak: "auto", // Membiarkan jsPDF memutuskan di mana untuk menambahkan halaman baru
      },
    };
  
    // Proses ekspor ke PDF
    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .finally(() => {
        // Tampilkan tombol kembali setelah proses PDF selesai
        buttons.forEach((btn) => (btn.style.display = ""));
      });
  };
  
  return(
    <div id="pageToExport" className="mb-10">
      {/* <Logo /> */}
      <Title />
      <DataCustomer />
      <Total />
      <Button downloadPDF={downloadPDF} />
    </div>
  );
}