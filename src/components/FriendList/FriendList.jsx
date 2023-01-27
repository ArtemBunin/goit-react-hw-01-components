import PropTypes from 'prop-types';
import FrendListItem from 'components/FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css'
function FrendListRender({friends}) {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
         <FrendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}
FrendListRender.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FrendListRender;
