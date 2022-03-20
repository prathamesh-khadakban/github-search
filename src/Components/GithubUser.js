import React, { useState, useEffect } from "react";

const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //create function always

    const fetchGithubUsers = async () => {
      setLoading(true);
      try {
        const data = await fetch(`https://api.github.com/users/${username}`);
        const response = await data.json();
        console.log(response);
        setUser(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
      return { user, error, loading };
    };

    fetchGithubUsers();
  }, [username]);

  return (
    <div>
      {loading && <p>Please Wait...</p>}
      {error && <p>{error}</p>}
      {user && (
        <ul>
          <li>{user.id}</li>
        </ul>
      )}
    </div>
  );
};

export default GithubUser;
