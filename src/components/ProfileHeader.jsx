import PropTypes from "prop-types";
import ProfileImage from "./ProfileImage";
import ProfileDetails from "./ProfileDetails";

const ProfileHeader = ({ user }) => {
  const { fullname, location, profile_img } = user;
  return (
    <header>
      <ProfileImage profile_img={profile_img} />
      <h1>{fullname}</h1>
      <span>{location}</span>
      <ProfileDetails data={user?.data} />
    </header>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.object,
};

export default ProfileHeader;
