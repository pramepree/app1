import React, { useState } from 'react';
import { userContext } from './context';
import Content2 from './context-content';
import Header2 from './context-header2';

export default function App() {
  let [user, setUser] = useState(''); // Fix: use useState instead of useConState
  return (
    <userContext.Provider value={[user, setUser]}>
      <Header2 />
      <Content2 />
    </userContext.Provider>
  );
}