import { PropsWithChildren } from "react";

interface HeadingProps {
  className?: string;
}

function Heading({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <h2
      className={`text-2xl w-full font-bold text-natural-90 py-2 ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
}

export default Heading;
