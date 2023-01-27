import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css'
const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsList = [
    { label: 'Followers', quantity: stats.followers },
    { label: 'Views', quantity: stats.views },
    { label: 'Likes', quantity: stats.likes },
  ];

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar}/>
        <p className={css.name}>{username}</p>
        <p className={css.location}>{location}</p>
        <p className={css.tag}>{tag}</p>
      </div>

      <ul className={css.stats}>
        {statsList.map(({ label, quantity }) => (
          <li className={css.statsItem} key={label}>
            <span className={css.label}>{label}</span>
            <span className={css.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
export default Profile;
