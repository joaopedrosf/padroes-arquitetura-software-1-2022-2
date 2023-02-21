import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
interface PacientMedicine {
    nome: string,
	efeito: string,
    id: number,
    descricao:string
}
interface PacientMedicineProviderProps {
    children: ReactNode;
}

interface Params {
    medicineId : number;
    pacienteId: number;
}
type MedicineInput = Omit<PacientMedicine, 'id'>;
interface PacientMedicineContextData {
    pacientMedicine: PacientMedicine[],
    createMedicine: (medicine: MedicineInput) =>Promise<void>;
    assignMedicine:({medicineId, pacienteId}: Params)=> Promise<void>
}

const PacientMedicineContext = createContext<PacientMedicineContextData>({} as PacientMedicineContextData);

export function PacientMedicineProvider({ children }: PacientMedicineProviderProps) {
    const [pacientMedicine, setPacientMedicine] = useState<PacientMedicine[]>([]);
    useEffect(() => {
        api.get('/pacientMedicine').then((response) => 
            {
                setPacientMedicine(response.data)
            })
    }, []);
    async function createMedicine(medicineInput: MedicineInput) {

     const response =  await  api.post('pacientMedicine', {
         ...medicineInput
     });
     const {medicine} = response.data;
        setPacientMedicine([
            ...pacientMedicine,
            medicine
        ])
    }
    async function assignMedicine({medicineId ,pacienteId}:Params){
      await  api.post('assignMedicine',{
            medicine_id: medicineId,
            pacient_id : pacienteId
        }).then((response)=>{
            console.log(response.data);
        });
    }
    return (
        <PacientMedicineContext.Provider value={{ pacientMedicine, createMedicine,assignMedicine}}>
            {children}
        </PacientMedicineContext.Provider>
    )
}

export function usePacientMedicine(){
    const context = useContext(PacientMedicineContext);
    return context;
}