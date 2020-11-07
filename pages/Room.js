import React, { useState, useEffect } from "react";
import "../assets/styles/room.css";
import boy from "../assets/img/boy.png";
import girl from "../assets/img/girl.png";
import man from "../assets/img/man.png";
import woman from "../assets/img/woman.png";
import { auth, db } from "../config/firebase";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";

const Room = () => {
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

    // db.collection("users")まで実行したオブジェクトを作る。
    let collection = db.collection("users");
    // 対象の検索条件が空文字列""ではなかったらwhereをセットする。
    if (attribute !== "") {
      console.log("検索対象：属性");
      collection = collection.where("attribute", "==", attribute);
    }
    if (gender !== "") {
      console.log("検索対象：性別");
      collection = collection.where("gender", "==", gender);
    }
    if (grade !== "") {
      console.log("検索対象：学年");
      collection = collection.where("grade", "==", grade);
    }
    if (age !== "") {
      console.log("検索対象：年齢");
      collection = collection.where("age", "==", age);
    }
    if (area1 !== "") {
      console.log("検索対象：都道府県");
      collection = collection.where("area1", "==", area1);
    }
    if (subject !== "") {
      console.log("検索対象：教科");
      collection = collection.where("subject", "==", subject);
    }

    const querySnapshot = await collection.get();
    querySnapshot.forEach((postDoc) => {
      const search = postDoc.data();
      result.push(search);
    });
    setResult(result);
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
          <p>検索してみよう！</p>
          {/* 検索結果ここから */}
          <p>検索結果</p>
          <ul class="list">
            {result.map((e, i) => {
              // console.log("result foreach:", e);
              return (
                <>
                  <div class="human">
                    {(() => {
                      if (e.attribute === "生徒") {
                        if (e.gender === "男性") {
                          return <img src={boy} />;
                        } else {
                          return <img src={girl} />;
                        }
                      } else {
                        if (e.gender === "男性") {
                          return <img src={man} />;
                        } else {
                          return <img src={woman} />;
                        }
                      }
                    })()}

                    <ul>
                      <li>名前：{e.username}</li>
                      <li>性別：{e.gender}</li>

                      {(() => {
                        if (e.attribute === "生徒") {
                          return <li>学年：{e.grade}</li>;
                        } else {
                          return <li>年齢：{e.age}</li>;
                        }
                      })()}

                      <li>都道府県：{e.area1}</li>
                      <li>教科：{e.subject}</li>
                    </ul>

                    <p>自己紹介</p>
                    <p>{e.text}</p>

                    <Link to="/chat" class="link">
                      <Button variant="contained" color="primary">
                        メッセージを送る
                      </Button>
                    </Link>

                    <br></br>
                  </div>
                </>
              );
            })}
          </ul>
          {/* 検索結果ここまで */}
          　　　
          <form class="form" onSubmit={handleSubmit}>
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
              <option value="両方">どちらでも可</option>
            </NativeSelect>

            <InputLabel htmlFor="select">学年（生徒検索のみ選択）</InputLabel>
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

            <InputLabel htmlFor="select">年齢（講師検索のみ選択）</InputLabel>
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

            <InputLabel htmlFor="select">教科</InputLabel>
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

            <Button type="submit" variant="contained" color="secondary">
              検索！
            </Button>
          </form>
          <Link to="/login" class="link">
            <Button variant="contained" color="primary">
              再検索する
            </Button>
          </Link>
          <Link to="/loginpage" class="link">
            <Button variant="contained" color="primary">
              ログインページに戻る
            </Button>
          </Link>
          <Button variant="contained" color="primary" onClick={signout}>
            ログアウト
          </Button>
        </div>
      </body>
    </>
  );
};
export default Room;
