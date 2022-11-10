import React from 'react';
import { variantValue } from '../../lib/propsValue/variant';
import { AlertType } from '../../lib/type/Alert';

export const Alert = ({ children, variant }: AlertType) => {
  if (!variant) return <></>;
  const getVariant = variantValue[variant];
  return (
    <div className={` ${getVariant} py-4 px-2 rounded-md mx-2`}>{children}</div>
  );
};
