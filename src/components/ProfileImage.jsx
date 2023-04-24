import PropTypes from "prop-types";

const ProfileImage = ({ profile_img }) => {
  return <img className="ProfileImage" src={profile_img} alt="" />;
};

ProfileImage.propTypes = {
  profile_img: PropTypes.string,
};

export default ProfileImage;
