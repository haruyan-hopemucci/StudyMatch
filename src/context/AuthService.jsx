import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((udata) => {
  
      setUser(udata);

      let collection = db.collection("users");
      collection.get().then((data) => {
        console.log("collection", data.docs);
      });

      let doc = db.collection("users").doc();
      doc
        .get()
        .then((data) => {
          console.log("Id:", udata.uid);
        })

        .catch(() => {
          console.log("データがありません！！！");
        });
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
