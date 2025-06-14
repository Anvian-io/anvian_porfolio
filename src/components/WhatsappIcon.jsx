// components/WhatsappIcon.jsx
"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappIcon() {
  const [contactNumber, setContactNumber] = useState([]);

  // useEffect(() => {
  //   try {
  //     const contractDetails = localStorage.getItem("Contract_Details");
  //     if (contractDetails) {
  //       const parsedDetails = JSON.parse(contractDetails);
  //       const parsedDetails_filter = parsedDetails.filter(
  //         (item) => item.section === "enquiry"
  //       );
  //       if (parsedDetails_filter) {
  //         setContactNumber(parsedDetails_filter);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error loading contact details:", error);
  //   }
  // }, []);

  const whatsappLink =`https://wa.me/+919321607843`;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
