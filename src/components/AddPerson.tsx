import { useEffect, useState } from "react";
import { Card } from "./UI/Card";
import styles from "./AddPerson.module.css";
import { Button } from "./UI/Button";
import ErrorModal from "./Error/ErrorModal";
import { v4 as uuidv4 } from "uuid";

// imports ☝️☝️
const AddPerson = ({ onGetUsers, onEdited, onUpdate }: any) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (fullname.trim().length <= 0) {
      return setError("Oops, type your fullname and then submit the form😧");
    }
    if (username.trim().length <= 0) {
      return setError("Oops, type your username and then submit the form😧");
    }
    if (email.trim().length <= 0) {
      return setError("Oops, We don't really accept empty field.😡😧");
    }
    if (!email.includes("@")) {
      return setError(
        "Oops, type your valid email address and then submit the form😧"
      );
    }
    if (age <= 15 || age >= 60) {
      return setError(
        "Oops, your age must be between 15 and 60, to submit the form.😧"
      );
    }
    const id = uuidv4();
    const data = {
      id,
      fullname,
      username,
      email,
      age,
    };
    if (onEdited.edit == true) {
      onUpdate(onEdited.item.id, data);
    } else {
      onGetUsers(data);
    }

    // reset all feilds
    setFullname("");
    setUsername("");
    setEmail("");
    setAge(0);
  };

  useEffect(() => {
    if (onEdited.edit == true) {
      setFullname(onEdited.item.fullname);
      setUsername(onEdited.item.username);
      setEmail(onEdited.item.email);
      setAge(onEdited.item.age);
    }
  }, [onEdited]);

  const closeModal = () => {
    setError("");
  };
  return (
    <div className="pt-4 z-10">
      {" "}
      {error ? <ErrorModal error={error} closeError={closeModal} /> : ""}
      <Card>
        <div className={styles.addPerson}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.inputLabel}>
                Full Name
              </label>
              <input
                type="text"
                className={styles.inputControl}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.inputLabel}>
                Username
              </label>
              <input
                type="text"
                className={styles.inputControl}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email Address
              </label>
              <input
                type="text"
                className={styles.inputControl}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="age" className={styles.inputLabel}>
                Age
              </label>
              <input
                type="number"
                className={styles.inputControl}
                value={age}
                onChange={(e) => setAge(e.target.valueAsNumber)}
              />
            </div>
            <div className={styles.btnContainer}>
              <Button>Add</Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default AddPerson;
