import Profile from './Profile/Profile';
import userData from '../data/user';
import data from '../data/data'
import friends from '../data/friends'
import  StatisitcList  from './Statistics/Statistics';
import FrendListRender from './FriendList/FriendList';
import items from '../data/transactions'
import TransactionHistory from './TransactionHistory/TransactionHistory';
export const App = () => {

  return (
    <>  
    <Profile
    username={userData.username}
    tag={userData.tag}
    location={userData.location}
    avatar={userData.avatar}
    stats={userData.stats}
  />
  <StatisitcList title="Upload stats" stats={data} />
{/* <StatisitcList stats={data}/> */}
<FrendListRender friends={friends} />
<TransactionHistory items={items}/>


  </>
  );
 
};
