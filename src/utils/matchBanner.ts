import banner_badminton from "@/../public/assets/match_detail_page/banners/banner_badminton_mobile.svg";
import banner_baseball from "@/../public/assets/match_detail_page/banners/banner_baseball_mobile.svg";
import banner_basketball from "@/../public/assets/match_detail_page/banners/banner_basketball_mobile.svg";
import banner_soccer from "@/../public/assets/match_detail_page/banners/banner_soccer_mobile.svg";
import banner_tennis from "@/../public/assets/match_detail_page/banners/banner_tennis_mobile.svg";

interface MatchBanner {
  [key: string]: string;
}
export const matchBanner: MatchBanner = {
  badminton: banner_badminton,
  baseball: banner_baseball,
  basketball: banner_basketball,
  soccer: banner_soccer,
  tennis: banner_tennis,
};
