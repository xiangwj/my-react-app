import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const DjRadio: React.FC<IpProps> = () => {
  return <div>DjRadio</div>;
};

export default memo(DjRadio);
