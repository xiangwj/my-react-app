import React, { memo } from 'react';
interface IpProps {
  children?: React.ReactNode;
}
const Template: React.FC<IpProps> = () => {
  return <div>Template</div>;
};

export default memo(Template);
