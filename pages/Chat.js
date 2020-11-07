import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
// import { AuthContext } from "../context/AuthService";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  message: {
    padding: "15px",
    margin: "15px",
  },
});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [profile, setProfile] = useState({});
  const [person, setPerson] = useState("");
  const classes = useStyles();
  const signout = () => {
    auth.signOut();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text: text,
      person: person,
      createdAt: new Date(),
    });
  };

  useEffect(() => {
    // firestoreからデータを取得する処理
    db.collection("messages").onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setMessages(data);
    });
  }, []);

  useEffect(async () => {
    let uid = auth.currentUser.uid;
    let doc = await db.collection("users").doc(uid).get();
    setProfile(doc.data());
  }, []);

  //   ！！！！！！！！！！！！！！！！！！！！！！！！！！！
  //   ！！！！！！！ここから表示！！！！！！！！！！！！！！
  //   ！！！！！！！！！！！！！！！！！！！！！！！！！！
  return (
    <>
      <h1>Room</h1>
      <p>{profile.username}さん、ようこそ！</p>

      {messages.map((message) => {
        return (
          <Card key={message.id} className={classes.message}>
            <Typography>ユーザー：{profile.username}</Typography>
            <Typography>テキスト：{message.text}</Typography>
            <Typography>To:{message.person}さん</Typography>
            <Typography>投稿日時:</Typography>
          </Card>
        );
      })}

      <form onSubmit={handleSubmit}>
        <TextField
          variant="filled"
          size="small"
          placeholder="メッセージを入力"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          variant="filled"
          size="small"
          placeholder="メッセージを入力"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary">
          送信
        </Button>
      </form>
      <Button onClick={signout} variant="contained">
        ログアウト
      </Button>
    </>
  );
};
export default Chat;
