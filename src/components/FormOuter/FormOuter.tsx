import { PropsWithChildren } from "react";

function FormOuter({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-1 py-4 w-full">{children}</div>;
}

export default FormOuter;
