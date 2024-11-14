import Twitter from "../Icons/TwitterIcon";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Iinkedin";
import Email from "../Icons/Email";

function IconsBox() {
  return (
    <div
      className={`w-{50%] flex absolute top-[80vh] left-[50%] -translate-x-[50%] gap-[40px]`}
    >
      <a
        href="https://x.com/TheoCode1?t=RKJDnha--DSi5J_Tppb5RA&s=09"
        target="_blank"
        className="bg-iconsColor text-toolsBarColor p-[12px] rounded-full text-[1.7rem] w-[50px] h-[50px] text-center"
      >
        {<Twitter />}
      </a>
      <a
        href="https://github.com/simocode-99"
        target="_blank"
        className="bg-iconsColor flex justify-center items-center text-toolsBarColor  rounded-full text-[1.7rem] w-[50px] h-[50px] text-center"
      >
        {" "}
        {<Github />}
      </a>
      <a
        href="https://www.linkedin.com/in/theo-code-0b35a632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        className="bg-iconsColor flex justify-center items-center text-toolsBarColor  rounded-full text-[1.7rem] w-[50px] h-[50px] text-center"
      >
        {<Linkedin />}
      </a>
      <a
        href="codingbisuness99@gmail.com"
        target="_blank"
        className="bg-iconsColor flex justify-center items-center text-toolsBarColor  rounded-full text-[1.7rem] w-[50px] h-[50px] text-center"
      >
        {" "}
        {<Email />}{" "}
      </a>
    </div>
  );
}
export default IconsBox;
