import { Container } from "./styles";
import {IconContext} from 'react-icons';
import {CiPill} from "react-icons/ci";
import {MdLoop} from "react-icons/md";
import {AiFillDelete} from "react-icons/ai"
import { UpdatePacientModal } from "../UpdatePacientModal";
import { useState } from "react";
import { MedicamentoModal } from "../MedicamentoModal";
import { usePacientes } from "../../hooks/usePacientes";
import { PacientInfoModal } from "../PacientInfoModal";
interface Props{
    nome: string,
    sintomas:string,
    email:string,
    telefone: string
    id: number
}

export function Paciente(
    {
        nome,
        sintomas,
        email,
        telefone,
        id
    }: Props
){
    const [isOpen, setIsUpdatePacientModalOpen] = useState(false);
    const [isOpenMedicamento, setMedicamentoModalOpen] = useState(false);
    const [isOpenInfo, setInfoModalOpen] = useState(false);
    const {deletePaciente} = usePacientes();
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
    function handleOpenInfoModal(){
        setInfoModalOpen(true);
    }
    function handleCloseInfoModal(){
        setInfoModalOpen(false);
    }
    function handleDeletePacient(){
        deletePaciente(id);
    }
    return (
        <>
        <Container>
            <div className="left" onClick={handleOpenInfoModal}>{nome}</div>

            <IconContext.Provider value={{size:"1.5em"}}>
            <div className="right">
                <button onClick={handleOpenMedicamentoModal}>
                <CiPill/>
                    Atribuir Medicamento
                </button>
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
        <UpdatePacientModal onRequestClose={handleCloseUpdatePacientModal} isOpen={isOpen} nome={nome} id={id} sintomas={sintomas} email={email} telefone={telefone}/>
        <MedicamentoModal onRequestClose={handleCloseMedicamentoModal} isOpen={isOpenMedicamento} paciente_id={id}/>
        <PacientInfoModal onRequestClose={handleCloseInfoModal} isOpen={isOpenInfo} nome={nome} id={id} sintomas={sintomas} email={email} telefone={telefone} ></PacientInfoModal>
        </>
    )
}