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

  // "확인 버튼" 클릭 시 실행될 함수
  const handleSearch = () => {
    const keyword = watch("address");
    setSearchKeyword(keyword);
    setIsSearched(true); // 검색 실행을 나타내는 상태 업데이트
  };

  return (
    <FormOuter>
      <Label id={"place"} label={"경기장 위치"} iconSrc={matchIcons.place} />
      <div className="relative rounded-[10px] p-5 h-svh border-2 border-natural-20">
        <div className="flex">
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <Input
                id="address"
                label="경기장 위치"
                {...field}
                placeholder="키워드를 입력하세요. 예: 올림픽 경기장"
                className="input-class"
              />
            )}
          />
          <SubmitButton buttonLabel={"작성 완료"} isValid={isSearched} />
          {isSearched && <KakaoMap keyword={searchKeyword} />}
        </div>
      </div>
    </FormOuter>
  );
}

export default KakaoMapForm;

// onClick={handleSearch}
