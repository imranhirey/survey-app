import React, { FC } from "react";

interface Props {
  children: string;
}

export const Button: FC<Props> = ({ children }) => {
  return (
    <button type="submit" className="bg-slate-400 px-10 py-2 rounded">
      {children}
    </button>
  );
};
