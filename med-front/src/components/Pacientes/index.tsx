import { useEffect, useState } from "react"
import { usePacientes } from "../../hooks/usePacientes"
import { api } from "../../services/api"
import { CreatePacienteModal } from "../CreatePacientModal"
import { Paciente } from "../Paciente"
import { Container } from "./styles"

export interface IPaciente{
    nome: string
    id: number
}

export  function Pacientes(){
  const {pacientes} = usePacientes();
  const [isOpen, setIsCreatePacienteModalOpen] = useState(false);
  function handleOpenCreatePacienteModal(){
    setIsCreatePacienteModalOpen(true);
  }
  function handleCloseCreatePacienteModal(){
      setIsCreatePacienteModalOpen(false);
  }
    return (
      <>
        <Container>
          <button onClick={handleOpenCreatePacienteModal}>Cadastrar Paciente</button>
            {
              pacientes.map((paciente)=>{
                return(
                <Paciente
                  key={paciente.id}
                  nome={paciente.nome}
                  id={paciente.id}
                  sintomas={paciente.sintomas}
                  email={paciente.email}
                  telefone={paciente.telefone}
                />
                );
              })
            }
        </Container>
        <CreatePacienteModal isOpen={isOpen} onRequestClose={handleCloseCreatePacienteModal}/>
        </>
    )
}