import { PropsWithChildren } from "react";

function OverlayBackground({ children }: PropsWithChildren) {
  return (
    <div className="transform rounded-t-3xl sm:mt-[-50px] mt-[-20px] bg-white w-full p-5 shadow-inner">
      {children}
    </div>
  );
}

export default OverlayBackground;
