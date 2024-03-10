import { PropsWithChildren } from "react";

function Heading({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl font-bold text-natural-90 py-2">{children}</h2>
  );
}

export default Heading;
