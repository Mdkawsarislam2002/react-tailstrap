import React, { useEffect, useState } from 'react';
interface AlertType {
  children?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
}

export const Alert = ({ children, variant }: AlertType) => {
  const [TheVariant, setTheVariant] = useState('');

  useEffect(() => {
    if (variant === 'primary') {
      setTheVariant('bg-blue-600');
    } else if (variant === 'secondary') {
    } else if (variant === 'success') {
      setTheVariant('bg-green-600');
    } else if (variant === 'danger') {
      setTheVariant('bg-red-600');
    } else if (variant === 'warning') {
      setTheVariant('bg-yellow-600');
    } else if (variant === 'info') {
      setTheVariant('bg-blue-800');
    } else if (variant === 'light') {
      setTheVariant('bg-gray-100');
    } else if (variant === 'dark') {
      setTheVariant('bg-slate-800');
    } else {
      setTheVariant('bg-rose-800');
    }
  }, [variant]);

  return (
    <div className={` ${TheVariant} py-4 px-2 rounded-md mx-2`}>{children}</div>
  );
};
