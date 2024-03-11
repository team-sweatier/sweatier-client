import star from "@/../public/assets/rating_page/star.svg";
import Image from "next/image";

function Star() {
  return (
    <div>
      <Image src={star} alt="star" width={19} height={18} />
    </div>
  );
}

export default Star;
