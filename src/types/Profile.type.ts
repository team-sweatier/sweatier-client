export type Profile = {
  profile: {
    userId: string;
    gender: "male" | "female";
    phoneNumber: string;
    nickName: string;
    nickNameUpdatedAt?: string;
    oneLiner?: string;
    bankName: string;
    accountNumber: string;
    createAt: string;
    updatedAt: string;
    imageUrl: string;
  };
  // imageUrl: string;
};

export type UpdatedProfile = {
  editedProfile: {
    userId: string;
    gender: "male" | "female";
    phoneNumber: string;
    nickName: string;
    nickNameUpdatedAt?: string;
    oneLiner?: string;
    bankName: string;
    accountNumber: string;
    createAt: string;
    updatedAt: string;
  };
  imageUrl: string;
};
