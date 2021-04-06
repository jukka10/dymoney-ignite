import { useState } from "react";
import Modal from "react-modal";

import { FormModal } from "./components/FormModal";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/globalStyles";
import { TransactionProvider } from "./contexts/transactionContext";

Modal.setAppElement("#root");

export function App() {
  const [modalIsOpen, setModalIsModalOpen] = useState<boolean>(false);

  function handleModal() {
    setModalIsModalOpen(!modalIsOpen);
  }

  return (
    <TransactionProvider>
      <Header onHandleModal={handleModal} />

      <Modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
      >
        <FormModal onHandleCloseModal={handleModal} />
      </Modal>

      <Dashboard />
      <GlobalStyle />
    </TransactionProvider>
  );
}
