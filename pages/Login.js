import React, { useState, useContext } from "react";
import "../assets/styles/login.css";
import { Link, useHistory, Redirect } from "react-router-dom";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/AuthService";
import { Button, TextField } from "@material-ui/core";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const userExsist = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/loginpage");
      })

      .catch((error) => {
        alert("ログイン失敗！", error);
      });
  };

  if (userExsist) {
    return <Redirect to="/loginpage" />;
  }

  return (
    <body>
      <form onSubmit={handleSubmit} class="form">
        <h1>Login Page</h1>

        <TextField
          label="メールアドレス"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="パスワード"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary">
          ログイン
        </Button>
        <Link to="/signup">アカウントをお持ちでない方</Link>
        <Link to="/home">トップベージに戻る</Link>
      </form>
    </body>
  );
};

export default Login;
