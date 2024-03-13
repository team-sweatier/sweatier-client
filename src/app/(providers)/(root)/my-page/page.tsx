"use client";

import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useAuthStore, useModalStore } from "@/store";
import { getMilliseconds } from "date-fns";
import { useRouter } from "next/navigation";
import ButtonToHistory from "./_components/ButtonToHistory";
import MyProfileSection from "./_components/MyProfileSection";
import MyTierSection from "./_components/MyTierSection";
import TiersInformationModal from "./_components/TiersInformationModal";

function MyPage() {
  const modal = useModalStore();
  const router = useRouter();
  const { userId } = useAuthStore();
  console.log("마이페이지", getMilliseconds, userId);

  const handleClickInformationButton = () => {
    modal.open(<TiersInformationModal />);
  };

  const handleClickButtonToMyApplication = () => {
    router.push("my-page/my-applications");
  };

  const handleClickButtonToMyMatches = () => {
    router.push("my-page/my-matches");
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
      <section className="w-full flex justify-between gap-x-5 pt-6">
        <ButtonToHistory
          label="신청 내역 조회"
          onClick={handleClickButtonToMyApplication}
        />
        <ButtonToHistory
          label="경기 내역 조회"
          onClick={handleClickButtonToMyMatches}
        />
      </section>
    </Page>
  );
}

export default MyPage;
