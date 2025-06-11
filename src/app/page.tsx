"use client"
import LoginPage from "./login/login";
import { useEffect } from "react";
import { GetData } from "@/services/fetch-data-services";
export default function Home() {
  useEffect(() => {
    GetData()
  }, [])
  return (
    <div>
      <LoginPage />
    </div>
  );
}
