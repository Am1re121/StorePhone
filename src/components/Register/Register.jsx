
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        setMessage("Регистрация...");

        try {
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, username, email, password })
                
            });

            const data = await response.json();
            setMessage(data.message);
            if (response.ok) {
                navigate("/");
            }
        } catch (error) {
            setMessage("Не удалось подключиться к серверу");
        }
    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F5F6F8", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "'Poppins', sans-serif" }}>
            <div style={{ width: "400px", padding: "35px", backgroundColor: "white", border: "1px solid #E0E0E0", borderRadius: "25px", boxSizing: "border-box" }}>
                <h1 style={{ textAlign: "center", fontSize: "30px", marginBottom: "8px" }}>Создать аккаунт</h1>
                <p style={{ textAlign: "center", color: "#777", marginBottom: "30px" }}>Присоединяйтесь к Phone Store</p>

                <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full name" required style={{ padding: "14px", border: "1px solid #E0E0E0", borderRadius: "12px", fontSize: "15px" }} />
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required style={{ padding: "14px", border: "1px solid #E0E0E0", borderRadius: "12px", fontSize: "15px" }} />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" required style={{ padding: "14px", border: "1px solid #E0E0E0", borderRadius: "12px", fontSize: "15px" }} />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password (minimum 8 characters)" minLength={8} required style={{ padding: "14px", border: "1px solid #E0E0E0", borderRadius: "12px", fontSize: "15px" }} />

                    <button type="submit" style={{ padding: "15px", backgroundColor: "#111", color: "white", border: "none", borderRadius: "12px", fontSize: "16px", cursor: "pointer" }}>Create Account</button>
                </form>

                <p style={{ textAlign: "center", color: "#777", fontSize: "14px", marginTop: "20px" }}>{message}</p>

                <p style={{ textAlign: "center", color: "#777", fontSize: "14px", marginTop: "15px" }}>
                    Уже есть аккаунт? <Link to="/login" style={{ color: "#111", fontWeight: "600" }}>Войти</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
