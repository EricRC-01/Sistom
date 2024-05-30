import {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PocketBase from "pocketbase";

const BASE_URL = "https://sistom.pockethost.io/";

const PocketContext = createContext({});

export const PocketProvider = ({ children }) => {
  const pb = useMemo(() => new PocketBase(BASE_URL), []);

  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((model) => setUser(model));
  }, []);

  const register = useCallback(async (email, password) => {
    return await pb
      .collection("users")
      .create({ email, password, passwordConfirm: password });
  }, []);

  const login = useCallback(async ({ email, password }) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, []);

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  const getAllData = useCallback(async (table) => {
    return await pb.collection(table).getFullList();
  });

  const getFilterData = useCallback(async ({table, id}) => {
    return await pb.collection(table).getFullList({
      filter: `paciente.id="${id}"`,
    });
  });

  const getSinglePaciente = useCallback(async ({table, id}) => {
    return await pb.collection(table).getFullList({
      filter: `id="${id}"`,
    });
  });

  const getById = useCallback(async ({table, id}) => {
    return await pb.collection(table).getOne(id, {});
  });

  const registerField = useCallback(async ({data, tabela}) => {
    return await pb
      .collection(tabela)
      .create(data);
  }, []);

  return (
    <PocketContext.Provider
      value={{ register, login, logout, user, pb, getAllData, registerField, getFilterData, getSinglePaciente, getById }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
