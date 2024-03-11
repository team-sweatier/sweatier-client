import { useModalStore } from "@/store";
import { PropsWithChildren } from "react";

interface ModalProps {
  className?: string;
}

function Modal({ children, className }: PropsWithChildren<ModalProps>) {
  const modal = useModalStore();
  const handleClickBackdrop = () => {
    modal.close();
  };

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 "
      onClick={handleClickBackdrop}
    >
      <div
        className={`bg-white rounded-2xl w-80 sm:w-full max-w-[400px] px-4 py-8 ${
          className || ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
