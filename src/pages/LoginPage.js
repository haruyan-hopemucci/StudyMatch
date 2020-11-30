import React, { useState, useEffect } from "react";
import "../assets/styles/loginpage.css";
import { makeStyles } from "@material-ui/core/styles";
import { auth, db } from "../config/firebase";
import { Link } from "react-router-dom";
import { Button, Grid, Card, Breadcrumbs } from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles({
  card: {
    width: "70%",
    fontSize: "25px",
    margin: "20px",
    textAlign:"center"
  },
  a: {
    backgroundColor: "rgb(196, 222, 225);",
    opacity: "0.8",
  },
  b: {
    backgroundColor: "rgb(196, 222, 225);",
    opacity: "0.8",
  },
  link: {
    textDecoration: "none",
    display: "block",
    padding:"20px"
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    let uid = auth.currentUser.uid;
    let doc = await db.collection("users").doc(uid).get();
    setProfile(doc.data());
  }, []);

  const signout = () => {
    auth.signOut();
  };

  return (
    <>
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
              <Link color="inherit" to="/loginpage" class="link">
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

     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        </MediaQuery>
        <MediaQuery query="(max-width: 960px) and (min-width: 590px)">
          <header class="tab-header">
            <h1 class="tab-title">Study Match</h1>
            <Breadcrumbs
              class="nav"
              variant="contained"
              color="primary"
              aria-label="breadcrumb"
            >
              <Link color="inherit" to="/loginpage" class="link">
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
              <Link color="inherit" to="/loginpage" class="link">
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
  // ーーーーーーーーーーーーーー『Main(PC・タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        <p>{profile.username}さん、ようこそ！</p>
        <MediaQuery query="(min-width:590px)">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card + " " + classes.a} elevation={3}>
              <Link to="/room" className={classes.link}>
                <p class="link-text">講師・生徒を探す</p>
              </Link>
            </Card>

            <Card className={classes.card + " " + classes.b} elevation={3}>
              <Link to="/change" className={classes.link}>
                <p class="link-text">プロフィール変更</p>
              </Link>
            </Card>
          </Grid>
           
          <Button variant="contained" color="primary" onClick={signout}>
            ログアウト
          </Button>
        </MediaQuery>

          
    {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Main(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        <MediaQuery query="(max-width:590px)">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card + " " + classes.a} elevation={3}>
              <Link to="/room" className={classes.link}>
                <p class="sp-link-text">講師・生徒を探す</p>
              </Link>
            </Card>

            <Card className={classes.card + " " + classes.b} elevation={3}>
              <Link to="/change" className={classes.link}>
                <p class="sp-link-text">プロフィール変更</p>
              </Link>
            </Card>
          </Grid>

          <Button variant="contained" class="sp-btn" onClick={signout}>
            ログアウト
          </Button>
        </MediaQuery>　
      </body>
    </>
  );
};
export default LoginPage;
