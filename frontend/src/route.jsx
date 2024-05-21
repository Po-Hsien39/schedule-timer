import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import { socket } from './socket';
import { useEffect, useState } from 'react';
import Counter from './components/Counter';

const Main = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log('isConnected:', isConnected);
  }, [isConnected]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    socket.on('connect', onConnect);

    return () => {
      socket.off('connect', onConnect);
    };
  }, []);

  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/:id" element={<Counter />}></Route>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="*" element={<Welcome />}></Route>
    </Routes>
  );
};

export default Main;
