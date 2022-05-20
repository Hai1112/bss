import styles from "../styles/Home.module.scss";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const res = await axios.post("http://localhost:4000/login", {
        username,
        password,
      });
      if (res.data.status === "success") {
        router.replace("/dashboard");
      } else {
        setError("Wrong username or password");
      }
    } else {
      setError("Please fill up your info");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>SOIOT SYSTEM</h1>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className={styles.errorMessage}>{error}</span>
        <div className={styles.formAction}>
          <button
            onClick={handleSubmit}
            type="submit"
            className={styles.loginButton}
          >
            LOGIN
          </button>
          <a className={styles.register} href="#">
            or create new account
          </a>
        </div>
      </form>
    </div>
  );
}
