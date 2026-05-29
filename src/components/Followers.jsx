import { useEffect, useState } from "react";

function Followers({ username }) {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    setLoading(true);

    fetch(`https://api.github.com/users/${username}/followers`)
      .then((res) => res.json())
      .then((data) => {
        setFollowers(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setFollowers([]);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading followers...</p>;

  return (
    <div className="section-card">
      <h2>Followers</h2>

      {followers.length === 0 ? (
        <p>No followers found.</p>
      ) : (
        <div className="followers-list">
          {followers.map((follower) => (
            <div className="follower-card" key={follower.id}>
              <img src={follower.avatar_url} alt={follower.login} width="60" />
              <p>{follower.login}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Followers;
