import api from "@/api";
import useProfileStore from "@/store/profile.store";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MyProfileSection() {
  const { data: myProfile } = useQuery({
    queryKey: ["myProfile"],
    queryFn: api.user.getMyProfile,
  });
  const router = useRouter();
  const { profile } = useProfileStore();

  const handleClickProfileEditButton = () => {
    router.push("/my-page/edit-profile");
  };

  return (
    <>
      <div className="flex items-center">
        <h4 className="py-4 font-black text-lg">내 정보</h4>
        <button
          onClick={handleClickProfileEditButton}
          className="border-neutral-90 border rounded-2xl text-xs ml-4 py-2 px-3 hover:border-primary-100 hover:text-primary-100"
        >
          수정
        </button>
      </div>
      <div className="rounded-md bg-primary-20 flex px-6 py-4">
        <div className="w-20 h-20 relative rounded-full overflow-hidden bg-neutral-50 flex items-center justify-center">
          {myProfile ? (
            // ${process.env.DEPLOYED_NEXT_PUBLIC_SERVER_IMAGE_URL}
            <Image
              src={`https://storage.googleapis.com/sweatier-user-profile-image/${myProfile?.userId}`}
              layout="fill"
              objectFit="cover"
              alt="프로필 이미지"
            />
          ) : (
            <span className="text-xs">no image</span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-y-2 mx-7">
          <h6 className="font-bold">{myProfile?.nickName}</h6>
          <p className="text-sm">{myProfile?.oneLiner}</p>
        </div>
      </div>
      <ul>
        <li>
          <span className="font-bold inline-block text-xs w-1/5">
            휴대폰 번호
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">{myProfile?.phoneNumber}</span>
        </li>
        <li>
          <span className="font-bold inline-block text-xs w-1/5">
            계좌 정보
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">
            {myProfile?.bankName} {myProfile?.accountNumber}
          </span>
        </li>
      </ul>
    </>
  );
}

export default MyProfileSection;
