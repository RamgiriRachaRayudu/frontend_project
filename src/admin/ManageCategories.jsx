import { useState } from "react";
import { usePesticides } from "../context/PesticideContext";
export default function Categories() {
  const { categories, setCategories } = usePesticides();
  const [name, setName] = useState("");
  const add = () => {
    const n = name.trim();
    if (!n || categories.some((c) => c.toLowerCase() === n.toLowerCase()))
      return alert("Enter a unique category");
    setCategories([...categories, n]);
    setName("");
  };
  return (
    <section>
      <h1>Manage Categories</h1>
      <div className="row">
        <input
          value={name}
          placeholder="New category"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" onClick={add}>
          Add
        </button>
      </div>
      <div className="category-grid">
        {categories.map((c) => (
          <div key={c}>
            {c}
            <button
              className="danger"
              onClick={() =>
                confirm("Delete category?") &&
                setCategories(categories.filter((x) => x !== c))
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
