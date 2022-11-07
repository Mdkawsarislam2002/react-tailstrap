import React, { useEffect, useState } from 'react';
interface ButtonType {
  children: string;
  cStyle?: string;
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

export const Button = ({ children, variant, cStyle }: ButtonType) => {
  const [TheVariant, setTheVariant] = useState('');

  useEffect(() => {
    if (variant === 'primary') {
      setTheVariant('bg-blue-600');
    } else if (variant === 'secondary') {
      setTheVariant('bg-gray-400');
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
    <button
      className={`${TheVariant}  px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ${cStyle}`}
    >
      {children}
    </button>
  );
};
