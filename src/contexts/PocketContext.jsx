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

  const getFullList = useCallback(({ table, filter = "" }) => {
    return useQuery({
      queryKey: [table, filter],
      queryFn: async () => {
        return await pb.collection(table).getFullList({ filter: `${filter}` });
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

  const mutateRecord = useCallback(({ table, mode }) => {
    return useMutation({
      mutationFn: async ({ data = "", id = "" }) => {
        switch (mode) {
          case "register":
            console.log(table, mode);
            return await pb.collection(table).create(data);
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
