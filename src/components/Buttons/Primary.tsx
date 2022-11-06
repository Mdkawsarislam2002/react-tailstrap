import React from 'react';

const Primary = ({ title = 'primary' }: { title: string }) => {
  return (
    <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
      {title}
    </button>
  );
};

export default Primary;
