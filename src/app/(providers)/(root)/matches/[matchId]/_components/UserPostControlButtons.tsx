"use client";
import api from "@/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface controlButtonsType {
  label: string;
  onClick: () => void;
}

interface UserPostControlButtonsProps {
  matchId: string;
}

function UserPostControlButtons({ matchId }: UserPostControlButtonsProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await api.match.deleteMatch(matchId);
      toast.success("게시물이 삭제되었습니다.");
      router.replace("/");
      return response;
    } catch (error) {
      console.error("Match creation failed:", error);
    }
  };

  const controlButtons: controlButtonsType[] = [
    { label: "수정", onClick: () => router.push(`${matchId}/edit`) },
    {
      label: "삭제",
      onClick: () => handleDelete(),
    },
  ];

  return (
    <div className="flex items-center mb-5 justify-end gap-x-2 w-full">
      {controlButtons.map((button, i) => (
        <button
          key={`${button.label}-${i}`}
          type="button"
          className="text-neutral-70 font-medium rounded-full text-sm px-2 text-center cursor-pointer w-full border-2 border-natural-60  py-2 max-w-16 hover:bg-primary-100 hover:text-white hover:border-primary-100 transition-colors"
          onClick={button.onClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default UserPostControlButtons;
