"use client";
import SubmitButton from "@/components/Buttons/SubmitButton";
import matchCreateIcons from "@/utils/matchCreateIcons";
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
  const { control, watch } = useForm<addressData>();
  // const { control, watch } = useFormContext();
  const [searchKeyword, setSearchKeyword] = useState<string>("웅진IT 본사"); //* 입력한 키워드 값 (초기값 : 웅진 본사)
  const keyword = watch("address");

  // "검색 버튼" 클릭 시 실행될 함수
  const handleSearch = () => {
    setSearchKeyword(keyword);
  };

  return (
    <FormOuter>
      <Label
        id={"place"}
        label={"경기장 위치"}
        iconSrc={matchCreateIcons.place}
      />
      <div className="grid grid-rows-2 relative rounded-[10px] px-5 border-2 border-natural-20 w-full  h-[315px] sm:h-[480px]">
        <div className="grid grid-cols-4 items-center gap-x-4 w-full">
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <Input
                id="address"
                label="경기장 위치"
                {...field}
                placeholder="경기장명을 입력하세요."
                className="sm:h-11 h-9 col-span-3"
              />
            )}
          />
          <SubmitButton
            buttonLabel={"검색"}
            isValid={!!keyword}
            onclick={handleSearch}
          />
          <KakaoMap keyword={searchKeyword} />
        </div>
      </div>
    </FormOuter>
  );
}

export default KakaoMapForm;
