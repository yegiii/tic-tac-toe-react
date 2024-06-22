import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [palyerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // wrong code !!!!
    // setIsEditing(!isEditing); // => schedules a state update to true
    // setIsEditing(!isEditing); // => schedules a state update to false

    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, palyerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  //   let btnCaption = "Edit";

  let editablePlayerName = <span className="player-name">{palyerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        value={palyerName}
        onChange={handleChange}
        type="text"
        required
      ></input>
    );
    //  btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
