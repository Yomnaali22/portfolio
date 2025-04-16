import Link from "next/link";
import { useState } from "react";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yomna.ib.ali@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const newLocal = (
    <span className="font-firacodeRegular text-headlinesFontColor">
      LinkedIn
    </span>
  );
  return (
    <div className="responsive-text contact-responsive-gap flex justify-center items-end text-headlinesFontColor animate-move-up ease-in-out">
      <Link
        href="https://www.linkedin.com/in/yomna-ali-59995a190/"
        target="_blank"
        className="responsive-icon flex flex-row items-center gap-2"
      >
        <img
          alt="LinkedIn"
          className="responsive-icon"
          src="images/linkedin.webp"
        />
      </Link>
      <Link
        href="https://github.com/Yomnaali22"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Github Profile"
        title="My Github Profile"
        className="responsive-icon flex flex-row items-center gap-2"
      >
        <img
          src="images/github.webp"
          alt="My Github Profile Icon"
          className="responsive-icon"
        />
      </Link>
      <button
        onClick={handleCopyEmail}
        className="responsive-icon flex flex-row items-center gap-2 group"
        aria-label={copied ? "Email copied!" : "Copy email to clipboard"}
        title={copied ? "Email copied!" : "Copy email to clipboard"}
      >
        <img src="images/email.webp" alt="Gmail" className="responsive-icon" />
        {copied ? (
          <span className="text-xs">Copied!</span>
        ) : (
          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Copy
          </span>
        )}
      </button>
    </div>
  );
};

export default Contact;
