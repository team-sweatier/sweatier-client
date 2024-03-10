import { PropsWithChildren } from "react";

function OverlayBackground({ children }: PropsWithChildren) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 rounded-t-3xl sm:mt-[-50px] mt-[-20px] shadow-md bg-white h-screen w-full p-5 z-20 pb-70 overflow-auto">
      {children}
    </div>
  );
}

export default OverlayBackground;
