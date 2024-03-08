import { Metadata } from "next";

export const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&libraries=clusterer&libraries=services&autoload=false`;

export const metadata: Metadata = {
  title: "SweaTier",
  description: "운동을 넘어 함께 성장하는 여정에 당신을 초대합니다!",
};
