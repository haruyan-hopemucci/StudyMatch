import React, { useState } from "react";
import "../assets/styles/signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { Button, TextField, NativeSelect, InputLabel } from "@material-ui/core";

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
    console.log("今からcreateuser");
    try {
      // emailとパスワードでユーザーを作成。結果がresponseに入る。
      let response = await auth.createUserWithEmailAndPassword(email, password);
      console.log("create user credentials:", response);
      // レスポンスからuidを取得できる。
      let uid = response.user.uid;
      console.log("create uid:", uid);
      // uidをドキュメントのキーにして、firestore側へドキュメントをsetする。
      let userRef = await db.collection("users").doc(uid).set({
        username: username,
        attribute: attribute,
        gender: gender,
        grade: grade,
        area1: area1,
        subject: subject,
        text: text,
        age: age,
        // area2: area2,
      });
      // 結果の表示（結果はnullしか返ってこないので何も表示されない、が正解）
      console.log("add data result:", userRef);
      alert("登録完了！ページ遷移します。");
      history.push("/loginpage");
    } catch (error) {
      console.log("ユーザー作成失敗", error);
    }
  };

  return (
    <body>
      <form onSubmit={handleSubmit} class="form">
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
          <option value="大阪">大阪</option>
          <option value="福岡">福岡</option>
        </NativeSelect>

        <InputLabel htmlFor="select">学年（生徒登録のみ選択）</InputLabel>
        <NativeSelect
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
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

        <Button type="submit" variant="contained" color="primary">
          登録
        </Button>
        <Link to="/login">既にアカウントをお持ちの方</Link>
        <Link to="/home">トップベージに戻る</Link>
      </form>
    </body>
  );
};

export default Signup;
