import DataCustomer from "./components/SectCustomer/DataCustomer";
import Logo from "./components/SectProfile/Logo";
import Title from "./components/SectProfile/Title";
import Button from "./components/Text/Button";
import React from "react";
import "jspdf-autotable";
import html2pdf from "html2pdf.js"; 
import NotaBarang from "./components/SectNota/NotaBarang";

export default function App() {
  const downloadPDF = () => {
    const element = document.getElementById("pageToExport");

    // Sembunyikan tombol selama proses PDF
    const buttons = document.querySelectorAll(".hide-on-pdf");
    buttons.forEach((btn) => (btn.style.display = "none"));

    const opt = {
      margin: [10, 10, 10, 10],
      filename: "data_customer.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2, // Atur kualitas render
        useCORS: true, // Hindari masalah CORS untuk elemen gambar
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
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
      <NotaBarang />
      <Button downloadPDF={downloadPDF} />
    </div>
  );
}