import {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PocketBase from "pocketbase";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const BASE_URL = "https://sistom.pockethost.io/";

const PocketContext = createContext({});

export const useData = ({ tabela, filtro = "" }) => {
  return useQuery({
    queryKey: [tabela, filtro, "ibge"],
    queryFn: async () => {
      if (filtro === "" && tabela !== "territorio") return [];
      let url = "";
      switch (tabela) {
        case "territorio":
          url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
          break;
        case "mesorregiao":
          url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${filtro}/mesorregioes`;
          break;
        case "microrregiao":
          url = `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/${filtro}/microrregioes`;
          break;
        case "municipio":
          url = `https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/${filtro}/municipios`;
          break;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
};

export const PocketProvider = ({ children }) => {
  const pb = useMemo(() => new PocketBase(BASE_URL), []);

  const queryClient = useQueryClient();

  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((model) => setUser(model));
  }, []);

  const login = useCallback(async ({ email, password }) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, []);

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  const getDataById = useCallback(({ table, id }) => {
    return useQuery({
      queryKey: [table, id],
      queryFn: async () => {
        return await pb.collection(table).getOne(id, {});
      },
    });
  });

  const getFullList = useCallback(({ table, filter = "", sort = "" }) => {
    return useQuery({
      queryKey: [table, filter, sort],
      queryFn: async () => {
        const etc = (await (await fetch("http://localhost:8080/patient/list")).json()).map(e => ({id: e.cpf, tel: '0000000000', ...e}));

        // const etc = await pb
        // .collection(table)
        // .getFullList({ filter: `${filter}` }, { sort: `${sort}` });
        console.log(await (await fetch("http://localhost:8080/patient/list")).json())
        console.log(etc);
        return etc
        // return await (await fetch("localhost:8080/patient/list")).json() 
      },
    });
    // return await (await fetch("localhost:8080/patient/list")).json() 
  });

  const deleteRecord = useCallback(({ table }) => {
    return useMutation({
      mutationFn: async ({ id }) => {
        return await pb.collection(table).delete(id);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [table] });
      },
      onError: (error) => {
        alert("Erro ao deletar");
        console.log(error.response.data);
        console.log(error.response.status);
      },
    });
  });

  const mutateRecord = useCallback(({ table, mode }) => {
    return useMutation({
      mutationFn: async ({ data = "", id = "" }) => {
        switch (mode) {
          case "register":
            // return await pb.collection(table).create(data);
            console.log(data);
            data.cpf = '12345678900';
            data.rg = '123456789';
            data.age = 12;
            const response = await fetch(`http://localhost:8080/patient/create`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data),
            });
            return response;
            break;
          case "edit":
            return await pb.collection(table).update(id, data);
            break;
          case "delete":
            return await pb.collection(table).delete(id);
            break;
        }
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [table] });
      },
      onError: (error) => {
        alert("Erro ao criar");
        console.log(error.response.data);
        console.log(error.response.status);
      },
    });
  });

  return (
    <PocketContext.Provider
      value={{
        login,
        logout,
        user,
        pb,
        mutateRecord,
        getDataById,
        getFullList,
        deleteRecord,
      }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
