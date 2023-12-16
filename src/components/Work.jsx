import { useState } from "react";
import "../style.css";

export default function Personal() {
  const [isExpanded, setExpansion] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [since, setSince] = useState("");

  const toggleExpand = () => {
    setExpansion(!isExpanded);
  };

  const toggleEditMode = () => {
    setEditing(!isEditing);
  };

  return (
    <>
      <i
        className="fa-solid fa-circle-chevron-down toggleExpand"
        onClick={toggleExpand}
      ></i>
      <h1>Work Info</h1>
      {!isExpanded ? (
        <>
          <p></p>
        </>
      ) : (
        <>
          <form>
            <input
              type="text"
              placeholder="Current job"
              autoComplete="off"
              onFocus={toggleEditMode}
              onBlur={toggleEditMode}
            />
            <div className="workTimePeriod">
              <label htmlFor="since">
                Since:
                <input type="date" id="since" />
              </label>
              <label htmlFor="until">
                Until:
                <input type="date" id="until" />
              </label>
            </div>
            <input
              type="text"
              placeholder="Previous work experience"
              autoComplete="off"
              onFocus={toggleEditMode}
              onBlur={toggleEditMode}
            />
          </form>
        </>
      )}
    </>
  );
}
