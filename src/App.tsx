import React, { useEffect, useState } from "react";
import AddPerson from "./components/AddPerson";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import UserLists from "./components/UserLists";

function App() {
  const [users, setUsers] = useState([]);
  const [editPerson, setEditPerson] = useState({
    item: {},
    edit: false,
  });
  // * Add Person
  const getUsers = (data: any) => {
    setUsers((prevState): any => {
      return [data, ...prevState];
    });
  };
  // * delete Person
  const deleteUsers = (data: Object) => {
    setUsers((prevState): any => {
      const delUser = prevState.filter((user) => user !== data);
      return delUser;
    });
  };

  // TODO: Edit User .........?
  const editUser = (item: any) => {
    setEditPerson({
      item,
      edit: true,
    });
  };
  //console.log(editPerson);
  const updatePerson = (id: string, updItem: any) => {
    setUsers(
      users.map((item: any) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );
  };

  return (
    <div className="bg-slate-800 w-screen max-h-fit h-screen overflow-x-hidden">
      <AddPerson
        onGetUsers={getUsers}
        onEdited={editPerson}
        onUpdate={updatePerson}
      />
      <UserLists
        onAddUser={users}
        onEditUser={editUser}
        onDelete={deleteUsers}
      />
      <ColorModeSwitcher />
    </div>
  );
}

export default App;
