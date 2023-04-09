import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NavigationBar } from "../../../components/NavigationBar";
import styles from "@/styles/Home.module.css";

export default withPageAuthRequired(function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <main className={styles.main}>
      <NavigationBar />
      <h1>Profil</h1>
      {user && (
        <div>
          <img src={user.picture ?? ""} alt={user.name ?? ""} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </main>
  );
});
