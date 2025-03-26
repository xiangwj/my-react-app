import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Album: React.FC<IpProps> = () => {
  return <div>Album</div>;
};

export default memo(Album);
