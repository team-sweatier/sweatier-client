"use client";
import Icon from "@/components/Icon";
import { matchDetailIcons } from "@/utils/matchIcons";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const temporaryDataLabel = {
  //todo: 장소 위치 받아오기
  keyword: "매현시민의 숲 테니스장",
  address: "서울 서초구 매헌로 99",
  latitude: 37.4730498033959,
  longitude: 127.036977084936,
};

function GetKakaoMap() {
  const coordinates = {
    lat: temporaryDataLabel.latitude,
    lng: temporaryDataLabel.longitude,
  };

  const onMarkerClick = () => {
    const url = `https://map.kakao.com/link/map/${encodeURIComponent(
      temporaryDataLabel.keyword
    )},${temporaryDataLabel.latitude},${temporaryDataLabel.longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col item-center pb-14">
      <div className="flex item-center w-full gap-x-2">
        <Icon
          alt={"경기 장소"}
          src={matchDetailIcons.address}
          classStyles="mb-1"
        />
        <div className="font-bold tex-sm">{temporaryDataLabel.keyword}</div>
      </div>
      <div className="text-sm pl-6 pt-2 pb-4">{temporaryDataLabel.address}</div>
      <Map
        center={coordinates}
        level={3}
        className="w-full h-[360px] rounded-md"
      >
        <MapMarker position={coordinates} onClick={onMarkerClick}></MapMarker>
      </Map>
    </div>
  );
}

export default GetKakaoMap;
