import React, { FC } from "react";
interface Props {
  // any props that come into the component
  children: React.ReactNode;
}

export const Card: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-xl rounded-md bg-slate-800 shadow-lg max-h-fit py-4 px-4 mx-auto mb-4">
      {children}
    </div>
  );
};
