
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message || "Не удалось войти");
                return;
            }

            setMessage("Вход выполнен успешно!");
            localStorage.setItem("userId", String(data.userId));
            navigate("/");
        } catch (error) {
            setMessage("Не удалось подключиться к серверу");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F5F6F8", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "'Poppins', sans-serif" }}>
            <div style={{ width: "400px", padding: "35px", backgroundColor: "white", border: "1px solid #E0E0E0", borderRadius: "25px", boxSizing: "border-box" }}>
                <h1 style={{ textAlign: "center", fontSize: "30px", marginBottom: "8px" }}>Добро пожаловать</h1>

                <p style={{ textAlign: "center", color: "#777", marginBottom: "30px" }}>Войдите в Phone Store</p>

                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required style={{ padding: "14px", border: "1px solid #E0E0E0", borderRadius: "12px", fontSize: "15px" }} />

                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required style={{ padding: "14px", border: "1px solid #E0E0E0", borderRadius: "12px", fontSize: "15px" }} />

                    <button type="submit" disabled={loading} style={{ padding: "15px", backgroundColor: "#111", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", cursor: "pointer", opacity: loading ? 0.7 : 1 }}>
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <p style={{ textAlign: "center", color: "#777", fontSize: "14px", marginTop: "20px" }}>{message}</p>

                <p style={{ textAlign: "center", color: "#777", fontSize: "14px", marginTop: "15px" }}>
                    Нет аккаунта? <Link to="/register" style={{ color: "#111", fontWeight: "600" }}>Создать аккаунт</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
