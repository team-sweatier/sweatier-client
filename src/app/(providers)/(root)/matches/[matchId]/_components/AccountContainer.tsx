import isUserParticipating from "@/utils/isUserParticipating";

function AccountContainer({ match }: { match: any }) {
  const { hostBankName, hostAccountNumber, profile } = match;

  const hasApplied = profile ? isUserParticipating(match, profile.id) : false; //* 2. 기신청 여부 확인하기

  return (
    <div className="border border-none bg-primary-20 text-sm rounded-lg block w-full dark:bg-natural-50 dark:border-natural-50 dark:text-white p-5 items-center mb-8">
      <div className="flex">
        <span className="font-bold pr-8">입금계좌</span>
        {hasApplied ? (
          <div>
            <span className="pr-2">{hostBankName}</span>
            <span>{hostAccountNumber}</span>
          </div>
        ) : (
          <span className="text-neutral-50">
            매치를 신청한 유저만 볼 수 있습니다.
          </span>
        )}
      </div>
    </div>
  );
}

export default AccountContainer;
