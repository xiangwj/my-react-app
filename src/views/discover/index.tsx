import React, { memo } from 'react';
import { Link, Outlet } from 'react-router-dom';
interface IpProps {
  children?: React.ReactNode;
}
const Discover: React.FC<IpProps> = () => {
  return (
    <div>
      Discover
      <div>
        <Link to="/discover/recommand">推荐</Link>
        <Link to="/discover/ranking">排行</Link>
        <Link to="/discover/songs">歌曲</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/djradio">电台</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default memo(Discover);
