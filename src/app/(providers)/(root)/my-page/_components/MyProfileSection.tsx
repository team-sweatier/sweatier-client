import Image from "next/image";

function MyProfileSection() {
  return (
    <>
      <div className="flex items-center">
        <h4 className="py-4 font-black text-lg">내 정보</h4>
        <button className="border-neutral-90 border rounded-2xl text-xs ml-4 py-2 px-3 hover:border-primary-100 hover:text-primary-100">
          수정
        </button>
      </div>
      <div className="rounded-md bg-primary-20 flex px-6 py-4">
        <div className="w-20 h-20 rounded-full bg-neutral-50">
          <Image
            src="/assets/profileDummy.svg"
            width={80}
            height={80}
            alt="프로필 이미지"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-2 mx-7">
          <h6 className="font-bold">닉네임</h6>
          <p className="text-sm">한 줄 자기소개</p>
        </div>
      </div>
      <ul>
        <li>
          <span className="font-bold inline-block text-xs w-1/5">
            휴대폰 번호
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">010-0000-0000</span>
        </li>
        <li>
          <span className="font-bold inline-block text-xs w-1/5">
            계좌 정보
          </span>
          <span className="text-neutral-70">|</span>
          <span className="text-xs pl-3">신한은행 000-00-000000</span>
        </li>
      </ul>
    </>
  );
}

export default MyProfileSection;
