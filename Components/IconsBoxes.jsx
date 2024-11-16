import Twitter from "../Icons/TwitterIcon";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Iinkedin";
import Email from "../Icons/Email";

function IconsBox() {
  return (
    <div
      className={`w-fit flex absolute top-[80vh] left-[50%] md:-translate-x-[50%] 2xl:gap-[40px] xl:gap-[30px] lg:gap-[30px] md:gap-[25px] rounded-[30px] backdrop-blur-[10px] mdx:flex-col mdx:left-[20px] mdx:top-[64%] mdx:bottom-[20px] mdx:gap-[20px]`}
    >
      <a
        href="https://x.com/TheoCode1?t=RKJDnha--DSi5J_Tppb5RA&s=09"
        target="_blank"
        className="bg-iconsColor flex justify-center items-center text-toolsBarColor rounded-full text-[1.7rem] w-[50px] h-[50px] text-center hover:bg-iconsColor/80 active:bg-iconsColor/50 transition-all duration-200"
      >
        {<Twitter />}
      </a>
      <a
        href="https://github.com/simocode-99"
        target="_blank"
        className="bg-iconsColor flex justify-center items-center text-toolsBarColor rounded-full text-[1.7rem] w-[50px] h-[50px] text-center hover:bg-iconsColor/80 active:bg-iconsColor/50 transition-all duration-200"
      >
        {" "}
        {<Github />}
      </a>
      <a
        href="https://www.linkedin.com/in/theo-code-0b35a632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        className="bg-iconsColor flex justify-center items-center text-toolsBarColor rounded-full text-[1.7rem] w-[50px] h-[50px] text-center hover:bg-iconsColor/80 active:bg-iconsColor/50 transition-all duration-200"
      >
        {<Linkedin />}
      </a>
      <a
        href="codingbisuness99@gmail.com"
        target="_blank"
        className="bg-iconsColor flex justify-center items-center text-toolsBarColor rounded-full text-[1.7rem] w-[50px] h-[50px] text-center hover:bg-iconsColor/80 active:bg-iconsColor/50 transition-all duration-200"
      >
        {" "}
        {<Email />}{" "}
      </a>
    </div>
  );
}
export default IconsBox;
