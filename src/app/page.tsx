"use client"
import { useEffect, useState } from "react";
import LoginPage from "./login/login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./home/home";

export default function Page() {
  const [islogin, setIslogin] = useState(false)
  const [isloading, setIsloading] = useState(true)
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIslogin(true)
        console.log(uid)
        setIsloading(false)
      } else {
        console.log("logout")
      }

    });
    return () => unsubscribe();
  }, [])

  if (isloading) {
    return <div>Loading....</div>
  }

  return (
    <div>
      {islogin ?
        <Home />
        :
        <LoginPage />
      }
    </div>
  );
}
