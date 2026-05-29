function Overview({ user }) {
  return (
    <div className="section-card">
      <h2>Overview</h2>

      <p>
        <strong>Username:</strong> {user.login}
      </p>
      <p>
        <strong>Name:</strong> {user.name || "No name available"}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio || "No bio available"}
      </p>
      <p>
        <strong>Location:</strong> {user.location || "No location available"}
      </p>
      <p>
        <strong>Public Repos:</strong> {user.public_repos}
      </p>
      <p>
        <strong>Followers:</strong> {user.followers}
      </p>
      <p>
        <strong>Following:</strong> {user.following}
      </p>
    </div>
  );
}

export default Overview;
