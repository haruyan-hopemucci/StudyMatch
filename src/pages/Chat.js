import React, { useState, useEffect } from "react";
import "../assets/styles/chat.css";
import { auth, db } from "../config/firebase";
import {
  Button,
  Card,
  Typography,
  TextField,
  Breadcrumbs,
} from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const [profile, setProfile] = useState({});
  const [selectUser, setSelectUser] = useState({});
  const { selectUid } = useParams();
  const signout = () => {
    auth.signOut();
  };

  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーー過去チャットをを表示する処理ーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const func = async () => {
    let uid = auth.currentUser.uid;
    const chatData = [];
    const data1 = db
      .collection("messages")
      .where("senderUid", "==", uid)
      .where("receiverUid", "==", selectUid)
      .orderBy("createdAt")
      .get();
    (await data1).forEach((postDoc) => {
      chatData.push(postDoc.data());
    });
    const data2 = db
      .collection("messages")
      .where("senderUid", "==", selectUid)
      .where("receiverUid", "==", uid)
      .orderBy("createdAt")
      .get();
    (await data2).forEach((postDoc) => {
      chatData.push(postDoc.data());
    });

    chatData.sort(function (a, b) {
      return a.createdAt > b.createdAt ? 1 : -1;
    });
    console.log(chatData);
    setMessages(chatData);
  };

  useEffect(() => {
    func();
  }, []);

  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーテキストを送信する処理ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const handleSubmit = (e) => {
    e.preventDefault();
    let uid = auth.currentUser.uid;
    if (content.length === 0) {
    return　alert("文字を入力してください");  
    }
    db.collection("messages")
      .add({
        senderUid: uid,
        receiverUid: selectUid,
        senderUsername: profile.username,
        content: content,
        createdAt: getNowDateWithString(),
      })
      .then(() => {
        setContent("");
        func();
      });
  };
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーテキスト送信時間を取得する処理ーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const getNowDateWithString = () => {
    const dt = new Date();
    const m = ("00" + (dt.getMonth() + 1)).slice(-2);
    const d = ("00" + dt.getDate()).slice(-2);
    const h = ("00" + dt.getHours()).slice(-2);
    const t = ("00" + dt.getMinutes()).slice(-2);
    const s = ("00" + dt.getSeconds()).slice(-2);
    const result = m + "月" + d + "日" + h + "時" + t + "分" + s + "秒";
    return result;
  };
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーログインユーザー情報を取得する処理ーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  useEffect(async () => {
    let uid = auth.currentUser.uid;
    let doc = await db.collection("users").doc(uid).get();
    setProfile(doc.data());
  }, []);
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーチャット相手の情報を取得する処理ーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  useEffect(async () => {
    let doc = await db.collection("users").doc(selectUid).get();
    console.log(doc.data());
    setSelectUser(doc.data());
  }, []);
 
  {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『Header(PCサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
  return (
    <>
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
  // ーーーーーーーーーーーーーー『Header(タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーー
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
  // ーーーーーーーーーーーーーー『Header(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <MediaQuery query="(max-width:590px)">
        <header class="sp-header">
          <h1 class="sp-title">Study Match</h1>
          <Breadcrumbs    class="icon" variant="contained" color="primary">
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
  // ーーーーーーーーーーーーーー『チャット画面(PC・タブレットサイズ)』ーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

  <MediaQuery query="(min-width:590px)">
      <h2>{selectUser.username}さんとのチャットルーム</h2>
      <br></br>
      <div class="container">
        <ul class="messages">
          {messages.map((message) => {
            if (profile.username === message.senderUsername) {
              return (
                <div class="right">
                  <Card class="card" key={message.id}>
                    <Typography class="text">{message.content}</Typography>
                  </Card>
                </div>
              );
            } else {
              return (
                <div class="left">
                  <Card class="card" key={message.id}>
                    <Typography class="text">{message.content}</Typography>
                  </Card>
                </div>
              );
            }
          })}
        </ul>
      </div>
      <form onSubmit={handleSubmit} class="pc-form">
        <TextField
          variant="filled"
          size="small"
          placeholder="メッセージを入力"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button type="submit" variant="contained" color="secondary">
          送信
        </Button>
      </form>

      <br/>

      <Link to="/room" class="link">
        <Button variant="contained" color="primary">
          検索画面に戻る
        </Button>
      </Link>

      <Button variant="contained" color="primary" onClick={signout}>
        ログアウト
      </Button>
      </MediaQuery>


     {/* // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーー『チャット画面(スマホサイズ)』ーーーーーーーーーーーーーーーーーーーー
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}


  <MediaQuery query="(max-width:590px)">
    <h2>{selectUser.username}さんとのチャットルーム</h2>
      <br></br>
      <div class="container">
        <ul class="messages">
          {messages.map((message) => {
            if (profile.username === message.senderUsername) {
              return (
                <div class="right">
                  <Card class="card" key={message.id}>
                    <Typography class="text">{message.content}</Typography>
                  </Card>
                </div>
              );
            } else {
              return (
                <div class="left">
                  <Card class="card" key={message.id}>
                    <Typography class="text">{message.content}</Typography>
                  </Card>
                </div>
              );
            }
          })}
        </ul>
      </div>
      <form onSubmit={handleSubmit} class="form">
        <TextField
          variant="filled"
          size="small"
          placeholder="メッセージを入力"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button type="submit" variant="contained"  class="sp-submit">
          送信
        </Button>
      </form>

       <br/>

      <Link to="/room" class="link">
        <Button variant="contained" class="sp-btn">
          検索画面に戻る
        </Button>
      </Link>

      <Button variant="contained" class="sp-btn" onClick={signout}>
        ログアウト
      </Button>
      </MediaQuery>
    </>
  );
};
export default Chat;
