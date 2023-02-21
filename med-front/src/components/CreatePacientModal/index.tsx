import { FormEvent, useEffect, useState } from "react";
import { useMedicines } from "../../hooks/useMedicines";
import { Container } from "./styles";
import Modal from "react-modal";
import { api } from "../../services/api";
import { usePacientes } from "../../hooks/usePacientes";

interface PacienteModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export  function CreatePacienteModal({isOpen,onRequestClose}:PacienteModalProps){
    const[nomeState,setNomeState] = useState('');
    const[sintomasState,setSintomasState] = useState('');
    const[emailState,setEmailState] = useState('');
    const[telefoneState,setTelefoneState] = useState('');
    const {createPaciente} = usePacientes();

    function handlePaciente(event: FormEvent){
        event.preventDefault();
        createPaciente({
            sintomas: sintomasState,
            email: emailState,
            telefone : telefoneState,
            nome: nomeState
        });
        onRequestClose();
    }
    return(
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
                        <button type="button" onClick={onRequestClose} className="react-modal-close">Fechar</button>
                        <Container onSubmit={handlePaciente}>
                        <h2> Cadastrar Medicamento </h2>
                        <input  placeholder="Nome" value={nomeState} onChange={event => setNomeState(event.target.value)} />
                        <input  placeholder="Sintomas" value={sintomasState} onChange={event => setSintomasState(event.target.value)} />
                        <input  placeholder="Email" value={emailState} onChange={event => setEmailState(event.target.value)} />
                        <input  placeholder="Telefone" value={telefoneState} onChange={event => setTelefoneState(event.target.value)} />
                        <button type="submit">
                                   Criar
                        </button>
        </Container>
        </Modal>
    );


}