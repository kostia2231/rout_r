import React from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userId, username } = useParams();

  return (
    <div>
      <h1>{username}</h1>
      <p>USER ID: {userId}</p>
    </div>
  );
}
