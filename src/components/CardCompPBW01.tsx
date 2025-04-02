import React from "react";

type CardCompPBW01Props = {
  id?: string;
  isDarkMode?: boolean;
  children?: React.ReactNode;
};

const CardCompPBW01: React.FC<CardCompPBW01Props> = ({ id, isDarkMode = false, children }) => {
  return (
    <div
      id={id}
      className={`grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 ${isDarkMode ? 'dark' : 'light'}`}
    >
      {children}
    </div>
  );
};

export default CardCompPBW01;
