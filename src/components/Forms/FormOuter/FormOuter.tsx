import { PropsWithChildren } from "react";

function FormOuter({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-1 w-full relative">{children}</div>;
}

export default FormOuter;
