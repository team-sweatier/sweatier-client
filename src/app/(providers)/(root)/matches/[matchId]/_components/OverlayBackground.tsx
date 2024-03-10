import { PropsWithChildren } from "react";

function OverlayBackground({ children }: PropsWithChildren) {
  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 rounded-top-lg shadow-md p-6 bg-red-500 h-screen w-full">
      {children}
    </div>
  );
}

export default OverlayBackground;
