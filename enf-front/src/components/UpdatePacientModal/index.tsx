
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useMedicines } from "../../hooks/useMedicines";
import { usePacientes } from "../../hooks/usePacientes";
import { Container } from "./styles";

interface UpdatePacientModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    nome: string;
    efeito:string;
    descricao:string;
    id: number;
}

export function UpdatePacientModal({ isOpen, onRequestClose,nome,efeito,descricao,id }: UpdatePacientModalProps){

    const[nomeState,setNomeState] = useState(nome);
    const[efeitoState,setEfeitoState] = useState(efeito);
    const[descricaoState,setDescricaoState] = useState(descricao);
    const {updateMedicine} = useMedicines();

    function handleUpdatePaciente(event: FormEvent){
        event.preventDefault();
        updateMedicine({
            id: id,
            efeito: efeitoState,
            descricao: descricaoState,
            nome: nomeState
        });
        onRequestClose();
    }
    return (
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
            <button type="button" onClick={onRequestClose} className="react-modal-close">Fechar</button>
            <Container onSubmit={handleUpdatePaciente}>
                <h2> Alterar Dados do Medicamento </h2>
                   <input  placeholder="Nome" value={nomeState} onChange={event => setNomeState(event.target.value)} />
                   <input  placeholder="Efeito" value={efeitoState} onChange={event => setEfeitoState(event.target.value)} />
                   <input  placeholder="Descricao" value={descricaoState} onChange={event => setDescricaoState(event.target.value)} />
                <button type="submit">
                    Alterar
                </button>
            </Container>
        </Modal>
    );
}