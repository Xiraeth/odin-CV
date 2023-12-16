import { useState } from "react";
import "../style.css";

export default function Personal() {
  const [isExpanded, setExpansion] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const toggleExpand = () => {
    setExpansion(!isExpanded);
  };

  const toggleEditMode = () => {
    setEditing(!isEditing);
  };

  const exitEditMode = () => {
    setEditing(false);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <i
        className="fa-solid fa-circle-chevron-down toggleExpand"
        onClick={toggleExpand}
      ></i>
      <h1>Personal Info</h1>
      {!isExpanded ? (
        <>
          <p></p>
        </>
      ) : (
        <>
          <form>
            <input
              type="text"
              placeholder="First name"
              autoComplete="off"
              onFocus={toggleEditMode}
              onBlur={toggleEditMode}
              onChange={updateFirstName}
            />
            <input
              type="text"
              placeholder="Last name"
              autoComplete="off"
              onFocus={toggleEditMode}
              onBlur={toggleEditMode}
              onChange={updateLastName}
            />
            <input
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              onFocus={toggleEditMode}
              onBlur={toggleEditMode}
              onChange={updateEmail}
            />
            <input
              type="number"
              placeholder="Phone number"
              autoComplete="off"
              onFocus={toggleEditMode}
              onBlur={toggleEditMode}
              onChange={updatePhone}
            />
          </form>
        </>
      )}
    </>
  );
}
