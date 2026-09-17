import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Register() {
  const [f, setF] = useState({
      name: "",
      email: "",
      password: "",
      confirm: "",
    }),
    [err, setErr] = useState("");
  const { register, login } = useAuth(),
    nav = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (f.password !== f.confirm) return setErr("Passwords do not match");
    try {
      register({ name: f.name, email: f.email, password: f.password });
      login(f.email, f.password);
      nav("/");
    } catch (x) {
      setErr(x.message);
    }
  };
  return (
    <section className="auth">
      <form onSubmit={submit}>
        <h1>Create Account</h1>
        {err && <div className="alert error">{err}</div>}
        {["name", "email", "password", "confirm"].map((k) => (
          <input
            key={k}
            type={k === "email" ? "email" : k === "name" ? "text" : "password"}
            placeholder={
              k === "confirm"
                ? "Confirm Password"
                : k[0].toUpperCase() + k.slice(1)
            }
            required
            onChange={(e) => setF({ ...f, [k]: e.target.value })}
          />
        ))}
        <button className="btn">Register</button>
      </form>
    </section>
  );
}
