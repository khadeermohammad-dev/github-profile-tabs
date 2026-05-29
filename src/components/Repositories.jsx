import { useEffect, useState } from "react";

function Repositories({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    setLoading(true);

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setRepos([]);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading repositories...</p>;

  return (
    <div className="section-card">
      <h2>Repositories</h2>

      {repos.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        <div className="repo-list">
          {repos.map((repo) => (
            <div className="repo-card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>⭐ Stars: {repo.stargazers_count}</p>
              <p>Language: {repo.language || "Not specified"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Repositories;
