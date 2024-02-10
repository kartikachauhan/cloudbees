import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Avatar } from "@mui/material";

const UserDetailsPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div>
      {user && (
        <div>
          <Typography variant="h4">{user.name}</Typography>
          <Avatar src={user.avatar_url} alt={user.login} />
          <Typography variant="body1">Username: {user.login}</Typography>
          <Typography variant="body1">Company: {user.company}</Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          <Typography variant="body1">Followers: {user.followers}</Typography>
          <Typography variant="body1">Following: {user.following}</Typography>
          <Typography variant="body1">
            Public Repositories: {user.public_repos}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
