"use client";

import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useModalStore } from "@/store";
import Image from "next/image";
import Hexagon from "./_components/Hexagon";
import TiersInformationModal from "./_components/TiersInformationModal";

function MyPage() {
  const modal = useModalStore();
  const handleClickInformationButton = () => {
    modal.open(<TiersInformationModal />);
  };

  return (
    <Page>
      <section className="pb-6 w-full border-b-2 border-[#F8F8F8]">
        <Heading className="text-2xl">마이페이지</Heading>
        <div className="flex items-center">
          <h4 className="py-4 font-black text-lg">내 정보</h4>
          <button className="border-neutral-90 border rounded-2xl ml-4 px-4">
            수정
          </button>
        </div>
        <div className="rounded-md bg-primary-20 flex px-6 py-4">
          <div className="w-20 h-20 rounded-full bg-neutral-50">
            <Image
              src="/assets/profileDummy.svg"
              width={80}
              height={80}
              alt="프로필 이미지"
            />
          </div>
          <div className="flex flex-col justify-center gap-y-2 mx-7">
            <h6 className="font-bold">닉네임</h6>
            <p className="text-sm">한 줄 자기소개</p>
          </div>
        </div>
        <ul>
          <li>
            <span className="font-bold inline-block text-xs w-1/5">
              휴대폰 번호
            </span>
            <span className="text-neutral-70">|</span>
            <span className="text-xs pl-3">010-0000-0000</span>
          </li>
          <li>
            <span className="font-bold inline-block text-xs w-1/5">
              계좌 정보
            </span>
            <span className="text-neutral-70">|</span>
            <span className="text-xs pl-3">신한은행 000-00-000000</span>
          </li>
        </ul>
      </section>

      <section className="py-6 w-full border-b-2 border-[#F8F8F8]">
        <div className="flex items-center">
          <h4 className="py-4 font-black text-lg pr-1">나의 티어</h4>
          <button onClick={handleClickInformationButton}>
            <Image
              src="/assets/Info@3x.svg"
              width={14}
              height={14}
              alt="정보 아이콘"
            ></Image>
          </button>
          <p className="pl-3 text-xs">매일 오전 12시에 티어가 재배정됩니다.</p>
        </div>
        <div className="flex justify-center gap-x-4 py-4">
          <Hexagon label="농구" />
          <Hexagon label="배드민턴" />
          <Hexagon label="야구" />
        </div>
        <div className="flex justify-center gap-x-4">
          <Hexagon label="축구" />
          <Hexagon label="테니스" />
        </div>
      </section>
      <section className="w-full flex justify-between gap-x-5 pt-6">
        <button className="rounded-lg border border-neutral-50 w-1/2 h-12 font-bold hover:text-primary-100 hover:border-primary-100">
          신청 내역 조회
        </button>
        <button className="rounded-lg border border-neutral-50 w-1/2 h-12 font-bold hover:text-primary-100 hover:border-primary-100">
          경기 내역 조회
        </button>
      </section>
    </Page>
  );
}

export default MyPage;
