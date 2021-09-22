import React from "react";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </>
  );
};

export default UserList;
