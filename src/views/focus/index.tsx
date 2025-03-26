import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Focus: React.FC<IpProps> = () => {
  return <div>Focus</div>;
};

export default memo(Focus);
