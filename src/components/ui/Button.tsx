import { ReactNode } from "react";

const Button = ({ children, className }: { children: ReactNode; className: string }) => {
  return (
    <button className={`text-lg font-poppins  py-3 w-full  tracking-wider ${className}`}>
      {children}
    </button>
  );
};

export default Button;
