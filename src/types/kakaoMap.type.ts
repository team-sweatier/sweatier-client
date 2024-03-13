declare global {
  export interface Window {
    kakao: any;
  }
}

export interface SearchResult {
  address_name: string;
  road_address_name?: string;
  x: string;
  y: string;
}

export interface KakaoMapResultType {
  placeName: string;
  region: string;
  address: string;
  latitude: number;
  longitude: number;
}
