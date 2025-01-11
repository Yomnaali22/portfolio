import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div
      id="contact"
      className="names mt-16 pb-10 gap-3 flex flex-row items-center justify-center text-white bg-[--background] w-full animate-move-up ease-in-out"
    >
      <h6 className="font-firacodebold text-headlinesFontColor">Contact Me </h6>
      <Link
        href="mailto:yomna.ib.ali@gmail.com"
        className="h-[38px] w-[38px]"
        target="_blank"
      >
        <img
          src="/images/gmail_icon.webp"
          alt="Gmail"
          className="h-[38px] w-[38px]"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yomna-ali-59995a190/"
        target="_blank"
        className="h-[35px] w-[35px]"
      >
        <img
          src="images/linkedin_icon.webp"
          alt="LinkedIn"
          className="h-[35px] w-[35px]"
        />
      </Link>
    </div>
  );
};

export default Footer;
