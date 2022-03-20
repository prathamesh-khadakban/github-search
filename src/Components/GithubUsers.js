import React, { useState, useEffect } from "react";

function GithubUsers() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <h2>Find GitHub User</h2>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </form>
      <div className="DisplayContent">{user}</div>
    </div>
  );
}

export default GithubUsers;
