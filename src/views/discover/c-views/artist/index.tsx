import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Artist: React.FC<IpProps> = () => {
  return <div>Artist</div>;
};

export default memo(Artist);
