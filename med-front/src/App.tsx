import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {Router} from "./routes";
import { GlobalStyle } from './styles/global';
import { PacientesProvider } from './hooks/usePacientes';
import { MedicinesProvider } from './hooks/useMedicines';

function App() {
  return (
    <div className="App">
      <PacientesProvider>
        <MedicinesProvider>
        <RouterProvider router={Router}></RouterProvider>
        <GlobalStyle/>
        </MedicinesProvider>
      </PacientesProvider>
    </div>
  );
}

export default App;
