import PropTypes from "prop-types";

const ProfileDetails = ({ data }) => {
  const { posts, followers, following } = data;
  return (
    <ul>
      <li>
        <h2>{posts}</h2>
        <span>posts</span>
      </li>
      <li>
        <h2>{followers}</h2>
        <span>Followers</span>
      </li>
      <li>
        <h2>{following}</h2>
        <span>Following</span>
      </li>
    </ul>
  );
};

ProfileDetails.propTypes = {
  data: PropTypes.object,
};

export default ProfileDetails;
