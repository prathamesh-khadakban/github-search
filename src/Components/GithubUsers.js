import React, { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
  const [userName, setUserName] = useState();
  return (
    <div>
      <h2>Find GitHub User</h2>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </form>
      <div className="DisplayContent">
        {userName && <GithubUser username={userName} />}
      </div>
    </div>
  );
}

export default GithubUsers;
