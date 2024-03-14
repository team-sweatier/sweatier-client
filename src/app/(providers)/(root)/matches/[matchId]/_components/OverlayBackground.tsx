import { PropsWithChildren } from "react";

function OverlayBackground({ children }: PropsWithChildren) {
  return (
    <div className="transform rounded-t-3xl sm:mt-[-50px] mt-[-20px] bg-white w-full p-5 shadow-lg shadow-slate-900/20 shadow-t-2 shadow-r-[3px]">
      {children}
    </div>
  );
}

export default OverlayBackground;
