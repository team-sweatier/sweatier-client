"use client";
import Icon from "@/components/Icon";
import { matchDetailIconsPath } from "@/utils/matchPatchs";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function GetKakaoMap({ match }: { match: any }) {
  const { latitude, longitude, placeName, address } = match;

  const coordinates = {
    lat: latitude,
    lng: longitude,
  };

  const onMarkerClick = () => {
    const url = `https://map.kakao.com/link/map/${encodeURIComponent(
      placeName
    )},${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col item-center pb-14">
      <div className="flex item-center w-full gap-x-2">
        <Icon
          alt={"경기 장소"}
          src={matchDetailIconsPath.address}
          classStyles="mb-1"
        />
        <div className="font-bold tex-sm">{placeName}</div>
      </div>
      <div className="text-sm pl-6 pt-2 pb-4">{address}</div>
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
