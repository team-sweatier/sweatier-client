import { useModalStore } from "@/store";
import { PropsWithChildren, useEffect } from "react";

interface ModalProps {
  className?: string;
}

function Modal({ children, className }: PropsWithChildren<ModalProps>) {
  const modal = useModalStore();

  useEffect(() => {
    // 모달이 열릴 때 body 스크롤을 막는다
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트될 때 원래 스크롤 상태로 복원한다
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []); // 컴포넌트 마운트 및 언마운트 시에만 실행

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 "
      onClick={modal.close}
    >
      <div
        className={`bg-white rounded-2xl min-w-80 sm:w-full max-w-[370px] px-4 py-8 ${
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
