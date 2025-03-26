import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Songs: React.FC<IpProps> = () => {
  return <div>Songs</div>;
};

export default memo(Songs);
