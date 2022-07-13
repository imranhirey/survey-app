import React from "react";
import { Card } from "./UI/Card";
import User from "./User";

const UserLists = ({ onAddUser: users, onDelete, onEditUser }: any) => {
  const deleteUser = (user: Object) => {
    onDelete(user);
  };
  const editUser = (user: Object) => {
    onEditUser(user);
  };
  return (
    <Card>
      {users.map((user: Array<string>, index: number) => (
        <User
          user={user}
          deleteUser={deleteUser}
          onEdit={editUser}
          key={index}
        />
      ))}
    </Card>
  );
};

export default UserLists;
