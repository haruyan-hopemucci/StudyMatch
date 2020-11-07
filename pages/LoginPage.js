import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/styles/loginpage.css";
import { auth, db } from "../config/firebase";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Grid,
  Card,
  InputLabel,
  NativeSelect,
  TextField,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "80%",
    fontSize: "20px",
    padding: "20px",
    margin: "20px",
  },
  a: {
    backgroundColor: "#66FF99",
    opacity: "0.8",
  },
  b: {
    backgroundColor: "#9999FF",
    opacity: "0.8",
  },
  c: {
    backgroundColor: "#99CCCC",
    opacity: "0.8",
  },
  link: {
    textDecoration: "none",
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const [attribute, setAttribute] = useState("");
  const [age, setAge] = useState("");
  const [area1, setArea1] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");

  const [profile, setProfile] = useState({});
  const [result, setResult] = useState([]);

  useEffect(async () => {
    let uid = auth.currentUser.uid;
    let doc = await db.collection("users").doc(uid).get();
    // console.log(doc.data());
    setProfile(doc.data());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("いざ検索！！！！");
    const result = [];

    const querySnapshot = await db
      .collection("users")
      .where("attribute", "==", attribute)
      .where("gender", "==", gender)
      // .where("grade", "==", grade)
      // .where("area1", "==", area1)
      // .where("subject", "==", subject)
      .get();

    // console.log("size:", querySnapshot.size);
    // console.log("empty?:", querySnapshot.empty);
    querySnapshot.forEach((postDoc) => {
      // console.log(postDoc.id, " => ", JSON.stringify(postDoc.data()));
      const search = postDoc.data();
      // console.log(search);
      result.push(search);
      // console.log(setResult);  // このconsole.logは全く不要です。
    });
    // console.log("result:", result);
    setResult(result); // setResultはforEachが終わった後で実施しましょう。そうしないとループ中毎回画面更新が発生してしまいます。
  };

  const signout = () => {
    auth.signOut();
  };

  return (
    <>
      <body>
        {/* ！！！！！！！！！！！！！！！！！！！！！！！！ */}
        {/* ！！！！！！ヘッダーはここから！！！！！！！！！ */}
        {/*！！！！！！！！！！！！！！！！！！！！！！！！！*/}
        <header class="classes.header">
          <h1 class="title">Study Match</h1>

          <ButtonGroup
            class="nav"
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>
              <Link to="/beginner" class="link">
                はじめての方へ
              </Link>
            </Button>
            <Button>
              <Link to="/system" class="link">
                システム
              </Link>
            </Button>

            <Button>
              <Link to="/contact" class="link">
                お問い合わせ
              </Link>
            </Button>
          </ButtonGroup>
        </header>
        {/* ！！！！！！！！！！！！！！！！！！！！！！！！ */}
        {/* ！！！！！！メインはここから！！！！！！！！！ */}
        {/*！！！！！！！！！！！！！！！！！！！！！！！！！*/}
        <div class="inner">
          <p>{profile.username}さん、ようこそ！</p>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card + " " + classes.a} elevation={3}>
              <Link to="/room" className={classes.link}>
                <p class="a">講師・生徒を探す</p>
              </Link>
            </Card>

            <Card className={classes.card + " " + classes.b} elevation={3}>
              <Link to="/room" className={classes.link}>
                <p class="a">メッセージ</p>
              </Link>
            </Card>
            <Card className={classes.card + " " + classes.c} elevation={3}>
              <Link to="/room" className={classes.link}>
                <p class="a">プロフィール変更</p>
              </Link>
            </Card>
          </Grid>
          　　　
          <Button variant="contained" color="primary" onClick={signout}>
            ログアウト
          </Button>
        </div>
      </body>
    </>
  );
};
export default LoginPage;
