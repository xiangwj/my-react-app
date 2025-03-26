import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './router';
import { Link, useRoutes } from 'react-router-dom';
import Download from './views/download';
import { useSelector, shallowEqual } from 'react-redux';
import store, { useAppSelector, IRootSateType } from './store';
function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqual
  );
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/download">下载客户端</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
        <div>
          <h2>count::{count}</h2>
          <h2>message::{message}</h2>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <div>{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
