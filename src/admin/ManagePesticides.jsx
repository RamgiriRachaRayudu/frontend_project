import { useState } from "react";
import { usePesticides } from "../context/PesticideContext";
import Modal from "../components/Modal";
const empty = {
  name: "",
  brand: "",
  category: "",
  image: "",
  description: "",
  activeIngredient: "",
  recommendedCrops: "",
  targetPest: "",
  usageInstructions: "",
  dosage: "",
  safetyPrecautions: "",
  warningLevel: "Low",
  manufacturingDate: "",
  expiryDate: "",
};
export default function Manage() {
  const { pesticides, categories, addP, updateP, deleteP } = usePesticides();
  const [editing, setEditing] = useState(null),
    [q, setQ] = useState("");
  const form = editing || empty;
  const save = (e) => {
    e.preventDefault();
    if (!form.name || !form.brand || !form.category)
      return alert("Please fill required fields");
    editing?.id
      ? updateP(form)
      : addP({
          ...form,
          image:
            form.image ||
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
        });
    setEditing(null);
  };
  const list = pesticides.filter((p) =>
    [p.name, p.brand, p.category, p.targetPest]
      .join(" ")
      .toLowerCase()
      .includes(q.toLowerCase()),
  );
  return (
    <section>
      <div className="row">
        <h1>Manage Pesticides</h1>
        <button className="btn" onClick={() => setEditing(empty)}>
          Add New
        </button>
      </div>
      <input
        className="search"
        placeholder="Search records..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Active Ingredient</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.brand}</td>
                <td>{p.category}</td>
                <td>{p.activeIngredient}</td>
                <td>
                  <button onClick={() => setEditing(p)}>Edit</button>
                  <button
                    className="danger"
                    onClick={() =>
                      confirm("Delete this pesticide?") && deleteP(p.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editing && (
        <Modal
          title={editing.id ? "Edit Pesticide" : "Add Pesticide"}
          onClose={() => setEditing(null)}
        >
          <form className="form-grid" onSubmit={save}>
            {Object.keys(empty).map((k) =>
              k === "category" ? (
                <select
                  key={k}
                  value={form[k]}
                  required
                  onChange={(e) => setEditing({ ...form, [k]: e.target.value })}
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              ) : k === "warningLevel" ? (
                <select
                  key={k}
                  value={form[k]}
                  onChange={(e) => setEditing({ ...form, [k]: e.target.value })}
                >
                  {["Low", "Medium", "High"].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              ) : (
                <input
                  key={k}
                  required={[
                    "name",
                    "brand",
                    "description",
                    "activeIngredient",
                    "dosage",
                    "usageInstructions",
                    "safetyPrecautions",
                    "manufacturingDate",
                    "expiryDate",
                  ].includes(k)}
                  type={k.includes("Date") ? "date" : "text"}
                  placeholder={k.replace(/([A-Z])/g, " $1")}
                  value={form[k]}
                  onChange={(e) => setEditing({ ...form, [k]: e.target.value })}
                />
              ),
            )}
            <button className="btn">Save</button>
          </form>
        </Modal>
      )}
    </section>
  );
}
