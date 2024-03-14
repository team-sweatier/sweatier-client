"use client";
import BlueButton from "@/components/Buttons/BlueButton";
import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { KakaoMapResultType } from "@/types/kakaoMap.type";
import { matchCreateIcons } from "@/utils/matchIcons";
import { Dispatch, SetStateAction, useCallback } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import CreateKakaoMap from "../CreateKakaoMap";

interface MatchKakaoMapProps {
  kakaoMapResult: KakaoMapResultType;
  setKakaoMapResult: Dispatch<SetStateAction<KakaoMapResultType>>;
}

function MatchKakaoMap({
  kakaoMapResult,
  setKakaoMapResult,
}: MatchKakaoMapProps) {
  const { control } = useFormContext();

  const selectedPlaceName = useWatch({
    control,
    name: "placeName",
  });

  const handleSearch = () => {
    setKakaoMapResult(() => ({
      ...kakaoMapResult,
      placeName: selectedPlaceName,
    }));
  };

  const handleKakaoMapSearchResult = useCallback(
    () => (result: any) => {
      setKakaoMapResult(result);
    },
    [setKakaoMapResult]
  );

  return (
    <FormOuter>
      <label
        className="font-bold flex items-center gap-x-1 pb-4"
        htmlFor="placeName"
      >
        <Icon
          src={matchCreateIcons.place}
          alt="postIcon-icon"
          classStyles="mb-[2px]"
        />
        경기장 위치
      </label>
      <div className="grid grid-rows-2 relative rounded-[10px] px-5 border-2 border-natural-20 w-full h-[315px] sm:h-[480px]">
        <div className="grid grid-cols-5 items-center gap-x-4 w-full">
          <Controller
            control={control}
            name="placeName"
            render={({ field: { onChange, value = "" } }) => (
              <input
                id="placeName"
                placeholder="경기장명을 입력하세요."
                onChange={onChange}
                value={value}
                className="border border-neutral-30 placeholder:text-neutral-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-neutral-50 dark:border-neutral-50 dark:placeholder-neutral-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light col-span-4"
              />
            )}
          />
          <BlueButton
            buttonLabel="검색"
            isValid={!!selectedPlaceName || false}
            onClick={handleSearch}
          />
          <CreateKakaoMap
            placeName={kakaoMapResult.placeName}
            onSearchResult={handleKakaoMapSearchResult}
          />
        </div>
      </div>
    </FormOuter>
  );
}

export default MatchKakaoMap;
