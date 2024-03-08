import Image from "next/image";

function Footer() {
  return (
    <footer className="text-neutral-40 px-11 py-10  mx-auto text-center  bg-[#f3f3f3] text-[12px]">
      <p>이용약관 ❘ 개인정보 처리방침 ❘ 사업자 정보 확인</p>
      <div className="mt-4">
        <p>고유번호 : XXX-XX-XXXXX ❘ 이사장 : XXX </p>
        <p>통신판매업 신고번호 : XXXX-XXXX-XXXX</p>
        <div>
          주소 : XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          <p>(XXXXXXXXXXXXXXXXXX)</p>
        </div>
        <p>
          <span>연락처 : XXX-XXXX-XXXX</span>
          <span>{` | `}</span>
          <span>고객센터 : XXXXXXXXXXX.com</span>
        </p>
        <p className="mt-10 text-sm">Copyright SWEATIER All rights reserved.</p>
      </div>
      <ul className="flex gap-4 justify-center mt-10">
        <li>
          <Image
            src="/assets/instagram.svg"
            layout="responsive"
            width={30}
            height={30}
            alt="instagram-image"
          />
        </li>
        <li>
          <Image
            src="/assets/youtube.svg"
            layout="responsive"
            width={30}
            height={30}
            alt="youtube-image"
          />
        </li>

        <li>
          <Image
            src="/assets/facebook.svg"
            layout="responsive"
            width={30}
            height={30}
            alt="facebook-image"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
