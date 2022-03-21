import React, { useState, useEffect } from "react";

function useGitFetch(username) {
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
    };

    fetchGithubUsers();
  }, [username]);

  return { user, error, loading };
}

export default useGitFetch;
