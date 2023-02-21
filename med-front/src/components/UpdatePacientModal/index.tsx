
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { usePacientes } from "../../hooks/usePacientes";
import { Container } from "./styles";

interface UpdatePacientModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    nome: string;
    sintomas:string;
    email:string;
    telefone: string;
    id: number;
}

export function UpdatePacientModal({ isOpen, onRequestClose,nome,sintomas,email,telefone,id }: UpdatePacientModalProps){

    const[nomeState,setNomeState] = useState(nome);
    const[sintomasState,setSintomasState] = useState(sintomas);
    const[emailState,setEmailState] = useState(email);
    const[telefoneState,setTelefoneState] = useState(telefone);
    const {updatePaciente} = usePacientes();

    function handleUpdatePaciente(event: FormEvent){
        event.preventDefault();
        updatePaciente({
            id: id,
            sintomas: sintomasState,
            email: emailState,
            telefone : telefoneState,
            nome: nomeState
        });
        onRequestClose();
    }
    return (
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
            <button type="button" onClick={onRequestClose} className="react-modal-close">Fechar</button>
            <Container onSubmit={handleUpdatePaciente}>
                <h2> Alterar Dados do Paciente </h2>
                   <input  placeholder="" value={nomeState} onChange={event => setNomeState(event.target.value)} />
                   <input  placeholder="" value={sintomasState} onChange={event => setSintomasState(event.target.value)} />
                   <input  placeholder="" value={emailState} onChange={event => setEmailState(event.target.value)} />
                   <input  placeholder="" value={telefoneState} onChange={event => setTelefoneState(event.target.value)} />
                <button type="submit">
                    Alterar
                </button>
            </Container>
        </Modal>
    );
}