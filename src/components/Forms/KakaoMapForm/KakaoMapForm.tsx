"use client";
import SubmitButton from "@/components/Buttons/SubmitButton";
import matchIcons from "@/utils/matchIcons";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FormOuter from "../FormOuter";
import Input from "../Input";
import KakaoMap from "../KakaoMap";
import Label from "../Label";

type addressData = {
  address: string;
};

function KakaoMapForm() {
  const { control, watch, setValue } = useForm<addressData>();
  const [searchKeyword, setSearchKeyword] = useState<string>(""); //* 입력한 키워드 값
  const [isSearched, setIsSearched] = useState<boolean>(false); //* 확인 버튼 유효성 검사
  const keyword = watch("address");

  // "확인 버튼" 클릭 시 실행될 함수
  const handleSearch = () => {
    setSearchKeyword(keyword);
    setIsSearched(true); // 검색 실행을 나타내는 상태 업데이트
  };

  return (
    <FormOuter>
      <Label id={"place"} label={"경기장 위치"} iconSrc={matchIcons.place} />
      <div className="grid grid-rows-2 relative rounded-[10px] px-5 border-2 border-natural-20 w-full  h-[330px] sm:h-[480px]">
        <div className="grid grid-cols-4 items-center gap-x-4 w-full ">
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <Input
                id="address"
                label="경기장 위치"
                {...field}
                placeholder="경기장명을 입력하세요."
                className="h-12 col-span-3"
              />
            )}
          />
          <SubmitButton
            buttonLabel={"검색"}
            isValid={!!keyword}
            onclick={handleSearch}
            className="w-24 py-0 h-12"
          />
          <KakaoMap keyword={!searchKeyword ? keyword : searchKeyword} />
        </div>
      </div>
    </FormOuter>
  );
}

export default KakaoMapForm;
