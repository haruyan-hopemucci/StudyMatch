import React, { useState, useEffect } from "react";
import "../assets/styles/room.css";
import boy from "../assets/img/boy.png";
import girl from "../assets/img/girl.png";
import man from "../assets/img/man.png";
import woman from "../assets/img/woman.png";
import { auth, db } from "../config/firebase";
import { Link, useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import {
  Button,
  InputLabel,
  NativeSelect,
  Breadcrumbs,
} from "@material-ui/core";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Room = () => {
  const history = useHistory();
  const [attribute, setAttribute] = useState("");
  const [age, setAge] = useState("");
  const [area1, setArea1] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [profile, setProfile] = useState({});
  const [result, setResult] = useState([]);
  const [find, setFind] = useState(false);

  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーログインユーザーのプロフィール情報取得ーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  useEffect(async () => {
    let uid = auth.currentUser.uid;
    let doc = await db.collection("users").doc(uid).get();
    console.log(doc.data());
    setProfile(doc.data());
  }, []);

  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーー『検索』を押したときの処理ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = [];
    let collection = db.collection("users");
    if (attribute !== "") {
      collection = collection.where("attribute", "==", attribute);
    }
    if (gender !== "") {
      collection = collection.where("gender", "==", gender);
    }
    if (grade !== "") {
      collection = collection.where("grade", "==", grade);
    }
    if (age !== "") {
      collection = collection.where("age", "==", age);
    }
    if (area1 !== "") {
      collection = collection.where("area1", "==", area1);
    }
    if (subject !== "") {
      collection = collection.where("subject", "==", subject);
    }
    // handleSubmit内でusersをgetするところから
    const querySnapshot = await collection.get();
    console.log(querySnapshot)
    // for文で書き直す方法。
    for(let i = 0; i < querySnapshot.size; i++){
      let postDoc = querySnapshot.docs[i];
      const search = postDoc.data();
      // likesを検索する。検索方法は従来通り。
      let matchColl = db.collection("likes")
        .where("senderUid", '==', profile.uid)
        .where("receiverUid", '==', search.uid)
        .where("isDone", '==', true);
      // likesをgetする。必ずawaitする。
      let matchQs = await matchColl.get();
      console.log("matchdata:", search.uid, matchQs);
      // likesで取得したデータの数が1であれば、以前いいねを押したデータが存在している
      // 1であればsearchにisDone: trueのデータをセットする。
      // そうでなければfalseをセットする。
      if(matchQs.size === 1){
        search.isDone = true;
      }else{
        search.isDone = false;
      }
      // 最後にresultへpush
      result.push(search);
    }
    // resultから自分自身を除外するところ。修正点はここまで。
    result = result.filter( function(value){
      return profile.uid !== value.uid;
    });

   console.log(result)
   console.log(result.length)
   setResult(result);   
   setFind(true)
  };

 // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
 // ーーーーーーーーーーー『検索結果０件』のときの処理ーーーーーーーーーーーーーーーーーーーーーー
 // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
      const　alertRender =  () => {
        if(find === true && result.length === 0){
          return (<Alert severity="error">条件に合致するデータは検索されませんでした。</Alert>);
        }else{
          return (<></>);
        }
      }
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーー『ログアウト』を押したときの処理ーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const signout = () => {
    auth.signOut();
  };
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーー『いいね』を押したときの処理ーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const clickLike = async (uid) => {
    let myUid = auth.currentUser.uid;
    let targetData = result.find((e) => e.uid === uid);
    targetData.isDone = true;

    const like = await db
      .collection("likes")
      .where("senderUid", "==", myUid)
      .where("receiverUid", "==", uid)
      .get();

    if (like.empty) {
      await db.collection("likes").add({
        senderUid: myUid,
        receiverUid: uid,
        isDone: true,
      });
    } else {
      like.forEach((postDoc) => {
        postDoc.ref.update({
          isDone: true,
        });
      });
    }
    setResult(Object.assign([], result));
  };

  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーー『いいね取り消し』を押したときの処理ーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  const notLike = async (uid) => {
    let myUid = auth.currentUser.uid;
    let targetData = result.find((e) => e.uid === uid);
    targetData.isDone = false;

    const like = await db
      .collection("likes")
      .where("senderUid", "==", myUid)
      .where("receiverUid", "==", uid)
      .get();

    like.forEach((postDoc) => {
      postDoc.ref.update({
        isDone: false,
      });
    });
    setResult(Object.assign([], result));
  };

  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーー『メッセージを送る』を押したときの処理ーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const checkMatch = (uid) => {
    let myUid = auth.currentUser.uid;
    let targetData = result.find((e) => e.uid === uid);
    const func = async () => {
      const likeData = [];

      const data1 = db
        .collection("likes")
        .where("senderUid", "==", myUid)
        .where("receiverUid", "==", uid)
        .where("isDone", "==", true)
        .get();
      (await data1).forEach((postDoc) => {
        likeData.push(postDoc.data());
        console.log(likeData);
      });
      if (likeData.length === 1) {
        console.log("いいね送っています（＾０＾）");
      } else {
        alert("いいね送っていません（T＿T）");
        return;
      }

      const data2 = db
        .collection("likes")
        .where("senderUid", "==", uid)
        .where("receiverUid", "==", myUid)
        .where("isDone", "==", true)
        .get();
      (await data2).forEach((postDoc) => {
        likeData.push(postDoc.data());
        console.log(likeData);
      });
      if (likeData.length === 2) {
        console.log("いいね受け取っています（＾０＾）");
      } else {
        alert("いいね受け取っていません（T＿T）");
        return;
      }
      const confirm = window.confirm(
        "マッチング成立です!メッセージを送りますか？"
      );
      if (confirm) {
        history.push("/chat/" + targetData.uid);
      }
    };
    func();
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
            <Breadcrumbs class="icon"　variant="contained" color="primary">
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

{/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  */}
{/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー  */}
        <p>{profile.username}さん、ようこそ！</p>
        <p>講師・生徒の検索</p>
                <ul class="list">
                {result.map((e, i) => {
                  return (
                    <>
  {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
     // ーーーーーーーーーーーーーー『検索結果（PC・タブレットサイズ）』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
     // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
                <MediaQuery query="(min-width:590px)">
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

                    <Button
                      class="btn1 btn"
                      type="button"
                      onClick={(event) => clickLike(e.uid)}
                      style={{
                        backgroundColor: e.isDone ? "#dc004e" : "#bbb",
                      }}
                    >
                      いいね！
                    </Button>
                    <Button
                      class="btn2 btn"
                      variant="contained"
                      type="button"
                      onClick={(event) => notLike(e.uid)}
                    >
                      キャンセル
                    </Button>
                    <Button
                      class="btn3 btn"
                      variant="contained"
                      onClick={(event) => checkMatch(e.uid)}
                    >
                      メッセージを送る
                    </Button>
                    <br></br>
                  </div>
                </MediaQuery>

                {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『検索結果（スマホサイズ）』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

                <MediaQuery query="(max-width:590px)">
                  <div class="sp-human">
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

                    <Button
                      class="sp-btn1 btn"
                      type="button"
                      onClick={(event) => clickLike(e.uid)}
                      style={{
                        backgroundColor: e.isDone ? "#dc004e" : "#bbb",
                      }}
                    >
                      いいね！
                    </Button>
                    <Button
                      class="sp-btn2 btn"
                      variant="contained"
                      type="button"
                      onClick={(event) => notLike(e.uid)}
                    >
                      キャンセル
                    </Button>
                    <Button
                      class="sp-btn3 btn"
                      variant="contained"
                      onClick={(event) => checkMatch(e.uid)}
                    >
                      メッセージを送る
                    </Button>
                    <br></br>
                  </div>
                </MediaQuery>
              </>
            );
          })}
        </ul>



   {alertRender()}
     

        {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『検索項目入力画面（PC・タブレットサイズ）』ーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        　　

      <MediaQuery query="(min-width:590px)">
        <form class="pc-form" onSubmit={handleSubmit} >
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

          <InputLabel htmlFor="select">学年（生徒検索のみ選択）</InputLabel>
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

          <InputLabel htmlFor="select">年齢（講師検索のみ選択）</InputLabel>
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

          <br></br>
         <Button type="submit" variant="contained" color="secondary">
             <div class="btn-link">
              <p class="pc-text">検索</p>
             </div>
          </Button>

          <br></br>
        <Button variant="contained" color="primary">
             <Link to="/loginpage"class="btn-link" >
              <p class="pc-text">ログインページへ</p>
            </Link>
          </Button>
           
          <br></br>
            <Button  onClick={signout} variant="contained" color="primary">
             <div class="btn-link" >
              <p class="pc-text">ログアウト</p>
            </div>
          </Button>

        </form>
        </MediaQuery>　

        {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『検索項目入力画面（スマホサイズ）』ーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        　　　
        <MediaQuery query="(max-width:590px)">
        <form class="form" onSubmit={handleSubmit} >
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

          <InputLabel htmlFor="select">学年（生徒検索のみ選択）</InputLabel>
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

          <InputLabel htmlFor="select">年齢（講師検索のみ選択）</InputLabel>
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

          <br></br>
         <Button type="submit" variant="contained" color="secondary">
             <div class="btn-link">
              <p class="text">検索</p>
             </div>
          </Button>

          <br></br>
        <Button variant="contained" color="primary">
             <Link to="/loginpage"class="btn-link" >
              <p class="text">ログインページへ</p>
            </Link>
          </Button>
           
          <br></br>
            <Button  onClick={signout} variant="contained" color="primary">
             <Link to="/loginpage"class="btn-link" >
              <p class="text">ログアウト</p>
            </Link>
          </Button>

        </form>
        </MediaQuery>　
      </body>
    </>
  );
};
export default Room;
