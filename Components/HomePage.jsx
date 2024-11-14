import TopBar from "./TopBar";
import Robot1 from "../assets/Robot 1.png";
import Robot2 from "../assets/Robot 2.png";

function HomePage() {
  return (
    <section className="h-screen w-full relative" id="homePage">
      <TopBar />
      <img
        src={Robot1}
        alt="Robot 1"
        className="2xl:w-[386px] 2xl:h-[686px] xl:w-[386px] xl:h-[686px] md:w-[341px] md:h-[606px] 2xl:absolute 2xl:top-[95vh] 2xl:left-[45px] 2xl:-translate-y-[100%] left-[40px] md:top-[95vh] md:left-[30px] lg:opacity-100 md:opacity-[0.65] absolute top-[95vh] -translate-y-[100%] "
      />
      <img
        src={Robot2}
        alt="Robot 2"
        className="2xl:w-[349px] 2xl:h-[699px] xl:w-[349px] xl:h-[699px] md:w-[310px] md:h-[620px] xs:w-[349px] xs:h-[699px] 2xl:top-[95vh] 2xl:right-[45px] 2xl:-translate-y-[100%] lg:right-[40px] md:top-[95vh] md:right-[30px] lg:opacity-100 md:opacity-[.65] absolute top-[95vh] right-[40px] -translate-y-[100%]"
      />
      <div className="InterfaceInfo w-fit text-center lg:translate-y-[18vh] md:translate-y-[23vh] lg:bg-transparent md:bg-white/50 md:backdrop-blur-[10px] lg:p-0 md:p-[15px] md:pb-[15px] mx-auto md:rounded-[10px] lg:transition-none lg:hover:scale-[1] md:hover:scale-[1.02] md:transition-all md:transition-linear md:duration-500 cursor-pointer">
        <h2 className="lg:text-[2.1rem] md:text-[1.5rem] lg:text-textColor md:text-toolsBarColor text-center font-[600] lg:leading-[4rem] md:leading-[2rem]">
          Hi There!
        </h2>
        <div className="namHead flex items-center w-fit mx-auto lg:mb-[50px] md:mb-[20px] gap-[20px]">
          <span className="lg:text-textColor md:text-toolsBarColor text-[2.3rem] no-underline font-[600]">
            I'm
          </span>
          <h1 className="lg:text-textColor md:text-toolsBarColor lg:text-[45px] md:text-[30px] font-bold lg:leading-[3rem] md:leading-[2rem] border-b-2 bprder-solid lg:border-white md:border-toolsBarColor pb-0 ">
            Theo Code
          </h1>
        </div>
        <p className="lg:w-[470px] md:w-[350px] lg:text-textColor md:text-toolsBarColor lg:text-[1.6rem] md:text-[1.2rem] md:font-[480] text-center mx-auto ">
          I’m a <span className="font-bold">front-end developer</span> who’s all
          about creating smooth, responsive user interfaces with{" "}
          <span className="font-bold">ReactJS</span> and{" "}
          <span className="font-bold">Tailwind CSS</span>. I’m focused on
          building clean, intuitive designs that feel great to use. Always
          learning and pushing to make every project better than the last!
        </p>
      </div>
    </section>
  );
}
export default HomePage;
