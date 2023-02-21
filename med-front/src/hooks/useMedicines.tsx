import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
interface Medicine {
    nome: string,
	efeito: string,
    id: number,
    descricao:string
}
interface MedicinesProviderProps {
    children: ReactNode;
}

interface Params {
    medicineId : number;
    pacienteId: number;
}
type MedicineInput = Omit<Medicine, 'id'>;
interface MedicinesContextData {
    medicines: Medicine[],
    createMedicine: (medicine: MedicineInput) =>Promise<void>;
    assignMedicine:({medicineId, pacienteId}: Params)=> Promise<void>
}

const MedicinesContext = createContext<MedicinesContextData>({} as MedicinesContextData);

export function MedicinesProvider({ children }: MedicinesProviderProps) {
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    useEffect(() => {
        api.get('/medicines').then((response) => 
            {
                setMedicines(response.data)
            })
    }, []);
    async function createMedicine(medicineInput: MedicineInput) {

     const response =  await  api.post('medicines', {
         ...medicineInput
     });
     const {medicine} = response.data;
        setMedicines([
            ...medicines,
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
        <MedicinesContext.Provider value={{ medicines, createMedicine,assignMedicine}}>
            {children}
        </MedicinesContext.Provider>
    )
}

export function useMedicines(){
    const context = useContext(MedicinesContext);
    return context;
}