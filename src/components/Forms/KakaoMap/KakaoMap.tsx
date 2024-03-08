// "use client";

import { KAKAO_SDK_URL } from "@/app/layout";
import matchTypes from "@/utils/matchTypes";
import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  const { latitude, longitude } = matchTypes.originCoordinates;

  const [map, setMap] = useState<any>();
  const [markers, setMarkers] = useState<any>([]);

  const searchLocation = useWatch({
    name: "location",
  });

  // useEffect(() => {
  //   setMap(searchLocation);
  // }, [searchLocation]);

  // SDK를 동적으로 로드하는 함수
  const loadKakaoMapsSDK = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = KAKAO_SDK_URL;
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        setMap(true); // SDK 로드 완료 시 map 상태를 true로 설정
      });
    };
  };

  useEffect(() => {
    if (
      !window.kakao ||
      !window.kakao.maps ||
      !window.kakao.maps.services ||
      !window.kakao.maps.services.Places
    ) {
      loadKakaoMapsSDK();
    } else {
      setMap(true); // SDK가 이미 로드된 경우
    }
  }, []);

  //*   검색어가 바뀔 때마다 재렌더링되도록
  useEffect(() => {
    //* 검색어가 없다면 바로 return
    if (!map || !searchLocation) return;
    // const kakao = (window as any).kakao;

    // const mapOption = {
    //   center: new kakao.map.LatLng(latitude, longitude), // 지도의 중심좌표
    //   level: 3, // 지도의 확대 레벨
    // };
    // // 지도를 생성
    // const map = new kakao.maps.Map(searchLocation, mapOption);

    // // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성
    // const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 장소 검색 객체를 생성
    const ps = new kakao.maps.services.Places();

    //* 검색어를 통한 장소 검색하는 함수
    const handlerSearchPlace = (data: any, status: any, pagination: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const markers = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    };

    // 장소검색 객체를 통해 키워드로 장소검색을 요청
    ps.keywordSearch(searchLocation, handlerSearchPlace);
  }, [map, searchLocation]);

  // 키워드로 장소를 검색합니다
  // searchPlaces();

  return (
    <>
      <Map
        center={{ lat: latitude, lng: longitude }}
        level={3}
        onCreate={setMap}
        className="w-full h-full rounded-[10px]"
      >
        {markers.map((marker: any) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
          >
            <div style={{ color: "#000" }}>{marker.content}</div>
          </MapMarker>
        ))}
      </Map>
    </>
  );
}

export default KakaoMap;

// import { useEffect, useState } from "react";
// import { useFormContext, useWatch } from "react-hook-form";
// import { Map, MapMarker } from "react-kakao-maps-sdk";

// function KakaoMap() {
//   const { register, watch } = useFormContext();
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);

//   const address = useWatch({
//     name: "location", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
//   });

//   console.log(address);

//   const latitude = 37.5685159133492;
//   const longitude = 126.98020965303;

//   useEffect(() => {
//     const kakao = (window as any).kakao;
//     kakao.maps.load(() => {
//       const options = {
//         center: new kakao.maps.LatLng(latitude, longitude),
//       };
//       const map = new kakao.maps.Map(location, options);
//       console.log("map", map);

//       setMap(map);
//       const markerPosition = new kakao.maps.LatLng(latitude, longitude);

//       console.log("markerPosition", markerPosition);

//       const marker = new kakao.maps.Marker({
//         position: markerPosition,
//       });
//       marker.setMap(map);
//     });
//   }, [address, latitude, longitude]);

//   console.log(map);

//   return (
//     <>
//       <Map
//         center={{ lat: latitude, lng: longitude }}
//         level={3}
//         className="w-full h-full rounded-[10px]"
//       >
//         <MapMarker
//           position={{
//             lat: latitude,
//             lng: longitude,
//           }}
//         />
//       </Map>
//     </>
//   );
// }

// export default KakaoMap;
