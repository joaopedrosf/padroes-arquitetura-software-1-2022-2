import { FormEvent, useEffect, useState } from "react";
import { useMedicines } from "../../hooks/useMedicines";
import { Container } from "./styles";
import Modal from "react-modal";
import { api } from "../../services/api";
import { usePacientes } from "../../hooks/usePacientes";

interface MedicineModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export  function CreateMedicineModal({isOpen,onRequestClose}:MedicineModalProps){
    const[nomeState,setNomeState] = useState('');
    const[efeitoState,setEfeitoState] = useState('');
    const[descricaoState,setDescricaoState] = useState('');
    const[telefoneState,setTelefoneState] = useState('');
    const {createMedicine} = useMedicines();

    function handleMedicine(event: FormEvent){
        event.preventDefault();
        createMedicine({
            efeito: efeitoState,
            descricao: descricaoState,
            nome: nomeState
        });
        onRequestClose();
    }
    return(
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
                        <button type="button" onClick={onRequestClose} className="react-modal-close">Fechar</button>
                        <Container onSubmit={handleMedicine}>
                        <h2> Cadastrar Medicamento </h2>
                        <input  placeholder="Nome" value={nomeState} onChange={event => setNomeState(event.target.value)} />
                        <input  placeholder="Efeito" value={efeitoState} onChange={event => setEfeitoState(event.target.value)} />
                        <input  placeholder="descricao" value={descricaoState} onChange={event => setDescricaoState(event.target.value)} />
                        <button type="submit">
                                   Criar
                        </button>
        </Container>
        </Modal>
    );


}