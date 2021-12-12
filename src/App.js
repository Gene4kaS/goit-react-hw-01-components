// App.js
import './App.css';
import React from 'react';
import Profile from './сomponents/Profile/Profile';
import Statistics from './сomponents/Statistics/Statistics';
import FriendList from './сomponents/FriendList/FriendList';
import TransactionHistory from './сomponents/TransactionHistory/TransactionHistory';
import user from './сomponents/Profile/user.json';
import data from './сomponents/Statistics/data.json';
import friends from './сomponents/FriendList/friends.json';
import transactions from './сomponents/TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
