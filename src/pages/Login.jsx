import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Login() {
  const [f, setF] = useState({ email: "", password: "" }),
    [err, setErr] = useState("");
  const { login } = useAuth(),
    nav = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    try {
      const u = login(f.email, f.password);
      nav(u.role === "admin" ? "/admin" : "/");
    } catch (x) {
      setErr(x.message);
    }
  };
  return (
    <section className="auth">
      <form onSubmit={submit}>
        <h1>Welcome back</h1>
        {err && <div className="alert error">{err}</div>}
        <input
          placeholder="Email"
          type="email"
          required
          onChange={(e) => setF({ ...f, email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          required
          onChange={(e) => setF({ ...f, password: e.target.value })}
        />
        <button className="btn">Login</button>
        <p>
          Demo admin: <b>admin@pesticare.com / admin123</b>
        </p>
        <Link to="/register">Create user account</Link>
      </form>
    </section>
  );
}
