import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  // useEffectとは
  // コールバック関数の実行タイミング調整役
  //   - 第二引数の配列の中に入った変数が切り替わるタイミングで実行
  //   - 初回描写後に一度実行
  useEffect(() => {
    auth.onAuthStateChanged((udata) => {
      // userがログインしていたらuser情報が、していなければnullが入る
      setUser(udata);

      // コレクションそのものは取得できるか？
      let collection = db.collection("users");
      collection.get().then((data) => {
        console.log("collection", data.docs);
      });

      let doc = db.collection("users").doc();
      doc
        .get()
        .then((data) => {
          console.log("Id:", udata.uid);
          console.log("Data:", data.data());
          //setProfile(data.data());
        })

        .catch(() => {
          console.log("データがありません！！！");
        });
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
