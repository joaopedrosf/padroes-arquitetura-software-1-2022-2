import {
    createBrowserRouter,
  } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Pacientes } from "../components/Pacientes";
import {IPaciente} from "../components/Pacientes";

const paciente : IPaciente[] = [
  {
    nome: "Teste",
    id: 1
  }
];



export const Router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
      // errorElement:<h1>Error</h1>,
      children: [
        {
            path: "/",
            element: <Pacientes/>
        },
        // {
        //     path: "/agendas",
        //     element: <DashboardAgenda/>,
        // },
        // {
        //     path: "/alergias",
        //     element: <DashboardAlergie/>,
        // },
        // {
        //   path: "/vacinas",
        //   element: <DashboardVacina/>,
        // },
      ]
    },
  ]);