import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
interface Paciente {
		nome: string,
        sintomas:string,
        email:string,
        telefone: string
        id: number
}
interface PacientesProviderProps {
    children: ReactNode;
}

type PacienteInput = Omit<Paciente,'id'>;
interface PacientesContextData {
    pacientes: Paciente[],
    createPaciente: (paciente: PacienteInput) =>Promise<void>;
    updatePaciente: (paciente: Paciente) => Promise<void>
    deletePaciente: (id:number) => Promise<void>
}

const PacientesContext = createContext<PacientesContextData>({} as PacientesContextData);

export function PacientesProvider({ children }: PacientesProviderProps) {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    useEffect(() => {
        api.get('/pacientes').then((response) => 
            {
                setPacientes(response.data);
            })
    }, []);
    async function createPaciente(pacienteInput: PacienteInput) {

     const response =  await  api.post('/createPacient', {
         ...pacienteInput
     });
     
    }
    async function updatePaciente(pacienteUpdate: Paciente) {
        const response = await api.post('/updatePacient',{
            ...pacienteUpdate
        })
        
    }
    async function deletePaciente(id : number) {
        const response = await api.post('/deletePacient',{
           id : id
        });
    }
    return (
        <PacientesContext.Provider value={{ pacientes, createPaciente, updatePaciente,deletePaciente }}>
            {children}
        </PacientesContext.Provider>
    )
}

export function usePacientes(){
    const context = useContext(PacientesContext);
    return context;
}