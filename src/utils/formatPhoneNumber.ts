export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber) {
    const digits = phoneNumber.replace(/\D/g, "");
    const length = digits.length;

    if (length <= 3) {
      return digits;
    } else if (length <= 7) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(
        7,
        11
      )}`;
    }
  }
}
