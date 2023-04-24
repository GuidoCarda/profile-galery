import "./App.css";
import { getUser } from "./services/getUser";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

  if (error) return <ErrorPage error={error} onClick={handleRefetch} />;

  return (
    <>
      {isLoading ? <ProfileHeaderSkeleton /> : <ProfileHeader user={user} />}
      <ImagesGrid isLoading={isLoading} images={user?.images} />
    </>
  );
}

const ErrorPage = ({ error, onClick }) => {
  return (
    <div className="Error">
      <div>
        <h2>Ups, {error.error}</h2>{" "}
        <button className="Error-btn" onClick={onClick}>
          Retry
        </button>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object,
  onClick: PropTypes.func,
};

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
