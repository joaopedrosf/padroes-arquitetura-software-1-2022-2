import { FormEvent, useEffect, useState } from "react";
import { useMedicines } from "../../hooks/useMedicines";
import { Container } from "./styles";
import Modal from "react-modal";
import { api } from "../../services/api";

interface MedicamentoModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    paciente_id : number;
}

export  function MedicamentoModal({isOpen,onRequestClose,paciente_id}:MedicamentoModalProps){
    const  {medicines,assignMedicine} =useMedicines();
    const  [medicineId,setMedicineId]= useState(0);
    const [pacienteId,setPacienteId]= useState(paciente_id);
    useEffect(()=>{
        console.log(medicineId);
    },[medicineId]);
    function handleMedicamento(event: FormEvent){
        event.preventDefault();
        assignMedicine({
            medicineId:medicineId,
            pacienteId :pacienteId
        }
    );
        onRequestClose();
    }
    return(
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
                        <button type="button" onClick={onRequestClose} className="react-modal-close">Fechar</button>
                        <Container onSubmit={handleMedicamento}>
                        <select value={medicineId} onChange={event => setMedicineId(Number(event.target.value))}>
                                <option value="" selected  hidden>Escolha o medicamento</option>
                                {medicines.map((medicine)=>{
                                    return(
                                        <option key={medicine.id} value={medicine.id}>
                                            {medicine.nome}
                                        </option>
                                    )
                                })}
                        </select>
                        <button type="submit">
                                   Receitar
                        </button>
        </Container>
        </Modal>
    );


}