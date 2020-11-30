import React, { useState, useContext } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/AuthService";
import { Button, TextField } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

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
      {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(PCサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      <MediaQuery query="(min-width: 960px)">
        <header class="pc-header">
          <h1 class="pc-title">Study Match</h1>
          <Breadcrumbs
            class="nav"
            variant="contained"
            color="primary"
            aria-label="breadcrumb"
          >
            <Link color="inherit" to="/" class="link">
              ホーム
            </Link>
            <Link color="inherit" to="/beginner" class="link">
              はじめての方へ
            </Link>
            <Link color="inherit" to="/system" class="link">
              システム
            </Link>
            <Link color="textPrimary" to="/contact" class="link">
              お問い合わせ
            </Link>
          </Breadcrumbs>
        </header>
      </MediaQuery>

          {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width: 960px) and (min-width: 590px)">
        <header class="tab-header">
          <h1 class="tab-title">Study Match</h1>
          <Breadcrumbs
            class="nav"
            variant="contained"
            color="primary"
            aria-label="breadcrumb"
          >
            <Link color="inherit" to="/" class="link">
              <HomeIcon style={{ fontSize: 35 }} />
            </Link>
            <Link color="inherit" to="/beginner" class="link">
              <FaceIcon style={{ fontSize: 35 }} />
            </Link>
            <Link color="inherit" to="/system" class="link">
              <SettingsIcon style={{ fontSize: 35 }} />
            </Link>
            <Link color="textPrimary" to="/contact" class="link">
              <MailOutlineIcon style={{ fontSize: 35 }} />
            </Link>
          </Breadcrumbs>
        </header>
      </MediaQuery>

          {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width:590px)">
        <header class="sp-header">
          <h1 class="sp-title">Study Match</h1>
          <Breadcrumbs   class="icon"  variant="contained" color="primary">
            <Link color="inherit" to="/" class="link">
              <HomeIcon style={{ fontSize: 30 }} />
            </Link>
            <Link color="inherit" to="/beginner" class="link">
              <FaceIcon style={{ fontSize: 30 }} />
            </Link>
            <Link color="inherit" to="/system" class="link">
              <SettingsIcon style={{ fontSize: 30 }} />
            </Link>
            <Link color="textPrimary" to="/contact" class="link">
              <MailOutlineIcon style={{ fontSize: 30 }} />
            </Link>
          </Breadcrumbs>
        </header>
      </MediaQuery>

      {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Form(PC・タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(min-width:590px)">
        <form class="pc-form" onSubmit={handleSubmit}>
          <h2>Login </h2>
          <TextField
            label="メールアドレス"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <TextField
            type="password"
            label="パスワード"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <Button type="submit" variant="contained" color="secondary">
            ログイン
          </Button>
          <Link to="/signup">アカウントをお持ちでない方</Link>
        </form>
      </MediaQuery>


      {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Form(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width:590px)">
        <form class="form" onSubmit={handleSubmit}>
          <h2>Login </h2>
          <TextField
            label="メールアドレス"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <TextField
            type="password"
            label="パスワード"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>

           <Button type="submit" variant="contained" color="secondary">
             <div class="btn-link">
              <p class="text">ログイン</p>
             </div>
            </Button>
          <br></br>

          <Link to="/signup">アカウントをお持ちでない方</Link>
        </form>
      </MediaQuery>
    </body>
  );
};

export default Login;
