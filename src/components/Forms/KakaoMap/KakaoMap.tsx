"use client";

import Link from "next/link";
import { useState } from "react";
import { useWatch } from "react-hook-form";
import "react-kakao-maps-sdk";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  //* 사용자가 input에 입력한 주소
  const getAddress = useWatch({
    name: "address",
  });

  console.log("getAddress", getAddress);

  //* 주소 string
  const [address, setAddress] = useState<string>("");
  //* 좌표
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 0,
    longitude: 0,
  });

  const originCoordinates = { lat: 37.5685159133492, lng: 126.98020965303 };
  const originAddress = "서울 중구 청계천로 24";

  //* 좌표 가져오는 함수
  const kakaoMapGeoCoder = () => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성

      // 주소로 좌표를 검색
      geocoder.addressSearch(getAddress, function (result, status) {
        // 정상적으로 검색이 완료
        if (status === window.kakao.maps.services.Status.OK) {
          setCoordinates(() => ({
            latitude: Number(result[0].y),
            longitude: Number(result[0].x),
          }));
        }
        return;
      });
    });
  };

  console.log(coordinates);

  return (
    <main className="w-full relative">
      {/* 인풋 & 버튼 */}
      <div className="flex gap-x-4">
        <button
          type="button"
          className="border-natural-50 bg-primary-100 py-2 px-4 text-white text-sm"
          onClick={kakaoMapGeoCoder}
        >
          확인
        </button>
      </div>

      <Map
        className="map w-full sm:h-60 h-48 absolute rounded-[10px]"
        center={originCoordinates} // 지도의 초기 위치
        isPanto={true} // 부드럽게 이동할 지 유무
        level={3} // 지도의 확대 레벨
      >
        <MapMarker position={originCoordinates}></MapMarker>
        <CustomOverlayMap position={originCoordinates} yAnchor={1}>
          <div className="customoverlay">
            <Link
              href={`https://map.kakao.com/link/map/${getAddress},${coordinates.latitude},${coordinates.longitude}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="title bg-white px-2 py-2 ">{getAddress}</span>
            </Link>
          </div>
        </CustomOverlayMap>
      </Map>
    </main>
  );
};

export default KakaoMap;
