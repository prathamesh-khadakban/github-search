import useGitFetch from "../Hooks/useGitFetch";
const GithubUser = ({ username }) => {
  const [user, error, loading] = useGitFetch(username);

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
