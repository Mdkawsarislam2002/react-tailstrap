import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { AlertType } from '../../lib/type/Alert';
import { variantValue } from '../../lib/propsValue/variant';

export const DismissibleAlert = ({ children, variant }: AlertType) => {
  const [IsDismiss, setIsDismiss] = useState(false);
  if (!variant) return <></>;
  const getVariant = variantValue[variant];
  console.log(getVariant);
  return (
    <>
      <AnimatePresence>
        {!IsDismiss && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            className={` p-4 ${getVariant}`}
          >
            <div className="flex justify-end">
              <svg
                onClick={() => {
                  setIsDismiss(true);
                }}
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>

            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
