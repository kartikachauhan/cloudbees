import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            button
            component={Link}
            to={`/user/${user.login}`}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar_url} alt={user.login} />
            </ListItemAvatar>
            <ListItemText primary={`${user.login}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserListPage;
