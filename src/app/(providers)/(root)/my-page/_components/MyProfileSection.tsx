import useProfileStore from "@/store/profile.store";
import Image from "next/image";

function MyProfileSection() {
  const { profile } = useProfileStore();

  return (
    <>
      <div className="flex items-center">
        <h4 className="py-4 font-black text-lg">내 정보</h4>
        <button className="border-neutral-90 border rounded-2xl text-xs ml-4 py-2 px-3 hover:border-primary-100 hover:text-primary-100">
          수정
        </button>
      </div>
      <div className="rounded-md bg-primary-20 flex px-6 py-4">
        <div className="w-20 h-20 rounded-full bg-neutral-50 flex items-center justify-center">
          {profile?.imageUrl ? (
            <Image
              src={profile?.imageUrl}
              layout="fill"
              objectFit="cover"
              alt="프로필 이미지"
            />
          ) : (
            <span className="text-xs">no image</span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-y-2 mx-7">
          <h6 className="font-bold">{profile?.profile.nickName}</h6>
          <p className="text-sm">{profile?.profile.oneLiner}</p>
        </div>
      </div>
      <ul>
        <li>
          <span className="font-bold inline-block text-xs w-1/5">
            휴대폰 번호
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">{profile?.profile.phoneNumber}</span>
        </li>
        <li>
          <span className="font-bold inline-block text-xs w-1/5">
            계좌 정보
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">
            {profile?.profile.bankName} {profile?.profile.accountNumber}
          </span>
        </li>
      </ul>
    </>
  );
}

export default MyProfileSection;
