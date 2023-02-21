import { Container } from "./styles";
import Modal from "react-modal";


interface PacientMedicationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function PacientMedication({isOpen,onRequestClose,}:PacientMedicationModalProps){
    //const  {medicines,assignMedicine} =useMedicines();
    return(
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
        <button type="button" onClick={onRequestClose} className="react-modal-close">Fechar</button>
        <Container>
        <button type="submit">
                   Receitar
        </button>
        </Container>
        </Modal>
    );
}