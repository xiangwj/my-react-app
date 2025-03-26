import React, { memo } from 'react';
import ts from 'typescript';
interface IpProps {
  children?: React.ReactNode;
}
const Mine: React.FC<IpProps> = () => {
  return <div>Mine</div>;
};

export default memo(Mine);
