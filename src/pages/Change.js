import React, { useState } from "react";
import "../assets/styles/signup.css";
import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  Button,
  Breadcrumbs,
  TextField,
  NativeSelect,
  InputLabel,
} from "@material-ui/core";

const Change = () => {
  const [username, setUsername] = useState("");
  const [attribute, setAttribute] = useState("");
  const [gender, setGender] = useState("");
  const [area1, setArea1] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let uid = auth.currentUser.uid;
      let userRef = await db.collection("users").doc(uid).update({
        uid: uid,
        username: username,
        attribute: attribute,
        gender: gender,
        area1: area1,
        grade: grade,
        age: age,
        subject: subject,
        text: text,
      });
      alert("プロフィール変更完了しました（＾O＾）");
    } catch (error) {
      console.log("プロフィール変更に失敗（T＿T）", error);
    }
  };

     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(PCサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
  return (
    <body>
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
          <Breadcrumbs   class="icon" variant="contained" color="primary">
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

      <form onSubmit={handleSubmit} class="pc-form">
        <h1>Change your profile</h1>
        <TextField
          label="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputLabel htmlFor="select">属性</InputLabel>
        <NativeSelect
          id="attribute"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="生徒">生徒</option>
          <option value="講師">講師</option>
        </NativeSelect>

        <InputLabel htmlFor="select">性別</InputLabel>
        <NativeSelect
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="男性">男性</option>
          <option value="女性">女性</option>
        </NativeSelect>

        <InputLabel htmlFor="select">都道府県</InputLabel>
        <NativeSelect
          id="area1"
          value={area1}
          onChange={(e) => setArea1(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="東京">東京</option>
          <option value="神奈川">神奈川</option>
          <option value="千葉">千葉</option>
          <option value="埼玉">埼玉</option>
          <option value="茨城">茨城</option>
          <option value="栃木">栃木</option>
          <option value="群馬">群馬</option>
        </NativeSelect>

        <InputLabel htmlFor="select">学年（生徒登録のみ選択）</InputLabel>
        <NativeSelect
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
      　　 disabled={attribute !== "生徒"}
        >
          <option value="">未選択</option>
          <option value="小学校1~3年">小学校1~3年</option>
          <option value="小学校4~6年">小学校4~6年</option>
          <option value="中1">中1</option>
          <option value="中2">中2</option>
          <option value="中3">中3</option>
          <option value="高1">高1</option>
          <option value="高2">高2</option>
          <option value="高3">高3</option>
          <option value="既卒">既卒</option>
        </NativeSelect>

        <InputLabel htmlFor="select">年齢（講師登録のみ選択）</InputLabel>
        <NativeSelect
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
           disabled={attribute !== "講師"}
        >
          <option value="">未選択</option>
          <option value="20歳未満">20歳未満</option>
          <option value="20~24歳">20~24歳</option>
          <option value="25~29歳">25~29歳</option>
          <option value="30~34歳">30~34歳</option>
          <option value="34~39歳">34~39歳</option>
          <option value="40~44歳">40~44歳</option>
          <option value="45~49歳">45~49歳</option>
          <option value="50~54歳">50~54歳</option>
          <option value="55~59歳">55~59歳</option>
          <option value="60歳以上">60歳以上</option>
        </NativeSelect>

        <InputLabel htmlFor="select">（教わりたいor教えられる）教科</InputLabel>
        <NativeSelect
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="英語">英語</option>
          <option value="数学">数学</option>
          <option value="国語">国語</option>
          <option value="理科">理科</option>
          <option value="社会">社会</option>
          <option value="その他">その他</option>
        </NativeSelect>
        <br></br>
        <TextField
          variant="outlined"
          size="normal"
          multiline
          rows="5"
          placeholder="自己紹介文を書いてください"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br></br>

        <Button type="submit" variant="contained" color="secondary">
             <div class="btn-link">
              <p class="pc-text">変更</p>
             </div>
         </Button>

        <br></br>

        <Button variant="contained" color="primary">
              <Link to="/loginpage" class="btn-link">
              <p class="pc-text">ログインページに戻る</p>
              </Link>
         </Button>

      </form>
      </MediaQuery>

      {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Form(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

  　　 <MediaQuery query="(max-width:590px)">

      <form onSubmit={handleSubmit} class="form">
        <h1>Change your profile</h1>
        <TextField
          label="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputLabel htmlFor="select">属性</InputLabel>
        <NativeSelect
          id="attribute"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="生徒">生徒</option>
          <option value="講師">講師</option>
        </NativeSelect>

        <InputLabel htmlFor="select">性別</InputLabel>
        <NativeSelect
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="男性">男性</option>
          <option value="女性">女性</option>
        </NativeSelect>

        <InputLabel htmlFor="select">都道府県</InputLabel>
        <NativeSelect
          id="area1"
          value={area1}
          onChange={(e) => setArea1(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="東京">東京</option>
          <option value="神奈川">神奈川</option>
          <option value="千葉">千葉</option>
          <option value="埼玉">埼玉</option>
          <option value="茨城">茨城</option>
          <option value="栃木">栃木</option>
          <option value="群馬">群馬</option>
        </NativeSelect>

        <InputLabel htmlFor="select">学年（生徒登録のみ選択）</InputLabel>
        <NativeSelect
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
      　　 disabled={attribute !== "生徒"}
        >
          <option value="">未選択</option>
          <option value="小学校1~3年">小学校1~3年</option>
          <option value="小学校4~6年">小学校4~6年</option>
          <option value="中1">中1</option>
          <option value="中2">中2</option>
          <option value="中3">中3</option>
          <option value="高1">高1</option>
          <option value="高2">高2</option>
          <option value="高3">高3</option>
          <option value="既卒">既卒</option>
        </NativeSelect>

        <InputLabel htmlFor="select">年齢（講師登録のみ選択）</InputLabel>
        <NativeSelect
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
           disabled={attribute !== "講師"}
        >
          <option value="">未選択</option>
          <option value="20歳未満">20歳未満</option>
          <option value="20~24歳">20~24歳</option>
          <option value="25~29歳">25~29歳</option>
          <option value="30~34歳">30~34歳</option>
          <option value="34~39歳">34~39歳</option>
          <option value="40~44歳">40~44歳</option>
          <option value="45~49歳">45~49歳</option>
          <option value="50~54歳">50~54歳</option>
          <option value="55~59歳">55~59歳</option>
          <option value="60歳以上">60歳以上</option>
        </NativeSelect>

        <InputLabel htmlFor="select">（教わりたいor教えられる）教科</InputLabel>
        <NativeSelect
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">未選択</option>
          <option value="英語">英語</option>
          <option value="数学">数学</option>
          <option value="国語">国語</option>
          <option value="理科">理科</option>
          <option value="社会">社会</option>
          <option value="その他">その他</option>
        </NativeSelect>
        <br></br>
        <TextField
          variant="outlined"
          size="normal"
          multiline
          rows="5"
          placeholder="自己紹介文を書いてください"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br></br>
        <Button type="submit" variant="contained" color="secondary">
             <div class="btn-link">
              <p class="text">変更</p>
             </div>
         </Button>
        <br></br>
        <Button variant="contained" color="primary">
              <Link to="/loginpage" class="btn-link">
              <p class="text">ログインページに戻る</p>
              </Link>
         </Button>

      </form>
      </MediaQuery>
    </body>
  );
};

export default Change;
