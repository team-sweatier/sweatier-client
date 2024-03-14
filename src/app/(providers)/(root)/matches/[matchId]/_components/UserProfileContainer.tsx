import Image from "next/legacy/image";

interface UserProfileContainerProps {
  hostNickname: string;
  hostOneLiner?: string;
}

function UserProfileContainer({ match }: { match: any }) {
  const { hostNickname, hostOneLiner, hostProfileImgSrc } = match;

  return (
    <div className="border border-none bg-primary-20 text-sm rounded-lg w-full dark:bg-natural-50 dark:border-natural-50 dark:text-white p-5 items-center flex">
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={hostProfileImgSrc}
          alt="user-profile-image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="pl-8">
        <div className="pb-2 font-bold">{hostNickname}</div>
        <div className="text-xs">{hostOneLiner}</div>
      </div>
    </div>
  );
}

export default UserProfileContainer;
