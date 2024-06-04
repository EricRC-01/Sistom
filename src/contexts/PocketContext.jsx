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

  const getFullDataById = useCallback(({ table, id }) => {
    return useQuery({
      queryKey: [table, id],
      queryFn: async () => {
        return await pb
          .collection(table)
          .getFullList({ filter: `paciente.id="${id}"` });
      },
    });
  });

  const getFullData = useCallback(({ table }) => {
    return useQuery({
      queryKey: [table],
      queryFn: async () => {
        return await pb.collection(table).getFullList();
      },
    });
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

  const registerField = useCallback(({ table }) => {
    return useMutation({
      mutationFn: async ({ data }) => {
        console.log(data);
        return await pb.collection(table).create(data);
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
        getDataById,
        getFullDataById,
        getFullData,
        registerField,
        deleteRecord,
      }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
