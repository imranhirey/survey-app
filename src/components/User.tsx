import { FC } from "react";
import { PencilAltIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { Card } from "./UI/Card";
import styles from "./User.module.css";
interface Props {
  user: any;
  deleteUser: any;
  onEdit: any;
}
const User: FC<Props> = ({ user, deleteUser, onEdit: editUser }) => {
  const { fullname, email, age, username } = user;

  const handleDelete = () => {
    deleteUser(user);
  };
  const handleEdit = () => {
    editUser(user);
  };
  return (
    <div className="font-poppins">
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <div id="name👇" className={styles.contentControl}>
              <h5 className="text-white">{fullname}</h5>
              <span className={styles.username}>{username}</span>
            </div>
            <div id="email👇">
              <h5 className="text-white my-1">{email}</h5>
              <span className={styles.age}>{age}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <PencilAltIcon
                className="h-6 w-6 text-white cursor-pointer"
                onClick={handleEdit}
              />
            </div>
            <div>
              <TrashIcon
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default User;
