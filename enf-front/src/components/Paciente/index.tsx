import { Container } from "./styles";
import {IconContext} from 'react-icons';
import {CiPill} from "react-icons/ci";
import {MdLoop} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai"
import { UpdatePacientModal } from "../UpdatePacientModal";
import { useState } from "react";
import { MedicamentoModal } from "../MedicamentoModal";
import { usePacientes } from "../../hooks/usePacientes";
import { useMedicines } from "../../hooks/useMedicines";
interface Props{
    nome: string,
	efeito: string,
    id: number,
    descricao:string
}

export function Paciente(
    {
        nome,
        efeito,
        id,
        descricao
    }: Props
){
    const [isOpen, setIsUpdatePacientModalOpen] = useState(false);
    const [isOpenMedicamento, setMedicamentoModalOpen] = useState(false);
    const {deleteMedicine} = useMedicines();
    function handleOpenUpdatePacientModal(){
        setIsUpdatePacientModalOpen(true);
    }
    function handleCloseUpdatePacientModal(){
        setIsUpdatePacientModalOpen(false);
    }
    function handleOpenMedicamentoModal(){
        setMedicamentoModalOpen(true);
    }
    function handleCloseMedicamentoModal(){
        setMedicamentoModalOpen(false);
    }
    function handleDeletePacient(){
        deleteMedicine(id);
    }
    return (
        <>
        <Container>
            <div className="left">{nome}</div>

            <IconContext.Provider value={{size:"1.5em"}}>
            <div className="right">
                <button onClick={handleOpenUpdatePacientModal}>
                <MdLoop/>
                    Atualizar
                </button>
                <button onClick={handleDeletePacient}>
                <AiFillDelete/>
                    Excluir
                </button>
            </div>
            </IconContext.Provider>
        </Container>
        <UpdatePacientModal onRequestClose={handleCloseUpdatePacientModal} isOpen={isOpen} nome={nome} id={id} efeito={efeito} descricao={descricao}/>
        <MedicamentoModal onRequestClose={handleCloseMedicamentoModal} isOpen={isOpenMedicamento} paciente_id={id}/>
        </>
    )
}