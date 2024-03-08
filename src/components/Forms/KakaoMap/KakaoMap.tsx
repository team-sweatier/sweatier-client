import { Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  latitude: number;
  longitude: number;
}

function KakaoMap({ latitude, longitude }: KakaoMapProps) {
  return (
    <>
      <Map center={{ lat: latitude, lng: longitude }} className="w-full h-full">
        <MapMarker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </>
  );
}

export default KakaoMap;
