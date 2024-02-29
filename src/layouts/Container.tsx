import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className="max-w-[1280px] mx-auto px-3 xl:px-0">{children}</div>;
};

export default Container;
