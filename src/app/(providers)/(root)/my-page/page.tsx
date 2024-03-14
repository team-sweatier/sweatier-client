"use client";

import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useModalStore } from "@/store";
import { useRouter } from "next/navigation";
import ButtonToHistory from "./_components/ButtonToHistory";
import MyProfileSection from "./_components/MyProfileSection";
import MyTierSection from "./_components/MyTierSection";
import TiersInformationModal from "./_components/TiersInformationModal";

function MyPage() {
  const modal = useModalStore();
  const router = useRouter();
  const { logOut } = useAuth();

  const handleClickInformationButton = () => {
    modal.open(<TiersInformationModal />);
  };

  const handleClickButtonToMyApplication = () => {
    router.push("my-page/my-applications");
  };

  const handleClickButtonToMyMatches = () => {
    router.push("my-page/my-matches");
  };

  const handleClickLogOut = () => {
    logOut();
    alert("로그아웃 처리되었습니다.");
    router.push("/");
  };

  return (
    <Page>
      <section className="pb-6 w-full border-b-2 border-[#F8F8F8]">
        <Heading className="text-2xl">마이페이지</Heading>
        <MyProfileSection />
      </section>

      <section className="py-6 w-full border-b-2 border-[#F8F8F8]">
        <MyTierSection onClickTierModal={handleClickInformationButton} />
      </section>
      <section className="w-full pt-2 pb-6 border-b-2 border-[#F8F8F8]">
        <h4 className="py-4 font-black pr-1">나의 경기</h4>
        <div className="flex items-center gap-x-5 text-sm">
          <ButtonToHistory
            label="신청 내역 조회"
            onClick={handleClickButtonToMyApplication}
          />
          <ButtonToHistory
            label="경기 내역 조회"
            onClick={handleClickButtonToMyMatches}
          />
        </div>
      </section>
      <section className="w-full flex flex-start my-6 ">
        <button
          onClick={handleClickLogOut}
          className="h-[18px] font-black pr-1 hover:border-primary-100 hover:text-primary-100"
        >
          로그아웃
        </button>
      </section>
    </Page>
  );
}

export default MyPage;
