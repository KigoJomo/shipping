// page.js
"use client";
import { useState } from "react";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Procedure from "./components/Procedure";
import Contact from "./components/Contact";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFreight, setSelectedFreight] = useState("");

  const openModal = (freight) => {
    setSelectedFreight(freight);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFreight("");
  };

  return (
    <>
    <Header  openModal={openModal} />
      <main className="flex flex-col gap-8">
        <Hero />
        <Categories />
        <Procedure />
        <Contact />
      </main>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} freightOption={selectedFreight} />
    </>
  );
}
