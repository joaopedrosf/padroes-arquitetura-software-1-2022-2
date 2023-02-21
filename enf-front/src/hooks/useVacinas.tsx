import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
interface Vacina {
    id: string,
    nome: string,
	periodicidade: string,
}
interface VacinasProviderProps {
    children: ReactNode;
}

type VacinaInput = Omit<Vacina,"id" | "created_at" | "updated_at">
interface VacinasContextData {
    vacinas: Vacina[],
    createVacina: (vacina: VacinaInput) =>Promise<void>;
}

const VacinasContext = createContext<VacinasContextData>({} as VacinasContextData);
export function VacinasProvider({ children }: VacinasProviderProps) {
    const [vacinas, setVacinas] = useState<Vacina[]>([]);
    useEffect(() => {
        api.get('vacinas').then((response) => 
            {
                setVacinas(response.data)
            })
    }, []);
    async function createVacina(vacinaInput: VacinaInput) {

     const response =  await  api.post('vacinas', {
         ...vacinaInput
     });
    }
    return (
        <VacinasContext.Provider value={{vacinas,createVacina }}>
            {children}
        </VacinasContext.Provider>
    )
}

export function useVacinas(){
    const context = useContext(VacinasContext);
    return context;
}