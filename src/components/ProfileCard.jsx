function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <aside className="profile-card">
      <img src={user.avatar_url} alt={user.login} />

      <h2>{user.name || user.login}</h2>
      <p className="username">@{user.login}</p>

      <p className="bio">{user.bio || "No bio available"}</p>

      <div className="stats">
        <span>{user.followers} followers</span>
        <span>{user.following} following</span>
      </div>

      <button className="profile-btn">View Profile</button>
    </aside>
  );
}

export default ProfileCard;
