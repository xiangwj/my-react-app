import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Download: React.FC<IpProps> = () => {
  return <div>Download</div>;
};

export default memo(Download);
