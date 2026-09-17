import { createContext, useContext, useState } from "react";
import { getData, setData } from "../utils/storage";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(getData("currentUser", null));
  const login = (email, password) => {
    const found = getData("users").find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );
    if (!found) throw new Error("Invalid email or password");
    setData("currentUser", found);
    setUser(found);
    return found;
  };
  const register = (payload) => {
    const users = getData("users");
    if (
      users.some((u) => u.email.toLowerCase() === payload.email.toLowerCase())
    )
      throw new Error("Email is already registered");
    const newUser = { ...payload, id: Date.now().toString(), role: "user" };
    setData("users", [...users, newUser]);
    return newUser;
  };
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };
  const updateProfile = (data) => {
    const users = getData("users").map((u) =>
      u.id === user.id ? { ...u, ...data } : u,
    );
    const updated = users.find((u) => u.id === user.id);
    setData("users", users);
    setData("currentUser", updated);
    setUser(updated);
  };
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
