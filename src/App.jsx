import DataCustomer from "./components/SectCustomer/DataCustomer";
import Logo from "./components/SectProfile/Logo";
import Title from "./components/SectProfile/Title";
import Button from "./components/Text/Button";
import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import html2pdf from "html2pdf.js"; 

export default function App() {
  const downloadPDF = () => {
    const element = document.getElementById("pageToExport");

    // Menggunakan html2pdf.js untuk menangkap seluruh halaman
    const opt = {
      margin: [10, 10, 10, 10], // Margin ditambahkan agar ada ruang di PDF
      filename: 'data_customer.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 4,  // Meningkatkan skala untuk meningkatkan kualitas dan menghindari pemotongan
        logging: true, // Menampilkan log untuk debugging
        useCORS: true, // Memastikan gambar dan elemen lain dirender dengan benar
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Proses ekspor ke PDF
    html2pdf().from(element).set(opt).save();
  };
    
  return(
    <div id="pageToExport">
      <Logo />
      <Title />
      <DataCustomer />
      <Button downloadPDF={downloadPDF} />
    </div>
  );
}