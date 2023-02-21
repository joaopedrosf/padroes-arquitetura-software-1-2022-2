import { FormEvent, useEffect, useState } from "react";
import { useMedicines } from "../../hooks/useMedicines";
import { Container } from "./styles";
import Modal from "react-modal";
import { api } from "../../services/api";
import { usePacientes } from "../../hooks/usePacientes";

interface PacienteModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    nome : string;
    sintomas: string;
    email: string;
    telefone : string;
    id : number;
}

export  function PacientInfoModal({isOpen,onRequestClose,nome,sintomas,email,telefone,id }:PacienteModalProps){
    return(
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
                        <button type="button" onClick={onRequestClose} className="react-modal-close">Fechar</button>
                        <Container>
                        <h2> Informações </h2>
                        <p>
                            {nome}
                        </p>
                        <p>
                            {sintomas}
                        </p>
                        <p>
                            {email}
                        </p>
                        <p>
                            {telefone}
                        </p>
        </Container>
        </Modal>
    );


}