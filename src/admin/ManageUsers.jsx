import { useState } from "react";
import { getData, setData } from "../utils/storage";
export default function Users() {
  const [q, setQ] = useState("");
  const [users, setUsers] = useState(getData("users"));
  const list = users.filter((u) =>
    (u.name + u.email).toLowerCase().includes(q.toLowerCase()),
  );
  const del = (id) => {
    const next = users.filter((u) => u.id !== id);
    setUsers(next);
    setData("users", next);
  };
  return (
    <section>
      <h1>Manage Users</h1>
      <input
        className="search"
        placeholder="Search users"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className="badge">{u.role}</span>
                </td>
                <td>
                  {u.role !== "admin" && (
                    <button className="danger" onClick={() => del(u.id)}>
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
