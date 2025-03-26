import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Recommand: React.FC<IpProps> = () => {
  return <div>Recommand</div>;
};

export default memo(Recommand);
