import { PropsWithChildren } from "react";

function FormOuter({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-1 py-5">{children}</div>;
}

export default FormOuter;
