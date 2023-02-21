import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
interface User {
    id: string,
    nome: string,
	data_nascimento: Date,
	sexo: string,
	logradouro: string,
	numero: string,
	cidade:string,
	uf: string,
}
interface UsersProviderProps {
    children: ReactNode;
}

type UserInput = Omit<User,"id" | "created_at">
interface UsersContextData {
    users: User[],
    createUser: (user: UserInput) =>Promise<void>;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);
export function UsersProvider({ children }: UsersProviderProps) {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        api.get('users').then((response) => 
            {setUsers(response.data.users)
                
            })
    }, []);
    async function createUser(userInput: UserInput) {

     const response =  await  api.post('users', {
         ...userInput
     });
     const {user} = response.data;
        setUsers([
            ...users,
            user
        ])
    }
    return (
        <UsersContext.Provider value={{ users,createUser }}>
            {children}
        </UsersContext.Provider>
    )
}

export function useUsers(){
    const context = useContext(UsersContext);
    return context;
}