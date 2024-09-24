import { create } from "zustand";

// Define the Zustand store with types
interface AuthStore {
  email: string;
  password: string;
  password2: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPassword2: (password: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  email: "",
  password: "",
  password2: "",
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
  setPassword2: (password: string) => set({ password2: password }),
}));

export default useAuthStore;
