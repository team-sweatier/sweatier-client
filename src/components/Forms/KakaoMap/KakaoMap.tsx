"use client";

import { SearchResult } from "@/types/kakaoMap.type";
import { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  keyword: string;
}

function KakaoMap({ keyword }: KakaoMapProps) {
  const [coordinates, setCoordinates] = useState({
    lat: 37.5685159133492,
    lng: 126.98020965303,
  }); // 기본 위치 설정 (웅진 본사)

  useEffect(() => {
    function loadKakaoMap() {
      if (!window.kakao || !window.kakao.maps) return;
      window.kakao.maps.load(() => {
        if (!keyword) return;
        const places = new window.kakao.maps.services.Places();
        places.keywordSearch(keyword, (data: SearchResult[], status: any) => {
          if (status === window.kakao.maps.services.Status.OK && data[0]) {
            const firstResult = data[0];
            setCoordinates({
              lat: parseFloat(firstResult.y),
              lng: parseFloat(firstResult.x),
            });
            //* 전체 주소 받아오기
            const WholeAddress =
              firstResult.road_address_name || firstResult.address_name;
            //* 행정구역만 자르기
            const administrativeDistrict = WholeAddress.slice(0, 2);

            console.log(
              `입력 장소: ${keyword}, 행정구역: ${administrativeDistrict}, 주소:${WholeAddress}, 위도: ${firstResult.y}, 경도: ${firstResult.x}`
            );
          }
        });
      });
    }

    loadKakaoMap();
  }, [keyword]);

  if (!coordinates) return null;

  return (
    <Map
      center={coordinates}
      level={3}
      className="w-full col-span-4 h-[210px] sm:h-[360px] rounded-md"
    >
      <MapMarker position={coordinates}></MapMarker>
      <div className="customoverlay relative">
        <CustomOverlayMap position={coordinates} yAnchor={1}>
          {keyword && (
            <span
              className=" bg-primary-100 rounded-lg text-white p-2 text-sm absolute bottom-11 left-0 border-none"
              onClick={() => {
                const url = `https://map.kakao.com/link/map/${keyword},${coordinates.lat},${coordinates.lng}`;
                window.open(url, "_blank");
              }}
            >
              {keyword}
            </span>
          )}
        </CustomOverlayMap>
      </div>
    </Map>
  );
}

export default KakaoMap;
