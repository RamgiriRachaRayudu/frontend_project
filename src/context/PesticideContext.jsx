import { createContext, useContext, useState } from "react";
import { getData, setData } from "../utils/storage";
const C = createContext();
export const usePesticides = () => useContext(C);
export function PesticideProvider({ children }) {
  const [pesticides, setPesticides] = useState(getData("pesticides"));
  const [categories, setCategories] = useState(getData("categories"));
  const saveP = (v) => {
    setPesticides(v);
    setData("pesticides", v);
  };
  const saveC = (v) => {
    setCategories(v);
    setData("categories", v);
  };
  const addP = (p) =>
    saveP([...pesticides, { ...p, id: Date.now().toString() }]);
  const updateP = (p) => saveP(pesticides.map((x) => (x.id === p.id ? p : x)));
  const deleteP = (id) => saveP(pesticides.filter((x) => x.id !== id));
  return (
    <C.Provider
      value={{
        pesticides,
        categories,
        addP,
        updateP,
        deleteP,
        setCategories: saveC,
      }}
    >
      {children}
    </C.Provider>
  );
}
