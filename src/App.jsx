import "./App.css";
import { getUser } from "./services/getUser";
import { useState, useEffect } from "react";

import ProfileHeader from "./components/ProfileHeader";
import ImagesGrid from "./components/ImagesGrid";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((data) => setUser(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleRefetch = () => {
    setError(null);
    setIsLoading(true);
    getUser()
      .then((data) => setUser(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  if (error) {
    return (
      <div className="Error">
        <div>
          <h2>Ups, {error.error}</h2>{" "}
          <button className="Error-btn" onClick={handleRefetch}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading ? <ProfileHeaderSkeleton /> : <ProfileHeader user={user} />}
      <ImagesGrid isLoading={isLoading} images={user?.images} />
    </>
  );
}

const ProfileHeaderSkeleton = () => {
  return (
    <header className="ProfileHeaderSkeleton">
      <div className="ProfileHeaderSkeleton-img"></div>
      <div className="ProfileHeaderSkeleton-fullname"></div>
      <div className="ProfileHeaderSkeleton-location"></div>
      <div className="ProfileHeaderSkeleton-details">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default App;
