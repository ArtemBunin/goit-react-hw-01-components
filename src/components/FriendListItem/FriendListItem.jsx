import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css'
import clsx from 'clsx';
function FrendListItem({avatar,name,isOnline}){

    return (
        <li className={css.item}>
        <span className={clsx(css.status,isOnline && css.true)}>{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>  
    )

}
FrendListItem.propTypes = {
  avatar:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FrendListItem;