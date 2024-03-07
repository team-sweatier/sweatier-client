import { PropsWithChildren } from "react";

function FormOuter({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-1 py-5 w-full">{children}</div>;
}

export default FormOuter;
