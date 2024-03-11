import { PropsWithChildren } from "react";

function OverlayBackground({ children }: PropsWithChildren) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 rounded-t-3xl sm:mt-[-50px] mt-[-20px] bg-white max-h-screen w-full p-5 shadow-inner">
      {children}
    </div>
  );
}

export default OverlayBackground;