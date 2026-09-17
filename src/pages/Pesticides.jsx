import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePesticides } from "../context/PesticideContext";
import PesticideCard from "../components/PesticideCard";
export default function Pesticides() {
  const { pesticides, categories } = usePesticides();
  const [params] = useSearchParams();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(params.get("category") || "");
  const [warn, setWarn] = useState("");
  const [sort, setSort] = useState("name");
  const list = useMemo(
    () =>
      pesticides
        .filter((p) =>
          [p.name, p.brand, p.category, p.targetPest]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .filter((p) => !cat || p.category === cat)
        .filter((p) => !warn || p.warningLevel === warn)
        .sort((a, b) =>
          sort === "expiry"
            ? a.expiryDate.localeCompare(b.expiryDate)
            : a[sort].localeCompare(b[sort]),
        ),
    [pesticides, q, cat, warn, sort],
  );
  return (
    <section>
      <h1>Pesticide Directory</h1>
      <div className="filters">
        <input
          placeholder="Search product, brand, category or pest..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select value={warn} onChange={(e) => setWarn(e.target.value)}>
          <option value="">All warning levels</option>
          {["Low", "Medium", "High"].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="expiry">Expiry date</option>
        </select>
      </div>
      <p className="muted">{list.length} products found</p>
      <div className="grid">
        {list.map((p) => (
          <PesticideCard key={p.id} p={p} />
        ))}
      </div>
      {!list.length && (
        <div className="empty">No pesticides match your search.</div>
      )}
    </section>
  );
}
