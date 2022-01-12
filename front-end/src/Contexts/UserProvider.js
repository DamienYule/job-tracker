import React, { useState, useEffect, createContext } from "react";
import { auth } from "../Services/Firebase";
export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          if(user.uid === "Cf0scKx42QQVUgGn42co4hGfG7H3"){
            const {  email, uid } = user
            await setUser({
              displayName:"Administrator",
              email,
              uid,
            })
          }else if(user.displayName){
            const { displayName, email, photoURL, uid } = user;
            await setUser({
              displayName,
              email,
              photoURL,
              uid,
            });
          }else{
            const {  email, uid } = user
            await setUser({
              displayName:email,
              email,
              uid,
            })
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
