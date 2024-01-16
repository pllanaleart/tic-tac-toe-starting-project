import { useState } from "react";

function Player({ name, symbol, isActive, handlePlayerName }) {
  const [userName, setUserName] = useState(name);
  const [isEdited, setIsEdited] = useState(false);

  let playerName = <span className="player-name">{userName}</span>;
  function handleEditClick() {
    setIsEdited(!isEdited);
    if (isEdited) {
      handlePlayerName(symbol, userName);
    }
  }
  if (isEdited) {
    playerName = (
      <input type="text" required value={userName} onChange={handleUserName} />
    );
  }

  function handleUserName(event) {
    setUserName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdited ? "Save" : "Edit"}</button>
    </li>
  );
}
export default Player;
