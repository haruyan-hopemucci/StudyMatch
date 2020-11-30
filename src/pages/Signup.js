import React, { useState } from "react";
import "../assets/styles/signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { Button, TextField, NativeSelect, InputLabel } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Signup = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      let response = await auth.createUserWithEmailAndPassword(email, password);
      let uid = response.user.uid;
      let userRef = await db.collection("users").doc(uid).set({
        uid: uid,
        username: username,
        attribute: attribute,
        gender: gender,
        grade: grade,
        area1: area1,
        subject: subject,
        text: text,
        age: age,
        isDone: false
      
      });
      alert("登録完了！ページ遷移します。");
      history.push("/loginpage");
    } catch (error) {
      alert("ユーザー作成失敗", error);
    }
  };

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
  // ーーーーーーーーーーーーーー『Form(PC・タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(min-width:590px)">
        <form class="pc-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <TextField
            label="ユーザー名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <InputLabel htmlFor="select">
            （教わりたいor教えられる）教科
          </InputLabel>
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

          <Button type="submit" variant="contained" color="primary">
            登録
          </Button>
          <Link to="/login">既にアカウントをお持ちの方</Link>
          
        </form>
      </MediaQuery>


      {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Form(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width:590px)">
        <form class="form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <TextField
            label="ユーザー名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <InputLabel htmlFor="select">
            （教わりたいor教えられる）教科
          </InputLabel>
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

          <br/>

          <TextField
            variant="outlined"
            size="normal"
            multiline
            rows="5"
            placeholder="自己紹介文を書いてください"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        <br/>
         <Button type="submit" variant="contained" color="primary">
             <div class="btn-link">
              <p class="text">登録</p>
             </div>
          </Button>
        <br/>

          <Link to="/login">既にアカウントをお持ちの方</Link>

        </form>
      </MediaQuery>
    </body>
  );
};

export default Signup;
