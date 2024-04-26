import {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PocketBase from "pocketbase";

const BASE_URL = "http://127.0.0.1:8090";

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

  const registerPaciente = useCallback(async (data) => {
    return await pb
      .collection("pacientes")
      .create(data);
  }, []);

  return (
    <PocketContext.Provider
      value={{ register, login, logout, user, pb, getAllData, registerPaciente }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
