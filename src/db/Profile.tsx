"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  if (session.data?.user) {
    return <div>From client: user is signed In</div>;
  }
  return <div>From client: user is not signed In</div>;
};

export default Profile;
