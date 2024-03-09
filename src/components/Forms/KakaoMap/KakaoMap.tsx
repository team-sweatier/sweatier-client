"use client";

import { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

interface SearchResult {
  address_name: string;
  road_address_name?: string;
  x: string;
  y: string;
}

interface KakaoMapProps {
  keyword: string;
}

function KakaoMap({ keyword }: KakaoMapProps) {
  // 기본 위치 설정
  const [coordinates, setCoordinates] = useState({
    lat: 37.5685159133492,
    lng: 126.98020965303,
  });

  console.log("are you ready?");
  console.log("coordinates :", coordinates);

  useEffect(() => {
    function loadKakaoMap() {
      if (!window.kakao || !window.kakao.maps) return;
      window.kakao.maps.load(() => {
        if (!keyword) return;
        const places = new window.kakao.maps.services.Places();
        places.keywordSearch(keyword, (data: SearchResult[], status: any) => {
          if (status === window.kakao.maps.services.Status.OK && data[0]) {
            const firstResult = data[0];
            // 주소가 원하는 지역 목록에 포함되어 있는지 확인

            setCoordinates({
              lat: parseFloat(firstResult.y),
              lng: parseFloat(firstResult.x),
            });
            //*
            const WholeAddress =
              firstResult.road_address_name || firstResult.address_name;
            //* 행정구역만 자르기
            const administrativeDistrict = WholeAddress.slice(0, 2);

            console.log(
              `입력한 키워드: ${keyword}, 행정구역: ${administrativeDistrict}, 위도: ${firstResult.y}, 경도: ${firstResult.x}`
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
      style={{ width: "100%", height: "360px" }}
      level={3}
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

//! 3트
// "use client";
// import { useEffect, useState } from "react";
// import { Map, MapMarker } from "react-kakao-maps-sdk";

// type KakaoMapProps = {
//   keyword: string;
// };

// function KakaoMap({ keyword: address }: KakaoMapProps) {
//   const [coordinates, setCoordinates] = useState<{lat: number, lng: number}>({
//     lat: 37.5685159133492,
//     lng: 126.98020965303,
//   });
//   const [details, setDetails] = useState({ address: '', region: '' });

//   useEffect(() => {
//     // 주소 값 변화 확인
//     console.log("현재 주소:", address);

//     if (!address) return;

//     const geocoder = new window.kakao.maps.services.Geocoder();

//     geocoder.addressSearch(address, (result, status) => {
//       // API 호출 상태 확인
//       console.log("API 호출 상태:", status);

//       if (status === window.kakao.maps.services.Status.OK) {
//         const { x, y } = result[0];

//         // API 호출 성공 시 로그 출력
//         console.log(`입력한 키워드: ${address}, 위도: ${y}, 경도: ${x}`);

//         setCoordinates({ lat: parseFloat(y), lng: parseFloat(x) });
//       }
//     });
//   }, [address]); // 의존성 배열에 address 추가

//   return (
//     <Map
//       center={coordinates}
//       style={{ width: "100%", height: "360px" }}
//       level={3}
//     >
//       <MapMarker
//         position={coordinates}
//         onClick={() => {
//           const url = `https://map.kakao.com/link/map/${address},${coordinates.lat},${coordinates.lng}`;
//           window.open(url, "_blank");
//         }}
//       >
//         <div>{address && <span>{address}</span>}</div>
//       </MapMarker>
//     </Map>
//   );
// }

// export default KakaoMap;

// import Link from "next/link";
// import { useState } from "react";
// import { useWatch } from "react-hook-form";
// import "react-kakao-maps-sdk";
// import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
// import Input from "../Input";

// const KakaoMap = () => {
//   //* 1. 사용자가 input에 입력한 주소
//   const getAddress = useWatch({
//     name: "address",
//   });

//   //* 2. 좌표
//   const [coordinates, setCoordinates] = useState<{
//     latitude: number;
//     longitude: number;
//   }>({
//     latitude: 0,
//     longitude: 0,
//   });

//   //* 3. 시, 구, 동 (detpth)
//   const [region, setRegion] = useState({
//     "1depth": "",
//     "2depth": "",
//     "3depth": "",
//   });

//   const originCoordinates = { lat: 37.5685159133492, lng: 126.98020965303 };
//   const originAddress = "서울 중구 청계천로 24";

//   //* 좌표 가져오는 함수
//   const kakaoMapGeoCoder = () => {
//     window.kakao.maps.load(() => {
//       //* 1. 주소-좌표 변환 객체 생성
//       const geocoder = new window.kakao.maps.services.Geocoder();
//       //* 2. 키워드-장소 검색 객체 생성
//       const ps = new window.kakao.maps.services.Places();

//       //*  키워드 검색 완료 . 시호출되는 콜백 함수
//       const placeSearchCB = (data: any, status: any, pagination: any) => {
//         if (status === window.kakao.maps.services.Status.OK) {
//           //* 검색된 장소 위치를 기준으로 지도 범위 재설정을 위해 LatLngBounds 객체에 좌표 추가
//           let bounds = new window.kakao.maps.LatLngBounds();

//           data.forEach((eachData: any, i: any) => {
//             displayMarker(eachData);
//             bounds.extend(new window.kakao.maps.LatLng(eachData.y, eachData.x));
//           });
//         }
//       };

//       const mapOption = {
//         center: new window.kakao.maps.LatLng(
//           originCoordinates.lat,
//           originCoordinates.lng
//         ),
//         level: 3,
//       };

//       const map = new window.kakao.maps.Map(getAddress, mapOption);

//       //* 지도에 마커를 표시하는 함수
//       const displayMarker = (place: any) => {
//         const marker = new window.kakao.maps.Marker({
//           map: map,
//           position: new window.kakao.maps.LatLng(place.y, place.x),
//         });
//       };

//       // 주소로 좌표를 검색
//       geocoder.addressSearch(getAddress, (result, status) => {
//         // 정상적으로 검색이 완료
//         if (status === window.kakao.maps.services.Status.OK) {
//           setCoordinates(() => ({
//             latitude: Number(result[0].y),
//             longitude: Number(result[0].x),
//           }));
//         }
//         return;
//       });

//       //* 좌표 -> 주소로 변환해주는 함수
//       const coord = new kakao.maps.LatLng(
//         coordinates.latitude,
//         coordinates.longitude
//       );
//     });
//   };

//   // const getAddress = (lat, lng) => {
//   //   const geocoder = new kakao.maps.services.Geocoder(); // 좌표 -> 주소로 변환해주는 객체
//   //   const coord = new kakao.maps.LatLng(37.5566803113882, 126.904501286522); // 주소로 변환할 좌표 입력
//   //   const callback = function (result, status) {
//   //     if (status === kakao.maps.services.Status.OK) {
//   //       setAddress(result[0].address);
//   //     }
//   //   };
//   //   geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
//   // };

//   // console.log(coordinates);

//   return (
//     <main className="">
//       {/* 인풋 & 버튼 */}
//       <div className="flex mb-4 gap-x-4 relative">
//         <Input
//           id="address"
//           label="경기 위치"
//           placeholder="경기장명을 입력하세요."
//           className="border-natural-30"
//         />
//         <button
//           type="button"
//           className="border-natural-50 bg-primary-100 px-4 w-20 text-white text-sm"
//           onClick={kakaoMapGeoCoder}
//         >
//           확인
//         </button>
//       </div>
//       {/* kakao map */}
//       <Map
//         className="map w-full sm:h-60 h-48 absolute rounded-[10px] left-0"
//         center={originCoordinates} // 지도의 초기 위치
//         isPanto={true} // 부드럽게 이동할 지 유무
//         level={3} // 지도의 확대 레벨
//       >
//         <MapMarker position={originCoordinates}></MapMarker>
//         <CustomOverlayMap position={originCoordinates} yAnchor={1}>
//           <div className="customoverlay relative">
//             <Link
//               href={`https://map.kakao.com/link/map/${getAddress},${coordinates.latitude},${coordinates.longitude}`}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {getAddress && (
//                 <span className=" bg-primary-100 rounded-lg text-white p-2 text-sm absolute bottom-11 left-0 border-none">
//                   {getAddress}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </CustomOverlayMap>
//       </Map>
//     </main>
//   );
// };

// export default KakaoMap;
