import { useProfile } from "@/contexts/profile.context";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MyProfileSection() {
  const profile = useProfile();
  const router = useRouter();

  const handleClickProfileEditButton = () => {
    router.push("/my-page/edit-profile");
  };

  const formattedPhoneNumber = formatPhoneNumber(
    profile?.phoneNumber as string
  );

  return (
    <>
      <div className="flex items-center">
        <h4 className="py-4 font-black text-lg">내 정보</h4>
        <button
          onClick={handleClickProfileEditButton}
          className="border-neutral-90 border rounded-2xl text-[11px] ml-4 py-[2px] px-[6px] hover:border-primary-100 hover:text-primary-100"
        >
          수정
        </button>
      </div>
      <div className="rounded-xl bg-primary-20 flex px-6 py-4 mb-2 lg:w-[350px] mx-auto">
        <div className="w-20 h-20 relative rounded-full overflow-hidden bg-neutral-50 flex items-center justify-center">
          {profile ? (
            <Image
              src={`${profile.imageUrl}`}
              layout="fill"
              objectFit="cover"
              alt="프로필 이미지"
            />
          ) : (
            <span className="text-xs">no image</span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-y-2 mx-7">
          <h6 className="font-bold text-sm">{profile?.nickName}</h6>
          <p className="text-xs">{profile?.oneLiner}</p>
        </div>
      </div>
      <ul className="lg:w-[350px] mx-auto lg:flex lg:flex-col lg:justify-center">
        <li className="w-full lg:ml-12">
          <span className="font-bold inline-block text-xs w-1/5 mr-2">
            휴대폰 번호
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">{formattedPhoneNumber}</span>
        </li>
        <li className="w-full lg:ml-12">
          <span className="font-bold inline-block text-xs w-1/5 mr-2">
            계좌 정보
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">
            {profile?.bankName} {profile?.accountNumber}
          </span>
        </li>
      </ul>
    </>
  );
}

export default MyProfileSection;
