"use client";
import React, { useState } from "react";
import ModalForm from "./ModalForm";

export default function ClientWrapper({ children }) {
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
      {React.cloneElement(children, { openModal })}
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        freightOption={selectedFreight}
      />
    </>
  );
}
