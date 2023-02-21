import { useEffect, useState } from "react"
import { useMedicines } from "../../hooks/useMedicines"
import { usePacientes } from "../../hooks/usePacientes"
import { api } from "../../services/api"
import { CreateMedicineModal } from "../CreateMedicineModal"
import { Paciente } from "../Paciente"
import { Container } from "./styles"

export interface IPaciente{
    nome: string
    id: number
}

export  function Pacientes(){
  const {medicines} = useMedicines();
  const [isOpen, setIsCreateMedicineModalOpen] = useState(false);
  function handleOpenCreateMedicineModal(){
    setIsCreateMedicineModalOpen(true);
  }
  function handleCloseCreateMedicineModal(){
      setIsCreateMedicineModalOpen(false);
  }
    return (
      <>
        <Container>
          <button onClick={handleOpenCreateMedicineModal}>Cadastrar Medicamento</button>
            {
              medicines.map((medicine)=>{
                return(
                <Paciente
                  key={medicine.id}
                  nome={medicine.nome}
                  id={medicine.id}
                  efeito={medicine.efeito}
                  descricao={medicine.descricao}
                />
                );
              })
            }
        </Container>
        <CreateMedicineModal isOpen={isOpen} onRequestClose={handleCloseCreateMedicineModal}/>
        </>
    )
}