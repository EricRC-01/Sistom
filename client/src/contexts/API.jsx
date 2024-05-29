import { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext({});
export const APIProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedPacientes = loadFromLocalStorage("data");
    if (storedPacientes) {
      setPacientes(storedPacientes);
    }
  }, []);

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return null;
  };

  const adicionarPaciente = (paciente) => {
    console.log(paciente);
    const updatedArray = [...pacientes, paciente];
    setPacientes(updatedArray);
    saveToLocalStorage("data", updatedArray);
  };

  const adicionarEstoma = (index, estoma) => {
    const updatedArray = [...pacientes];
    updatedArray[index].estomas.push(estoma);
    setPacientes(updatedArray);
    saveToLocalStorage("data", updatedArray);
  };

  const adicionarCirurgia = (index, cirurgia) => {
    const updatedArray = [...pacientes];
    updatedArray[index].cirurgias.push(cirurgia);
    setPacientes(updatedArray);
    saveToLocalStorage("data", updatedArray);
  };

  const adicionarRecebedor = (index, recebedor) => {
    const updatedArray = [...pacientes];
    updatedArray[index].recebedores.push(recebedor);
    setPacientes(updatedArray);
    saveToLocalStorage("data", updatedArray);
  };

  const listarPacientes = () => {
    return pacientes;
  };

  const listarEstomas = (cns) => {
    return pacientes.find((p) => p.cns === cns).estomas;
  };

  return (
    <APIContext.Provider
      value={{
        pacientes,
        adicionarPaciente,
        adicionarEstoma,
        adicionarCirurgia,
        adicionarRecebedor,
        listarEstomas,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext);
