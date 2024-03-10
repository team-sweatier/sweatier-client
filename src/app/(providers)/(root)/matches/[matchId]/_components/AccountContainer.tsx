interface AccountContainerProps {
  isApply: boolean;
  accountBank: string;
  accountNumber: string;
}

function AccountContainer({
  isApply,
  accountBank,
  accountNumber,
}: AccountContainerProps) {
  return (
    <div className="border border-none bg-primary-20 text-sm rounded-lg block w-full dark:bg-natural-50 dark:border-natural-50 dark:text-white p-5 items-center">
      <div className="flex">
        <span className="font-bold pr-8">입금계좌</span>
        {isApply ? (
          <div>
            <span className="pr-2">{accountBank}</span>
            <span>{accountNumber}</span>
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
