import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Ranking: React.FC<IpProps> = () => {
  return <div>Ranking</div>;
};

export default memo(Ranking);
