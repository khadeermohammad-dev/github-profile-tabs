import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import Tabs from "./components/Tabs";
import Overview from "./components/Overview";
import Repositories from "./components/Repositories";
import Followers from "./components/Followers";
import { tabs, defaultUser } from "./utils/mockData";
import "./App.css";

function App() {
  const [username, setUsername] = useState(defaultUser);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (name) => {
    setLoading(true);
    setError("");
    setActiveTab("overview");

    try {
      const res = await fetch(`https://api.github.com/users/${name}`);

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUser(data);
      setUsername(name);
    } catch (err) {
      setUser(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(defaultUser);
  }, []);

  return (
    <div className="app">
      <div className="topbar">
        <h1>GitHub Profile</h1>
        <SearchBar onSearch={fetchUser} />
      </div>

      {loading && <p className="message">Loading profile...</p>}
      {error && <p className="error">{error}</p>}

      {user && (
        <div className="github-layout">
          <ProfileCard user={user} />

          <main className="content">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {activeTab === "overview" && <Overview user={user} />}
            {activeTab === "repositories" && (
              <Repositories username={username} />
            )}
            {activeTab === "followers" && <Followers username={username} />}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
