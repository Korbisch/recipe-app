import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import styles from "@/styles/Home.module.css";
import { NavBar } from "../../../components/NavBar";
import Image from "next/image";

export default withPageAuthRequired(function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className={styles.main}>
      <NavBar />
      <h1>Profil</h1>
      {user && (
        <div>
          <Image src={user.picture ?? ""} alt={user.name ?? ""} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </main>
  );
});
